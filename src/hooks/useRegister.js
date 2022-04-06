import { useState } from "react";

export const useRegister = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleRegister = () => {
    console.log('Si hay valores')
  };

  const handleAvatar = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      setAvatar(reader.result)
    };
    reader.readAsDataURL(file);
  }

  return {
    name, setName,
    lastName, setLastName,
    username, setUsername,
    avatar, setAvatar,
    handleAvatar,
    handleRegister,
  };
};
