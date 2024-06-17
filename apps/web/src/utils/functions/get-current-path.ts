export function getCurrentPath(size: "short" | "full" = "full") {
  if (size === "full") return window.location.href;
  else return window.location.pathname;
}
