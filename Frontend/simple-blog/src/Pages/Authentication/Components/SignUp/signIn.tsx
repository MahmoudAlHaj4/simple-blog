import { useState } from "react";
import InputField from "./inputField"
import { useAuth } from "../../../../Hooks/useLogin";
type SignInProps = {
  setIsLogin: (value: boolean) => void;
};

const SignIn = ({ setIsLogin }: SignInProps) => {
    const {loginUser} = useAuth()
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      loginUser(email , password)
    }
  
  return (
    <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 text-white">
      <div className="signin-form w-full sm:w-2/3 md:w-1/3 lg:w-1/4 bg-customBlack rounded-md p-6 shadow-xl ">

        <div className="title text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold">Welcome Back</h1>
          <span className="block text-sm text-gray-400 mt-2">Sign in to continue</span>
        </div>

      
        <form  onSubmit={handleSubmit}>
         
          <InputField
            name="Email"
            placeholder="Enter your Email"
            type="email"
            labelText="Email"
            id="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            classes="my-2"
            />

          
          <InputField
            name="Password"
            placeholder="Enter your Password"
            type="password"
            labelText="Password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            classes="my-2"
          />

        
          

          <button
            type="submit" 
            className="w-full bg-customYellow h-10 py-2 rounded-[5px] text-black mt-2 hover:bg-customYellow transition duration-200"
            onClick={()=>{console.log("clicked")}}
          >
            Sign In
          </button>
        </form>

      
        <p className="text-white text-center text-sm mt-4">
          Don't have an account?{" "}
          <span
            className="text-customYellow cursor-pointer"
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </span>
        </p>
      </div>

   
      <footer className="absolute bottom-0 w-full text-center py-4 text-xs text-white bg-customBlack">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" className="hover:text-customYellow">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-customYellow">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-customYellow">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default SignIn;
