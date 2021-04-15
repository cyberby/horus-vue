import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/contacts/:id',
    name: 'contacts.save',
    component: () => import('@/views/Contact/Contact.vue'),
  },
  {
    path: '/',
    name: 'contacts.index',
    component: () => import('@/views/Contact/Contacts.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
