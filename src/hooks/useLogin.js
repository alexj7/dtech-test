import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";



export const useLogin = () => {

  // CONTEXT
  const { state, setState } = useContext(DataContext)

  // LOCAL STATE
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");


  // METHODS
  const handleLogin = (e) => {

    const localUser = state.users.find(user => user.username == username)
    if (localUser) {
      setState({ ...state, user: localUser, logged: true })
      return
    }

    setError('no se encontro un usuario registrado como: ' + username)

  }

  return {
    username, setUsername,
    error, setError,
    handleLogin
  };
};
