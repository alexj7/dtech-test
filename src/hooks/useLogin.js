import { useState } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    console.log("Hello", username);
  }

  return { username, setUsername, handleLogin };
};
