import React from 'react'
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../services/api/authApiSlice';
import { clearAuthData } from '../services/features/auth/authSlice';

const useLogout = () => {

    const dispatch = useDispatch()
    const [ logout ] = useLogoutMutation()

    const onLogoutClicked = async() => {
        try{
          await logout()
          dispatch(clearAuthData())
          localStorage.removeItem('token')
        }catch(error){
          console.log(error)
    
        }
      }
    
  return {
    onLogoutClicked
  }
}

export default useLogout