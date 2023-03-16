export function getAuthKey() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    return user.token;
  }
  return null;
}
