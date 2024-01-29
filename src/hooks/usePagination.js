import { useMemo } from "react";

// Хук для кеширования подсчетов кол-ва страниц
export const usePagination = (totalPages) => {
    const pageRender = useMemo(() => {
        let pagesArray = [];
        for (let i = 0; i < totalPages; i++) {
            pagesArray.push(i + 1);
        }
        return pagesArray;
    }, [totalPages]);
    return pageRender;
};
