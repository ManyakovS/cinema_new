import { ACCESS_TOKEN_KEY } from "@/stores/user";
import io from "socket.io-client";
export const socket = io("http://localhost:7000", {
    query: {
        token: localStorage.getItem(ACCESS_TOKEN_KEY),
    },
});
//# sourceMappingURL=index.js.map