import Homepage from '../pages/Home.vue'
import Product from '../pages/Product.vue'

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
            path: '/product',
            name: 'product',
            component: Product,
        },
    ]
}
