export const getLocaleStorage = () => {
    return localStorage.getItem('locale') || 'en'
}

export const setLocaleStorage = (data) => {
    localStorage.setItem('locale', data)
}