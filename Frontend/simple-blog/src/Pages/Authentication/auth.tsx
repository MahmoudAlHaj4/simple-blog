import Signup from "./Components/SignUp/signup";
import { useState } from "react";
import SignIn from "./Components/SignUp/signIn";
const Authentication = () => {

    const [isLogin, setIsLogin] = useState(true);

    return(
        <div>
             {isLogin ? (
                <SignIn setIsLogin={setIsLogin} />
              ) : (
                <Signup setIsLogin={setIsLogin} />
              )}
        </div>
    )
}
export default Authentication;
