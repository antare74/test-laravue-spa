import VueRouter from 'vue-router';
import login from '../middleware/Login.vue'
import logout from '../middleware/Logout.vue'
const baseUrl = window.location.origin;

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('../pages/Product.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../pages/Profile.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: logout,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login,
    },
]

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('__authToken') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let token = localStorage.getItem('__authToken')
            let headers = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+ token,
                }
            }

            fetch(baseUrl+"/api/auth/check-login", headers)
                .then(response => response.json())
                .then(data  => {
                    console.log(data)
                    if (data == 1) {
                        next()
                    }else{
                        next({
                            path: '/login',
                            params: { nextUrl: to.fullPath }
                        })
                    }
                });
        }
    } else {
        next()
    }
})

export default router
