/* eslint-disable react/prop-types */


// eslint-disable-next-line no-unused-vars
const ProductCard = ({img,name,title,price,dis,ts}) => {
  return (
    <div className="sm:w-64 w-96  m-2 rounded overflow-hidden shadow bg-gray-50 relative duration-300 group cursor-pointer">
      <div className="h-60 w-full  cursor-pointer">
        <img src={img} alt="" className="w-full h-full object-cover object-center"/>
      </div>
     <div className="p-3">
     <h3 className="font-semibold">{name}</h3>
      <p className="text-[14px] text-gray-600">{title}.</p>
      <div className="flex justify-between items-center mt-2">
      <h2 className="font-semibold text-[15px]">Rs - {price}</h2>
      <del className=" text-[13px] text-gray-400">{price}</del>
      </div>
     </div>


     <div className={`absolute w-12 h-12 flex justify-center items-center rounded-full z-10 top-2 right-2 text-white ${ts?"bg-green-500":" bg-red-400"}`}>
     <h3>{dis}</h3>
     </div>

     <div className="absolute card-button  w-full h-full z-20 top-0 left-0 -translate-y-[150%] duration-300 group-hover:translate-y-0 flex flex-col justify-center items-center">

        <button className="bg-white p-2 text-center border rounded shadow text-yellow-600 w-48">Add to Cart</button>
        
        <ul className="w-full cursor-pointer mt-5 flex gap-x-4 justify-center ">
          <li className="flex items-center text-white gap-x-1 text-center ">
            <span className="mt-1"><ion-icon name="share-social"></ion-icon></span>
            <p>share</p>
          </li>

          <li  className="flex items-center text-white gap-x-1 text-center">
            <span className="mt-1"><ion-icon name="options"></ion-icon></span>
            <p>compare</p>
          </li>

          <li  className="flex items-center text-white gap-x-1 text-center">
            <span className="mt-1"><ion-icon name="heart"></ion-icon></span>
            <p>like</p>
          </li>
        </ul>

     </div>

    </div>
  )
}

export default ProductCard
