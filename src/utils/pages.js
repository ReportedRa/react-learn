// Функция для подсчета количества страниц
export const getPageCount = (totalPages, limit) => {
    return Math.ceil(totalPages / limit);
};
