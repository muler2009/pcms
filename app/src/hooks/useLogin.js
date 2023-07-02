import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from "../services/api/authApiSlice";
import { setAuthData, clearAuthData } from "../services/features/auth/authSlice";

const useLogin = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login] = useLoginMutation()


  const [loginFailedModal, setLoginFailedModal] = useState(false)
  const [errorCode, setErrorCode] = useState(null); 

   const [loginCredentials, setLoginCredentials] = useState({
      username: "",
      password: "",
   })

   // Helper function for  handling input changes
   const InputchangeHandler = (event) => {

    const type = event.target.type

    const value = type === "checkbox" ? event.target.checked : event.target.value;

    setLoginCredentials({
      
      ...loginCredentials, 
      [event.target.name]: value, 

    })
   }

  // A handler function when the login button on the form is clicked
  const onloginClicked = async(event) => {
    event.preventDefault()
    try{
      const response = await login(loginCredentials).unwrap() 

      const { access } = response

      localStorage.setItem('token', access)

      dispatch(setAuthData({isAuthenticated: true, access}));

      navigate('/welcome')

    }catch(error){
      if (error.status === 400) {
        setLoginFailedModal((prev) => !prev);
      }
  }
}


  return {
    loginCredentials, 
    loginFailedModal, 
    setLoginFailedModal,
    InputchangeHandler,
    onloginClicked,
    errorCode
  };

};

export default useLogin