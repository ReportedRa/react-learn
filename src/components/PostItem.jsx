import React from "react";
import MyButton from "./UI/button/MyButton";

// Компонент для создания постов. Написана функция удаления поста
const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
