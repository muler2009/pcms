import {useState} from 'react'

const useRegister = () => {
  const [register, set] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    is_staff: false,
    is_active: false,
    email: "",
    username: "",
    password: "",
    confirm_password: ""
  })

  const [validators, setValidators] = useState({
    validate_name: false,
    birth_date: false,
    validate_gender: false,
    validate_is_staff: false,
    validate_is_active: false,
    validate_email: false

  })

  const registerationHandler = (event) => {
    const type = event.target.type
    
    const value = type === "checkbox" ? event.target.checked : event.target.value
    set({
        ...register,
        [event.target.name]: value
    })
  }

  const handleDateChange = (date) => {
    set({ ...register, birth_date: date });
  };

  const registerationCleanFields = () => {
    set({
      first_name: "",
      last_name: "",
      birth_date: "",
      gender: "",
      is_staff: false,
      is_active: false,
      email: "",
      username: "",
      password: "",
      confirm_password: ""
    })
  }


  return{
    register,
    set,
    registerationHandler,
    registerationCleanFields,
    handleDateChange
  }
}

export default useRegister;