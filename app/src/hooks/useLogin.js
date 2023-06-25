import { useState } from "react";

const useLogin = () => {

   const [login_attributes, set] = useState({
      username: "",
      password: "",
      errorMessage: "",
   })

   const InputchangeHandler = (event) => {
    const type = event.target.type
    const value = type === "checkbox" ? event.target.checked : event.target.value;
    set({
      ...login_attributes, 
      [event.target.name]: value, 
    })
   }

  return {
    login_attributes, InputchangeHandler
  };

};

export default useLogin;