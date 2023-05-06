const loader = (loading) => {
    // 此处可以获取子应用是否加载成功,可以用来触发全局的loading
    console.log('loading', loading);
};

export const Microconfig = [
    {
        name: 'vue2',
        entry: 'http://localhost:8002',
        container: '#subContainer',
        activeRule: '/vue2',
        loader,
    },
];
