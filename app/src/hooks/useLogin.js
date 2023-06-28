import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../services/features/user/userSlice";


const useLogin = () => {

  const dispatch = useDispatch()
  const [loginUser, {isLoading, isSuccess}] = useLoginUserMutation()
  const [loginFailedModal, setLoginFailedModal] = useState(false)

   const [login_attributes, set] = useState({
      username: "",
      password: "",
   })

   // Helper function for  handling input changes
   const InputchangeHandler = (event) => {
    const type = event.target.type
    const value = type === "checkbox" ? event.target.checked : event.target.value;
    set({
      ...login_attributes, 
      [event.target.name]: value, 
    })
   }

  // a function to clean the innput up
   // on Login Clicked Handler

   const onLoginClicked = async() => {
      if(login_attributes.username === "" || login_attributes.password === ""){
        setLoginFailedModal(prev => !prev)
      }
      else{  
        dispatch(loginUser(login_attributes))
        set({
          username: "",
          password: ""
        })
      }
   }

  return {
    login_attributes, 
    loginFailedModal, setLoginFailedModal,
    InputchangeHandler,
    onLoginClicked
  };

};

export default useLogin;