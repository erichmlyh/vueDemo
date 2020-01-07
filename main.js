import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import iView from 'iview';
import ElementUI from 'element-ui';
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(ElementUI);

// const Foo = { template: "<div>foo</div>" };
// const Bar = { template: "<div>bar</div>" };
// const routes = [
//   { path: "/foo", component: Foo },
//   { path: "/bar", component: Bar }
// ];
// const router = new VueRouter({
//   routes 
// });


new Vue({
    el: '#app',
    // router,
    render: h => h(App)
});
