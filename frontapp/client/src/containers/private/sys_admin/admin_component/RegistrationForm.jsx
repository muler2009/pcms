import React, { useEffect, useRef, useState } from "react";
import {
  InputField,
  SelectInput,
  DatePickComponent,
  CheckBok,
  Button,
  Input,
} from "../../../../components/Reuseable";
import { useDispatch, useSelector } from "react-redux";
import { gender } from "../constants/department";
import {
  OuterContainer,
  InnerContainer,
} from "../../../../assets/css/Container";

const RegistrationForm = () => {
  const [register, set] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    email: "",
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

  return (
    <fieldset className="border border-gray-300 px-5 py-5 bg-white">
      <legend className="text-gray-800 font-medium font-Poppins px-2">
        User Registration
      </legend>
      <InnerContainer className="mx-auto bg-white relative">
        <form
          className="w-full mt-5 flex space-x-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="w-1/3 flex flex-col gap-6">
            <Input
              label="First Name"
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              className="input-sm rounded-none"
              value={register.first_name}
              onChange={registerationHandler}
            />
            <Input
              label="Last Name"
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              className="input-sm rounded-none"
              value={register.last_name}
              onChange={registerationHandler}
            />
          </div>
          {/* row 2 */}
          <div className="w-1/3 flex flex-col gap-6">
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Email address"
              name="email"
              value={register.email}
              className="input-sm rounded-none "
              onChange={registerationHandler}
            />
            <SelectInput
              label="Sex"
              type="text"
              id="gender"
              name="gender"
              value={register.gender}
              onChange={registerationHandler}
              data={gender}
            />
          </div>
          <div className="w-1/3 flex flex-col gap-6">
            <div className="relative x-10">
              <DatePickComponent
                selected={register.date_of_birth}
                onChange={handleDateChange}
              />
            </div>
            <div className="flex space-x-5 justify-end mr-12">
              <Button
                label="Save"
                className="px-5 btn-sm bg-[#ddd] text-xs border-[2px] border-black rounded-none hover:bg-white hover:text-black hover:ring-2 hover:ring-green-900 w-[20%]"
              />
              <Button
                label="Clear"
                className="px-5 btn-sm bg-[#ddd] text-xs border-none rounded-none hover:bg-white hover:text-black hover:ring-2 hover:ring-green-900 w-[20%]"
                onClick={registerationCleanFields}
              />
            </div>
          </div>

          {/* row  */}
        </form>
      </InnerContainer>
    </fieldset>
  );
};

export default RegistrationForm;
