import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Secure from '../views/secure'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [s
        {
            path: '/',
            redirect: { 
                name: 'login'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login 
        },
        {
            path: '/secure',
            name: 'secure',
            component: Secure
        }
    ]
})
'