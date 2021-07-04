export const getCookie = (cookieName: string) => {
  const cookieArray = document.cookie.split('; ');
  for (let i = 0; i < cookieArray.length; i++) {
    const [name, value] = cookieArray[i].split('=');
    if (name === cookieName) return value;
  }
  return null;
};
