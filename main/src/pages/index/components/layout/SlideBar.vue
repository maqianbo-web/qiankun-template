<template>
    <el-menu
        class="menu"
        :class="{ 'menu-active': !isCollapse }"
        background-color="#545c64"
        text-color="#fff"
        :router="true"
        :collapse="isCollapse"
    >
        <el-menu-item v-for="(v, index) in routes" :key="v.path" :index="v.path">
            <i :class="icons[index % 4]"></i>
            <span slot="title">{{ v.name }}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import { getRoutes } from '../../utils/index';
export default {
    name: '',
    components: {},
    data() {
        return {
            icons: ['el-icon-location', 'el-icon-menu', 'el-icon-document', 'el-icon-setting'],
            routes: getRoutes(),
        };
    },
    computed: {
        ...mapGetters({
            isCollapse: 'isCollapse',
        }),
    },
    filters: {},
    watch: {},
    created() {},
    methods: {},
};
</script>
<style lang="less" scoped>
.menu {
    width: 65px;
    transition: width 0.2s;

    &-active {
        width: 210px;
    }
}
</style>
