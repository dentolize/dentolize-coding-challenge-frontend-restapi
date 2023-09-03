import { FC, ChangeEvent } from "react";
import { InputFieldProps } from "../../../utils/Interface";
import { InputStyled } from "../../styled/AddCustomerStyled/AddCustomer.Styled";
const InputField: FC<InputFieldProps> = ({ value, placeholder, onChange }) => {
  // pass input value to parent component to update corresponding state
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputStyled
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputField;
