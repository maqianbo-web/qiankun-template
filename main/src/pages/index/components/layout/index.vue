<template>
    <div class="layout">
        <slide-bar />
        <main>
            <Header />
            <router-view />
            <div class="container" id="subContainer"></div>
        </main>
    </div>
</template>

<script>
import SlideBar from './SlideBar.vue';
import Header from './Header.vue';
export default {
    name: '',
    components: {
        SlideBar,
        Header,
    },
    data() {
        return {};
    },
    computed: {},
    filters: {},
    created() {},
    methods: {},
};
</script>
<style lang="less" scoped>
.layout {
    display: flex;
    height: 100%;

    main {
        flex: 1;
        display: flex;
        flex-direction: column;

        .container {
            flex: 1;
            overflow: auto;
        }
    }
}
</style>
