import HeroSection from "./Components/HeroSection/heroSection"
import MysterySection from "./Components/MysterySection/mysterySection"
import TechSection from "./Components/TechSection/techSection"
import EntertainmentSection from "./Components/Entertainment/entertainment"
import FooterSection from "./Components/Footer/footer"

const Home = ()=>{
    return (
       <div className="home-container flex flex-col ">

        <div className=" hero-section">
            <HeroSection />
        </div>
        <hr className="border-t-2 border-white" />

        <div className="mystery-section">
           <MysterySection />
        </div>
            
        <hr className="border-t-2 border-white"/>

        <div className="entertainement-section">
           <EntertainmentSection />
        </div>

         <hr className="border-t-2 border-white"/>

        <div className="tech">
         <TechSection />
         </div>

         <hr className="border-t-2 border-white"/>

         <div className="footer">
            <FooterSection />
         </div>
         
       </div>
    )
}

export default Home