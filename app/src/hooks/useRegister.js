import { useState } from "react";
import { useAddUsersMutation } from "../services/features/user/userApiSlice";

const useRegister = () => {
  const [addUsers] = useAddUsersMutation();

  const [register, set] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    email: "",
  });

  const [validators, setValidators] = useState({
    validate_name: false,
    birth_date: false,
    validate_gender: false,
    validate_is_staff: false,
    validate_is_active: false,
    validate_email: false,
  });

  const registerationHandler = (event) => {
    const type = event.target.type;

    const value =
      type === "checkbox" ? event.target.checked : event.target.value;
    set({
      ...register,
      [event.target.name]: value,
    });
  };

  const handleDateChange = (date) => {
    set({ ...register, date_of_birth: date });
  };

  const registerationCleanFields = () => {
    set({
      first_name: "",
      last_name: "",
      date_of_birth: "",
      gender: "",
      email: "",
    });
  };

  const onRegisterClicked = async (event) => {
    event.preventDefault();
    try {
      const registerData = {
        ...register,
        date_of_birth: register.date_of_birth.toISOString().slice(0, 10),
      };
      // const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

      const response = await addUsers(registerData).unwrap(); // Call addUser function
      const data = response.data; // Extract the data from the response
      if (response.status === 201) {
        registerationCleanFields();
        console.log("Congratulations, data submitted successfully");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    register,
    set,
    registerationHandler,
    registerationCleanFields,
    handleDateChange,
    onRegisterClicked,
  };
};

export default useRegister;
