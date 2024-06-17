export const useIsActiveRoutePath = () => {
    const route = useRoute();
    const isRouteIncludeChildsActive = (url) => {
        return route.path.indexOf(url) === 0;
    };
    return {
        isRouteIncludeChildsActive,
    };
};
//# sourceMappingURL=use-is-active-route-path.js.map