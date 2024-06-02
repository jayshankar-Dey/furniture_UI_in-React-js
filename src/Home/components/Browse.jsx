

const Browse = () => {
    const card=[
        {
            img:"https://hips.hearstapps.com/hmg-prod/images/ghk090123homefeature-009-655cffc4bf9ce.jpg?crop=0.842xw:1.00xh;0.148xw,0&resize=980:*",
            name:"Dining"
        },
        {
            img:"https://i.pinimg.com/736x/67/cf/a9/67cfa9a72f237130d8d64b6836326b74.jpg",
            name:"Living"
        },
        {
            img:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000011474364_437Wx649H_202112160436241.jpeg",
            name:"Bedroom"
        },
       
    ]
  return (
    <div className="">

      <div className="w-full text-center mt-5 px-2">
        <h1 className="font-semibold text-2xl md:text-3xl">Browse The Range</h1>
        <p className="text-[15px] text-gray-600 mt-1"> ipsum dolor, sit amet consectetur adipisicing elit Laudantium adipisicing</p>
      </div>
{/* ///card */}
      <div className="flex justify-center items-center mt-6 gap-x-2 md:gap-x-4 flex-wrap group">

      {
        card.map((data,i)=>(
            <div key={i} className="card lg:h-[30rem] md:h-[27rem] h-fit sm:w-96 sm:h-[26rem]  w-full border sm:border-none rounded-md mt-4 sm:mt-0 mx-2 sm:mx-0 bg-zinc-100 sm:bg-transparent cursor-pointer group-hover:blur hover:!blur-none duration-300">
            <div className="h-96 w-full p-2">
               <img src={data.img} alt=""  className="object-cover object-center w-full h-full"/>
            </div>
            <div className="text-center  p-2 sm:p-0 ">
               <h1 className="font-semibold mt-1">{data.name}</h1>
            </div>
       </div>
        ))
      }
       

      </div>
{/* ///end */}
    </div>
  )
}

export default Browse
