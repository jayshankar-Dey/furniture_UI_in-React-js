

const Experience = () => {
  return (
    <div className="md:h-96 h-fit w-full flex md:flex-row flex-col">
     <div className="md:w-1/2 w-full  relative h-full flex justify-center items-center p-2  overflow-hidden">
      <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg" alt=""  className="rounded-tr-lg rounded-br-lg md:w-96 z-30   md:absolute "/>
      <div className="md:absolute bg-gray-200 rounded-md  lg:w-64  h-24 left-[11.7rem] top-7 hidden lg:block "></div>

      <div className="lg:absolute bg-gray-200 rounded-md  lg:w-80 h-44 lg:left-72 md:left-0 top-32 hidden lg:block "></div>
     </div>

     <div className="md:w-1/2 w-full p-2 flex flex-col gap-y-5 justify-center">
      <h1 className="text-yellow-500 font-semibold text-sm ">EXPERIENCE</h1>
      <i className="font-semibold  font-mono text-2xl md:text-5xl">We Provide you The <br /> Best Experience</i>

      <i className="text-gray-600 font-sans text-sm pr-6 md:pr-14">you ipsum dolor sit amet consectetur adipisicing elit. Optio quae, numquam similique consequatur recusandae minus enim dolorem excepturi voluptate. Inventore animi ipsam facilis, iste unde facere vero cumque tempora asperiores!</i>

      <p className="flex items-center gap-x-2 text-yellow-500">More info <ion-icon name="arrow-forward-outline"></ion-icon></p>
     </div>

    </div>
  )
}

export default Experience
