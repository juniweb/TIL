import Vue from 'vue'
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },        
        {
            path: '/news',
            name: 'news',
            component: createListView('NewsList')
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskList')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsList')
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item',
            component: ItemView
        }
    ]
});
