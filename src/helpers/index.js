export const formatDate = (date) => {

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const today = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return today
}

export const formatMonth = (date) => {

    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const today = `${year}-${month.toString().padStart(2, '0')}`;
    return today
}