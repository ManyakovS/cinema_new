export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

export function deleteCookie(name: string) {
  // Устанавливаем дату в прошлом, чтобы удалить куки
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

export function setCookie(name: string, value: string, age: number) {
  document.cookie = `${name}=${value}; max-age=` + age;
}
