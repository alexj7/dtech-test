import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { alphaNumericMax20, alphaMax20 } from '../utils/regex'

export const useRegister = () => {
  // CONTEXT
  const { state, setState } = useContext(DataContext)


  // LOCAL STATE
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {

    // validate fields
    setError('')
    if (!alphaMax20.test(name)) {
      setError('El Nombre debe tener entre 3 a 20 caracteres alfabeticos')
      return
    }

    if (!alphaMax20.test(lastName)) {
      setError('El Apellido debe tener entre 3 a 20 caracteres alfabeticos')
      return
    }

    if (!alphaNumericMax20.test(username)) {
      setError('El Nombre de usuario debe tener entre 3 a 20 caracteres alfanumericos')
      return
    }

    const localUser = state.users.find(user => user.username == username)
    if (localUser) {
      setError('Ya existe un usuario registrado como: ' + username)
    }

    const newUser = {
      name,
      surname: lastName,
      username,
      avatar
    }

    // submit
    setState({ ...state, user: newUser, logged: true })


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
    error, setError,
    handleAvatar,
    handleRegister,
  };
};
