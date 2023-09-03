// Helpers
import { FC, useState, FormEvent } from "react";
import { useCustomersContext } from "../../../utils/Hooks";

// Nested Components
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { CustomerInterface } from "../../../utils/Interface";

const AddCustomerForm: FC = () => {
  // get customersList to add to it new customer
  // get setCustomers to set new list of customers
  const { customersList } = useCustomersContext();

  const navigate = useNavigate();

  // Form local state
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // From Methods
  const handleSubmit = (event: FormEvent) => {
    // prevent default behavior of submitting and reloading
    event.preventDefault();
    // validate all inputs were filled
    if (firstName && lastName && email && phone) {
      // willl ignore next line error since I could not find a solution yet
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const newCustomersList: CustomerInterface[] = [
        ...customersList,
        {
          id: Math.random() * 1000,
          firstName,
          lastName,
          email,
          phone,
        },
      ];
      // here we could call fetch Post API request to add new customer to db.json

      // empty fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");

      // redirect to main page
      navigate("/", { replace: true });
    } else {
      // if not all field were filled
      alert("Kindly Fill all customer information!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* First Name Input  */}
      <InputField
        value={firstName}
        placeholder="First Name"
        onChange={setFirstName}
      />
      {/* Last Name Input  */}
      <InputField
        value={lastName}
        placeholder="Last Name"
        onChange={setLastName}
      />
      {/* Email Input  */}
      <InputField value={email} placeholder="Email" onChange={setEmail} />
      {/* Phone Input  */}
      <InputField
        value={phone}
        placeholder="Phone Number"
        onChange={setPhone}
      />
      <input type="submit" value="Add Customer" />
    </form>
  );
};

export default AddCustomerForm;
