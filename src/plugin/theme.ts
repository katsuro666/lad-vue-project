import type { ThemeType } from './theme.types'

const isUserHasDarkSystemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
export const userTheme: ThemeType | null = localStorage.getItem('theme') as ThemeType | null
export const systemTheme: ThemeType = isUserHasDarkSystemTheme ? 'darkTheme' : 'lightTheme'
export const currentTheme: ThemeType = userTheme || systemTheme
