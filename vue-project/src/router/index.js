import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../view/HomePage.vue'
const routes = [
    {
        path: '/signup',
        name: 'Signup',
        component: () => import(/* webpackChunkName: "Overview" */ '@/view/SignupPage.vue'),
    },
    {
        path: '/',
        name: 'Login',
        component: () => import('@/view/LoginPage.vue'),
    },
    {
        path: '/getpw',
        name: 'get_pw',
        component: () => import('@/view/LoginPage.vue'),
    },
    {
        path: '/homepage',
        name: 'HomePage',
        component: HomePage, 
        children: [
            {
                path: '/add_ex',
                name: 'Add',
                component: () => import(/* webpackChunkName: "AddExpense" */ '@/view/AddExpense.vue'),
            },
            {
                path: '/add_ex/edit/:id',
                name: 'add.edit',
                component: () => import(/* webpackChunkName: "AddExpense" */ '@/view/AddExpense.vue'),
            },
            {
                path: '/reports',
                name: 'reports',
                component: () => import(/* webpackChunkName: "ReportExpense" */ '@/view/ReportExpense.vue'),
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import(/* webpackChunkName: "ProfilePage" */ '@/view/ProfilePage.vue'),
            },
        ]
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    });
export default router;