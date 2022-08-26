/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
declare module 'wangeditor'
declare module 'css-color-function'
declare module 'fuse.js'