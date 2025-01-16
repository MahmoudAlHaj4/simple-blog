import InputField from "./inputField";
import { useRegister } from "../../../../Hooks/useRegister";
import { useState } from "react";

type SignupProps = {
  setIsLogin: (value: boolean) => void;
};

const SignupForm = ({ setIsLogin }: SignupProps) => {
  const {registerUser, isLoading , successMessage , error} = useRegister()
  const [formData , setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password:''  })
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {first_name , last_name , email ,password} = formData
    registerUser(first_name , last_name, email, password)
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

  return (
    <form className="signup-form flex flex-col px-4 sm:px-6" onSubmit={handleSubmit}>
      <div className="flex justify-center items-center gap-4 flex-col ">
        <div className="name-inputs flex flex-col sm:flex-row gap-2 w-full">
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <InputField
              name="first_name"
              placeholder="Enter your First Name"
              type="text"
              labelText="First Name"
              id="first_name"
              onChange={handleChange}
              
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <InputField
              name="last_name"
              placeholder="Enter your Last Name"
              type="text"
              labelText="Last Name"
              id="last_mame"
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className="inputs flex flex-col gap-2 w-full">
          <InputField
            name="email"
            placeholder="Enter your Email"
            type="email"
            labelText="Email"
            id="email"
            onChange={handleChange}
            required={true}
          />
          <InputField
            name="password"
            placeholder="Enter your Password"
            type="password"
            labelText="Password"
            id="password"
            onChange={handleChange}
            required={true}
          />
          <button
            type="submit"
            onClick={()=>{console.log("clicked")}}
            className="w-full bg-customYellow h-10 py-2 rounded-[5px] text-black mt-2 hover:bg-customYellow transition duration-200"
          >
            SignUp
          </button>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              className="text-customYellow cursor-pointer"
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
