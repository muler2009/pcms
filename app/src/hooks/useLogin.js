import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from "../services/api/authApiSlice";
import { setAuthData, clearAuthData } from "../services/features/auth/authSlice";
import { BiTrim } from "react-icons/bi";

const useLogin = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login] = useLoginMutation();


  const [loginError, setLoginError] = useState(false) // just to check notify the error for the user
  const [loginFailedModal, setLoginFailedModal] = useState(false) // for displaying the modal
  const [errorMessage, setErrorMessage] = useState(''); // for catching the error message and props it

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
      [event.target.name]: value, })

      setLoginError(false)
   }

  // A handler function when the login button on the form is clicked
  const onloginClicked = async(event) => {
    event.preventDefault();

    try{
      const response = await login(loginCredentials).unwrap() 
    
      // destructure the access and the refresh token from the response
      const { access, refresh } = response

      // storing the token in the browser local stroage
      localStorage.setItem('token', access)
      localStorage.setItem('refresh', refresh)

      // dispatching setAuth method to update the reducer value
      dispatch(setAuthData({isAuthenticated: true, access, refresh}));

      navigate('/admin')
      

    }catch(error){
      if (!error) {
        console.log(error)
      } else if (error.status === 400) {
        setErrorMessage(error.response?.data?.error || 'Please fill the username and password'); // set error message state
        setLoginError(true)
        setLoginFailedModal((prev) => !prev); // show modal

      } else if (error.status === 401) {

        setErrorMessage(error.response?.data?.detail || "No active account found with the given credentials"); // set error message state
        setLoginError(true)
        setLoginFailedModal((prev) => !prev); 

      }
    }
}


  return {
    loginCredentials, 
    loginFailedModal, 
    // errorCode, 
    errorMessage,
    setLoginFailedModal,
    InputchangeHandler,
    onloginClicked,
    loginError,
  };

};

export default useLogin