/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-07-18 16:58:19
 * @LastEditors: 高江华
 * @LastEditTime: 2024-05-14 09:53:09
 * @FilePath     : \web-B-tmp\src\main.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import './styles/index.scss'
import router from './router'
import './router/guards'
import { createPinia } from 'pinia'
import i18n from './i18n'
import 'virtual:svg-icons-register'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import antd from 'ant-design-vue'
import App from './App.vue'
import './mock'
import filters from '@/filters'
import directives from '@/directives'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

filters(app)
directives(app)

app.use(router)
app.use(pinia)
app.use(i18n)
app.use(antd)

app.mount('#app')
