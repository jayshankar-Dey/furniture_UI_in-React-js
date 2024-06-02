import bgimg from "../../assets/images/Rectangle 1441.png"
import HeroContent from "./HeroContent"
import Navbar from "./Navbar"

const Hero = () => {
  return (
    <div className="w-full md:h-[90vh] relative">
      <img src={bgimg} alt=""  className="w-full sm:h-full"/>
      <div className="absolute w-full h-full bg-transparent  top-0 left-0 ">
       <Navbar/>
       <HeroContent/>
      </div>
    </div>
  )
}

export default Hero
