import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "../styles/App.css";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([]); // Рендер постов, добавление новых постов
    const [filter, setFilter] = useState({ sort: "", query: "" }); // Фильтр для сортировки и поиска
    const [modal, setModal] = useState(false); // Отображение модального окна
    const [totalPages, setTotalPages] = useState(0); // ПОдсчет общего кол-ва страниц
    const [limit, setLimit] = useState(10); // Лимит на вывод постов
    const [page, setPage] = useState(1); // Номер страницы
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); // Фильрация постов
    const lastElement = useRef(); // Поиск последнего элемента

    // Вывод постов в зависимости от номера страницы и лимита
    const [fetchPosts, isPostsLoading, postError] = useFetching(
        async (limit, page) => {
            const response = await PostService.getAll(limit, page);
            setPosts([...posts, ...response.data]);
            const totalPages = response.headers["x-total-count"];
            setTotalPages(getPageCount(totalPages, limit));
        }
    );
    // Использования хука для отслеживания последнего элемента
    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <>
            <div className="App">
                <MyButton
                    style={{ marginTop: "10px" }}
                    onClick={() => setModal(true)}
                >
                    Создать пост
                </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}></PostForm>
                </MyModal>
                <hr style={{ margin: "15px 0" }} />
                <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
                <MySelect
                    value={limit}
                    onChange={(value) => setLimit(value)}
                    defaultValue={"Кол-во элементов на странице"}
                    options={[
                        { value: 5, name: "5" },
                        { value: 10, name: "10" },
                        { value: 25, name: "25" },
                        { value: 50, name: "50" },
                        { value: -1, name: "Показать все" },
                    ]}
                ></MySelect>
                {postError && <h1>Произошла ошибка ${postError}</h1>}
                <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={"Посты про JS"}
                ></PostList>
                <div ref={lastElement} style={{ height: "20px" }}></div>
                {isPostsLoading && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "50px",
                        }}
                    >
                        <Loader></Loader>
                    </div>
                )}
            </div>
        </>
    );
}

export default Posts;
