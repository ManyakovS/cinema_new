export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}
export function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}
export function setCookie(name, value, age) {
    document.cookie = `${name}=${value}; max-age=` + age;
}
//# sourceMappingURL=get-cookie.js.map