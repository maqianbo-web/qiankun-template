<template>
    <div class="header">
        <hamburger :is-active="!isCollapse" @toggleClick="toggleSideBar" />
    </div>
</template>

<script>
import Hamburger from '@/components/Hamburger/index.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
    name: '',
    components: {
        Hamburger,
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            isCollapse: 'isCollapse',
        }),
    },
    methods: {
        ...mapMutations('settings', ['SET_ISCOLLAPSE']),
        toggleSideBar() {
            this.SET_ISCOLLAPSE(!this.isCollapse);
        },
    },
};
</script>
<style lang="less" scoped>
.header {
    padding: 10px 0;
    border-bottom: 1px solid #ededed;
}
</style>
