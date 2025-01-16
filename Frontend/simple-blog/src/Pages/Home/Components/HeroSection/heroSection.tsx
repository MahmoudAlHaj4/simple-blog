import Navbar from "../Navbar/navbar"
import Description from "./Components/description"
import backgroundImage from '../../../../Assets/hero.jpg'

const HeroSection = ()=>{
    return (
        <div
        className="h-screen bg-black text-white flex flex-col justify-between"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="navbar">
          <Navbar />
        </div>
        <Description /> 
      </div>
    )
}

export default HeroSection