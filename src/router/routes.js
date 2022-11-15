import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import paySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default [{
        path: '/center',
        name: 'Center',
        component: Center,
        meta: { show: true },
        children: [{
                path: 'myorder',
                component: MyOrder
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        name: 'paySuccess',
        component: paySuccess,
        meta: { show: true }
    },
    {
        path: '/pay',
        name: 'Pay',
        component: Pay,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/trade',
        name: 'Trade',
        component: Trade,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/ShopCart',
        name: 'ShopCart',
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/search/:keyword',
        component: Search,
        meta: { show: true },
        name: 'search'
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        path: '/',
        redirect: '/home'
    }
]