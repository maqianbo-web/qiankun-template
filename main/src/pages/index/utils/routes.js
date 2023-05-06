import { routes } from '../router/index.js';
import { Microconfig } from '../registerMicroAppsConfig.js';
export const getRoutes = () => {
    const microRoutes = Microconfig.map((v) => {
        return {
            name: v.name,
            path: v.activeRule,
            isMicro: true,
        };
    });
    const mainRoutes = routes.map(({ name, path }) => {
        return {
            name,
            path,
            isMicro: false,
        };
    });
    return [...mainRoutes, ...microRoutes];
};
