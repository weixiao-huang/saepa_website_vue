/**
 * Created by huangwx on 16-11-30.
 */
import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import Contact from '../components/ContactUs';
import Projects from '../components/Projects';
import Mooc from '../components/Mooc';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/projects', component: Projects },
    { path: '/mooc', component: Mooc },
  ],
});