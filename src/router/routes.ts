const Home = () => import(/* webpackChunkName: "HomePage" */ '@/views/HomeView.vue')
const AboutUs = () => import(/* webpackChunkName: "AboutUs" */ '@/views/AboutView.vue')
const Rent = () => import(/* webpackChunkName: "Rent" */ '@/views/RentView.vue')
const Sell = () => import(/* webpackChunkName: "Sell" */ '@/views/SellView.vue')
const Buy = () => import(/* webpackChunkName: "Buy" */ '@/views/BuyView.vue')


export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/rent',
        name: 'Rent',
        component: Rent
    },
    {
        path: '/sell',
        name: 'Sell',
        component: Sell
    },
    {
        path: '/buy',
        name: 'Buy',
        component: Buy
    },
]