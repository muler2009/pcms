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
  const [errorMessage, setErrorMessage] = useState('');

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
      if (!error) {
        console.log(error)
      } else if (error.status === 400) {

        setErrorMessage(error.response?.data?.error || 'Please fill the username and password'); // set error message state
        setLoginFailedModal((prev) => !prev); // show modal

      } else if (error.status === 401) {

        setErrorMessage(error.response?.data?.detail || "No active account found with the given credentials"); // set error message state
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
  };

};

export default useLogin