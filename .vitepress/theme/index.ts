import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import CustomLayout from './components/CustomLayout.vue'
import './style/index.css'
import Linkcard from './components/LinkCard.vue'
import ArticleMetadata from "./components/ArticleMetadata.vue"

export default {
    extends: DefaultTheme,
    Layout: CustomLayout,
    enhanceApp({ app, router }) {
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        };
        app.component('Linkcard', Linkcard);
        app.component('ArticleMetadata', ArticleMetadata);
    },
}