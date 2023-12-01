import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { AllThemesType } from '@/components/AppHeader/AppHeader.types'
import { systemTheme } from '@/plugin/theme'
import { useTheme } from 'vuetify'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref(localStorage.getItem('theme') || null)
  const theme = useTheme()

  function changeTheme(themeTitle: AllThemesType) {
    if (themeTitle === 'systemTheme') {
      localStorage.removeItem('theme')
      currentTheme.value = systemTheme
      theme.global.name.value = systemTheme
      return null
    } else {
      localStorage.setItem('theme', themeTitle)
      currentTheme.value = themeTitle
      theme.global.name.value = themeTitle
      return themeTitle
    }
  }
  return { currentTheme, changeTheme }
})
