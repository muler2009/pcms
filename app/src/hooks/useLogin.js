import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from "../services/features/auth/authApiSlice";
import { setUsersCreditials } from "../services/features/auth/authSlice";



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

   // on Login Clicked Handler
  const onloginClicked = async(event) => {
    event.preventDefault()
    try{
      const userData = await login(loginCredentials).unwrap()
      dispatch(setUsersCreditials({ ...userData, username: loginCredentials.username }))
      navigate('/test_api')
      console.log("Congra")
    }catch(err){
      console.log("error")
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