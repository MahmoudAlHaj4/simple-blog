import SocialButtons from './socialButtons';
import SignupForm from './signupForm';

type SignUpProps = {
  setIsLogin: (value: boolean) => void;
};

const SignupBox = ({setIsLogin}: SignUpProps) => {
  return (
    <div className="signup-box w-full md:w-1/2 h-full flex flex-col gap-4 bg-customBlack rounded-md p-4 shadow-xl  hover:shadow-2xl">
      <h1 className="text-sm text-center p-2">Sign Up with:</h1>
      

      <SocialButtons />


      <div className="line flex items-center justify-center w-full my-2">
        <hr className="border-t-2 border-customGray w-28 md:w-56" />
        <p className="text-center mx-2">OR</p>
        <hr className="border-t-2 border-customGray w-28 md:w-56" />
      </div>


      <SignupForm setIsLogin={setIsLogin}/>
    </div>
  );
};

export default SignupBox;
