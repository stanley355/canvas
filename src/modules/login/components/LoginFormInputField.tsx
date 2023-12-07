import React from "react";

interface ILoginFormInputField {
  key?: string;
  icon: React.ReactNode;
  title: string;
  inputType: string;
  inputName: string;
  inputID: string;
  placeholder: string;
}

const LoginFormInputField = (props: ILoginFormInputField) => {
  const { icon, title, inputType, inputName, inputID, placeholder } = props;
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={inputName} className="flex items-center gap-1">
        {icon}
        <span>{title}</span>
        <span className="text-red-500">*</span>
      </label>
      <input
        type={inputType}
        name={inputName}
        id={inputID}
        className="p-2 rounded-lg focus:outline-none border border-blue-900"
        placeholder={placeholder}
      />
    </div>
  );
};

export default LoginFormInputField;
