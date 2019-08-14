import Vue from "vue";
import VueRouter from "vue-router";
const Login = ()=>import("../views/login/Login") ;


Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:'/login',component:Login}
    ]
})







