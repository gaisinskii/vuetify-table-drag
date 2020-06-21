import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import PageTable from '@/views/PageTable/PageTable.vue';
import PageEdit from '@/views/PageEdit/PageEdit.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'PageTable',
    component: PageTable,
  },
  {
    path: '/edit/:id',
    name: 'PageEdit',
    component: PageEdit,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
