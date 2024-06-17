import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute, } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { NavigationRoute, registerRoute } from "workbox-routing";
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();
registerRoute(new NavigationRoute(createHandlerBoundToURL("index.html")));
self.skipWaiting();
clientsClaim();
//# sourceMappingURL=claims-sw.js.map