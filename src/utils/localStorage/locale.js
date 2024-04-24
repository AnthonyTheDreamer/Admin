import { defaultLocale } from '@/configs/locale'

export const getLocaleStorage = () => {
    return localStorage.getItem('locale') || defaultLocale
}

export const setLocaleStorage = (data) => {
    localStorage.setItem('locale', data)
}