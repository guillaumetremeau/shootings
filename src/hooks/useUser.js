import { useState } from "react";

function useUser() {
  const getUser = () => {
    const userString = localStorage.getItem("user");
    return JSON.parse(userString);
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return {
    setUser: saveUser,
    user,
  };
}

export default useUser;
