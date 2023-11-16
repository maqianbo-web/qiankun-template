import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import './public-path';
import routes from './router';
// import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
    const { container } = props;
    router = new VueRouter({
        // 注意这里的name,最好不要写死，直接使用主应用传过来的name
        base: window.__POWERED_BY_QIANKUN__ ? `/${props.name}` : '/',
        routes,
    });
    Vue.use(VueRouter);
    instance = new Vue({
        router,
        render: (h) => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[vue2] vue app bootstraped');
}

export async function mount(props) {
    props.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log('子应用', state, prev);
    });

    render(props);
}

export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
    router = null;
}
