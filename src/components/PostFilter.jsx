import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

// Компонент для сортировки по опциям и поисковая строка
const PostFilter = ({ filter, setFilter }) => {
    //
    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder="Поиск..."
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
            ></MyInput>
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                defaultValue="Сортировка"
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" },
                ]}
            ></MySelect>
        </div>
    );
};

export default PostFilter;
