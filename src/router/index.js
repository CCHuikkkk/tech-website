import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // 首页组件
import AboutUs from '../views/AboutUs.vue'; // 关于我们组件
import ContactUs from '../views/ContactUs.vue'; // 联系我们组件
import ProductsPage from '../views/ProductsPage.vue'; // 产品服务组件
import MediaPage from '../views/MediaPage.vue'; // 媒体动态组件
import TalentPage from '../views/TalentPage.vue'; // 人才发展组件

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/about-us', component: AboutUs, name: 'AboutUs' },
    { path: '/contact', component: ContactUs, name: 'ContactUs' },
    { path: '/products', component: ProductsPage, name: 'ProductsPage' },
    { path: '/media', component: MediaPage, name: 'MediaPage' },
    { path: '/talent', component: TalentPage, name: 'TalentPage' },
];

const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === 'production' ? '/tech-website/' : '/'),
    routes,
});

export default router;