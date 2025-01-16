import DescriptionSection from "./description"
import SignupBox from "./signupBox"
import { useState } from "react"

type SignupProps = {
    setIsLogin: (value: boolean) => void;
}

const Signup = ({setIsLogin}:SignupProps) => {

    return (
        <div className="w-full h-screen flex justify-center items-center text-white p-4 sm:p-6">
            <div className="signup-container w-full max-w-screen-lg h-auto md:h-4/5 flex flex-col md:flex-row space-y-6 md:space-x-6">
            <DescriptionSection />    
            <SignupBox setIsLogin={setIsLogin}/>
            </div>
      </div>
    )
}

export default Signup