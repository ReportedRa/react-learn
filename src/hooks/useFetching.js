import { useState } from "react";

// Хук для поимки ошибок и вывода лоадера во время загрузки списка постов
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };
    return [fetching, isLoading, error];
};
