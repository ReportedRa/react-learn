import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useState } from "react";

// Компонент для создания постов
const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: "", body: "" });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({ title: "", body: "" });
    };

    return (
        <form action="">
            <MyInput
                placeholder="Название поста"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
            ></MyInput>
            <MyInput
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                placeholder="Описание поста"
            ></MyInput>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
