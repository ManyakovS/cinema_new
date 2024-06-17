import { computed } from "vue";
import { useIsActiveRoutePath } from "@/utils/hooks/use-is-active-route-path";
export const useIsNavItemActive = (item) => {
    const { isRouteIncludeChildsActive } = useIsActiveRoutePath();
    const pseudoChildsIsActive = computed(() => {
        const childs = item.childs ?? [];
        if (!childs.length)
            return false;
        return !!childs.find(({ to }) => to ? isRouteIncludeChildsActive(to) : false);
    });
    const isNavItemActive = computed(() => {
        const { to } = item;
        return (to && isRouteIncludeChildsActive(to)) || pseudoChildsIsActive.value;
    });
    return { isNavItemActive };
};
//# sourceMappingURL=use-is-nav-item-active.js.map