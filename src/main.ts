import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { darkTheme, lightTheme } from './plugin/vuetify'
import { systemTheme, userTheme } from './plugin/theme'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: userTheme || systemTheme,
    themes: {
      darkTheme,
      lightTheme
    }
  }
})

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
