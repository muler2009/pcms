import React from "react";
import { department } from "../../pages/private/sys_admin/constants/department";

export const SelectInputField = ({
  label,
  id,
  defaultValue,
  name,
  type,
  placeholder,
  htmlFor,
  onChange,
  data,
}) => {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        type={type}
        className="peer w-full h-10 font-Poppins text-sm focus:outline-none placeholder-transparent border-b-2 border-gray-600 border-gray-30 bg-white text-blue-700"
        placeholder={placeholder}
        data={data}
      >
        <option className="text-sm text-black">--Select One --</option>
        {data?.map((data, index) => (
          <option key={index}>{data.label}</option>
        ))}
      </select>
      <label
        htmlFor={htmlFor}
        className="font-Poppins text-sm absolute left-0 -top-3.5 peer-placeholder-shown:text-base text-gray-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-400"
      >
        {label}
      </label>
    </div>
  );
};

export const SelectInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  htmlFor,
  onChange,
  data,
  value,
}) => {
  return (
    <div className="font-Poppins flex justify-center items-center space-x-7 text-sm">
      <label htmlFor={name} className="text-[15px] pr-4">
        {label}
      </label>

      <select
        id={id}
        name={name}
        type={type}
        className="select-sm rounded-none"
        placeholder={placeholder}
        data={data}
        value={value}
        onChange={onChange}
      >
        <option className="text-sm text-black">--Select One --</option>
        {data?.map((data, index) => (
          <option key={data.label} value={data.label}>
            {data.label}
          </option>
        ))}
      </select>
    </div>
  );
};
