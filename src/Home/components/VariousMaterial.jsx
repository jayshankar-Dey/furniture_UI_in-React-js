import img2 from "../../assets/images/img2.png"
import img1 from "../../assets/images/img1.png"
import img3 from "../../assets/images/img3.png"
const VariousMaterial = () => {
  return (
    <div className="md:h-fit h-fit w-full flex md:flex-row-reverse flex-col mt-3">
    <div className="md:w-1/2 w-full  relative h-full flex justify-center items-center p-2  overflow-hidden">
    <div className="w-full h-full flex">
    <div className="w-1/2 h-full flex flex-col items-center  ">
      <img src={img2} alt=""  className="w-60"/>
      <img src={img1} alt=""  className="w-60"/>
    </div>
    <div className="w-1/2   flex flex-col items-center relative justify-center">
      <img src={img3} alt=""  className="md:absolute bottom-14"/>
    </div>
    </div>
    
    </div>

    <div className="md:w-1/2 w-full lg:pl-52 p-2 flex flex-col gap-y-6 justify-center">
     <h1 className="text-yellow-500 font-semibold text-sm ">MATERIALS</h1>
     <i className="font-semibold  font-mono md:text-3xl text-2xl lg:text-5xl">Very Serious<br /> Material For Making <br />Furniture</i>

     <i className="text-gray-600 font-sans text-sm pr-6 md:pr-14">Becouse dolor sit amet consectetur adipisicing elit. Optio quae, numquam similique consequatur recusandae minus enim dolorem excepturi voluptate. Inventore animi ipsam facilis, iste unde facere vero cumque tempora asperiores!</i>

     <p className="flex items-center gap-x-2 text-yellow-500">More info <ion-icon name="arrow-forward-outline"></ion-icon></p>
    </div>

   </div>
  )
}

export default VariousMaterial
