import { createWebHistory, createRouter } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('@/view/HomePage.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('@/view/SignupPage.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/LoginPage.vue'),
    },
    {
        path: '/getpw',
        name: 'Forgot_pwd',
        component: () => import('@/view/ForgotPass.vue'),
    },
    {
        path: '/add_ex',
        name: 'Add',
        component: () => import('@/view/AddExpense.vue'),
    },
    {
        path: '/reports',
        name: 'reports',
        component: () => import('@/view/ReportExpense.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    });
export default router;