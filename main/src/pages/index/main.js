import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.less';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

import {
    registerMicroApps,
    start,
    addGlobalUncaughtErrorHandler,
    setDefaultMountApp,
    initGlobalState,
} from 'qiankun';
import { Microconfig } from './registerMicroAppsConfig.js';

/**
 * 注册微应用
 */
registerMicroApps(Microconfig, {
    // qiankun 生命周期钩子 - 微应用加载前
    beforeLoad: (app) => {
        return Promise.resolve();
    },
    // qiankun 生命周期钩子 - 微应用挂载后
    afterMount: (app) => {
        return Promise.resolve();
    },
});

/**
 * 启动 qiankun
 */
// start();
start({
    prefetch: true, // 开启预加载
    sandbox: {
        experimentalStyleIsolation: true, //   开启沙箱严格模式,实验性方案
    },
});

/**
 * 设置主应用启动后默认进入的微应用
 * 对应子应用的 activeRule
 */
// setDefaultMountApp('/vue2');

// 添加全局异常捕获
addGlobalUncaughtErrorHandler((handler) => {
    console.log('异常捕获', handler);
});

// // 全局状态
// const state = {
//     id: 'main_主应用',
// };
// const actions = initGlobalState(state);

// actions.onGlobalStateChange((state, prev) => {
//     // state: 变更后的状态; prev 变更前的状态
//     console.log(state, prev);
// });

// actions.setGlobalState({
//     id: 'main_主应用',
// });
