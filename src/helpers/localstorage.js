export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.log('error setting data');
    }
}

export const getItem = (key) => {
    try {
        localStorage.setItem(key)
    } catch (error) {
        console.log('error getting data');
    }
}

export const removeItem = (key) => {
    try {
        localStorage.setItem(key)
    } catch (error) {
        console.log('error removing data');
    }
}