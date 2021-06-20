import {createRouter, createWebHashHistory} from "vue-router"
import ShowRests from './components/showRests.vue'
import SignUp from './components/SignUp.vue'
import adAndMap from './components/adAndMap.vue'

const routes = [
    { path: '/home', component: ShowRests },
    { path: '/signup', component: SignUp },
    { path: '/adandmap', component: adAndMap },
    { path: '/', component: SignUp}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;