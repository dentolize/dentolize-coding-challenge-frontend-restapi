// Helpers
import { FC, useState, FormEvent } from "react";

// Nested Components
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { CustomerInterface } from "../../../utils/Interface";

// Styled Component
import { FormStyled } from "../../styled/AddCustomerStyled/AddCustomer.Styled";

const AddCustomerForm: FC = () => {
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
    // More validation can be added using regular expression but needs more time.
    // for email: const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (firstName && lastName && email && phone) {
      const newCustomer: CustomerInterface = {
        id: Math.random() * 1000,
        firstName,
        lastName,
        email,
        phone,
      };
      // fetch Post API request to add new customer to db.json
      fetch("http://localhost:4000/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCustomer),
      });

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
    <FormStyled onSubmit={handleSubmit}>
      <div>
        {/* First Name Input  */}
        <InputField
          type="string"
          value={firstName}
          placeholder="First Name"
          onChange={setFirstName}
        />
        {/* Last Name Input  */}
        <InputField
          type="string"
          value={lastName}
          placeholder="Last Name"
          onChange={setLastName}
        />
      </div>
      <div>
        {/* Email Input  */}
        <InputField
          type="email"
          value={email}
          placeholder="Email"
          onChange={setEmail}
        />
        {/* Phone Input  */}
        <InputField
          type="tel"
          value={phone}
          placeholder="Phone Number"
          onChange={setPhone}
        />
      </div>
      <div>
        <input type="submit" value="Add Customer" />
      </div>
    </FormStyled>
  );
};

export default AddCustomerForm;
