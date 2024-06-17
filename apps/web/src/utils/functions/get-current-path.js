export function getCurrentPath(size = "full") {
    if (size === "full")
        return window.location.href;
    else
        return window.location.pathname;
}
//# sourceMappingURL=get-current-path.js.map