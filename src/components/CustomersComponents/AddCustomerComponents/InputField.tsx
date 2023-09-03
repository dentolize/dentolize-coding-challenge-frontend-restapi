import { FC, ChangeEvent } from "react";
import { InputFieldProps } from "../../../utils/Interface";

const InputField: FC<InputFieldProps> = ({ value, placeholder, onChange }) => {
  // pass input value to parent component to update corresponding state
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputField;
