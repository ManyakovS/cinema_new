export const useIsActiveRoutePath = () => {
  const route = useRoute();

  const isRouteIncludeChildsActive = (url: string): boolean => {
    return route.path.indexOf(url) === 0;
  };

  return {
    isRouteIncludeChildsActive,
  };
};
