<template>
    <el-menu
        class="menu"
        :class="{ 'menu-active': !isCollapse }"
        background-color="#545c64"
        text-color="#fff"
        :collapse="isCollapse"
        :router="true"
        @select="handleSelect"
    >
        <el-menu-item v-for="(v, index) in routes" :key="v.path" :index="v.path">
            <template slot="title">
                <i :class="icons[index % 4]"></i>
                <span slot="title">{{ v.name }}</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
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
    methods: {
        ...mapMutations('settings', ['SET_ISMICRO']),
        handleSelect(key) {
            console.log('key', key);
            const isMicro = this.routes.find((v) => v.path === key).isMicro;
            if (!isMicro) {
                this.SET_ISMICRO(false);
            }
        },
    },
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
