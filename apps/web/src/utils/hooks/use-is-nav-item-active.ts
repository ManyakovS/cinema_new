import { computed } from "vue";
import { useIsActiveRoutePath } from "@/utils/hooks/use-is-active-route-path";
import type { AppNavListItem } from "@/components/layout/app-footer/model/types";

export const useIsNavItemActive = (item: AppNavListItem) => {
  const { isRouteIncludeChildsActive } = useIsActiveRoutePath();

  /**
   * дочерние пункты меню, но с другим роутингом (для объединенного пункта меню заявок и анкет)
   */
  const pseudoChildsIsActive = computed((): boolean => {
    const childs = item.childs ?? [];

    if (!childs.length) return false;

    return !!childs.find(({ to }) =>
      to ? isRouteIncludeChildsActive(to) : false,
    );
  });

  const isNavItemActive = computed((): boolean => {
    const { to } = item;

    return (to && isRouteIncludeChildsActive(to)) || pseudoChildsIsActive.value;
  });

  return { isNavItemActive };
};
