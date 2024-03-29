/*
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-06-10 16:50:15
 * @LastEditors: 高江华
 * @LastEditTime: 2024-03-14 10:12:03
 * @Description: file content
 */
import useStore from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
// import userManage from './modules/userManage'
// import roleList from './modules/roleList'
// import permissionList from './modules/permissionList'
// import article from './modules/article'
// import articleCreate from './modules/articleCreate'

// export const privateRoutes = [userManage, roleList, permissionList, article, articleCreate]

export const publicRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            // 首页
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: 'home',
                    icon: 'HomeFilled'
                }
            }
            // 个人中心
            // {
            //     path: '/profile',
            //     name: 'profile',
            //     meta: {
            //         title: 'profile'
            //     },
            //     component: () => import('@/views/profile/index.vue')
            // },
            // 作品
            // {
            //     path: '/works',
            //     name: 'works',
            //     meta: {
            //         title: 'works'
            //     },
            //     component: () => import('@/views/works/index.vue')
            // },
            // 404
            // {
            //     path: '/404',
            //     name: '404',
            //     component: () => import('@/views/error-page/404.vue')
            // },
            // 401
            // {
            //     path: '/401',
            //     name: '401',
            //     component: () => import('@/views/error-page/401.vue')
            // }
        ]
    }
]

// 创建 vueRouter 路由
const router = createRouter({
    history: createWebHistory(),
    routes: publicRoutes
})
// 初始化路由表
export const resetRouter = () => {
    if (
        useStore().user.userInfo &&
        useStore().user.userInfo.permission &&
        useStore().user.userInfo.permission.menus
    ) {
        const menus = useStore().user.userInfo.permission.menus
        menus.forEach((menu: string) => {
            router.removeRoute(menu)
        })
    }
}
export default router
