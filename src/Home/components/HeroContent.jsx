

const HeroContent = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center ">
      <i className="text-center md:text-5xl mt-5 md:mt-12 lg:text-6xl text-3xl leading-10 ">Make your interior More <br /> Minimalistic & Morden</i>

      <div className="md:w-96 w-64 p-2 flex items-center border justify-center backdrop-blur-md rounded-full mt-10 md:mt-24 border-gray-400 h-12 overflow-hidden md:bg-slate-600 md:backdrop-blur-2xl
      ">
      <input type="text" className=" bg-transparent  outline-none w-full h-full pl-4 pr-2"  placeholder="Search...."/>
      <button className="text-white bg-orange-400  w-10 h-10 rounded-full justify-center items-center flex px-2"><ion-icon name="search"></ion-icon></button>
      </div>
    </div>
  )
}

export default HeroContent
