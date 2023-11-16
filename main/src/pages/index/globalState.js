import { initGlobalState } from 'qiankun';
import store from './store/modules/app';

// 初始化 state
const actions = initGlobalState(store.state);

actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('主应用', state, prev);
});
// actions.setGlobalState(state);

actions.setGlobalState('user', { userName: '1111' });
