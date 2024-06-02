import ProductCard from "./ProductCard"


const OurProduct = () => {
    const card=[
        {
            img:"https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg",
            name:"syltherine",
            title:"Lorem ipsum dolor sit amet.",
            price:"4.000.000",
            dis:"50%",
            new:false
        },
        {
            img:"https://www.ikea.com/ext/ingkadam/m/23648d0301e36a0e/original/PE938034.JPG?f=s",
            name:"ltherine",
            title:"orem ipsum dolor sit amet.",
            price:"2.000.000",
            dis:"25%",
            new:false
        },
        {
            img:"https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg",
            name:"yltherine",
            title:"rem ipsum dolor sit amet.",
            price:"20.000.000",
            dis:"New",
            new:true
        },
        {
            img:"https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg",
            name:"therine",
            title:" ipsum dolor sit amet.",
            price:"50.000.000",
            dis:"25%",
            new:false
        },
        {
            img:"https://www.at-home.co.in/cdn/shop/articles/Latest_Bedroom_Furniture_Design_to_Modernize_Your_Bedroom_Space_1200x.jpg?v=1701238195",
            name:"enttherine",
            title:"Lorem ipsum dolor sit amet.",
            price:"200.000",
            dis:"35%",
            new:false
        },
        {
            img:"https://www.bhg.com/thmb/DACktiLdaG9vQJTb1h9IZPWnJpY=/1244x0/filters:no_upscale():strip_icc()/dining-room-wood-table-9191f6a3-961d758ecbc04e65a1ba75ce1b0fe2c3.jpg",
            name:"syltherine",
            title:"Lorem ipsum dolor sit amet.",
            price:"23.000.000",
            dis:"New",
            new:true
        },
        {
            img:"https://housing.com/news/wp-content/uploads/2023/02/wooden-furniture-design3.png",
            name:"stherine",
            title:"Lorem ipsum dolor sit amet.",
            price:"34.000.000",
            dis:"60%",
            new:false
        },
        {
            img:"https://housing.com/news/wp-content/uploads/2023/02/wooden-furniture-design2-1.png",
            name:"eherine",
            title:"em ipsum dolor sit amet.",
            price:"1.000.000",
            dis:"New",
            new:true
        },
    ]
  return (
    <>
    <div className="text-center p-2">
        <h1 className="text-2xl md:text-4xl font-semibold">Our Products</h1>
    </div>
    <div className="flex flex-wrap gap-x-2 mt-4 justify-around sm:w-[83%] mx-auto">
        {
            card.map((data,i)=>(
                <ProductCard key={i} img={data.img} name={data.name} title={data.title} dis={data.dis} price={data.price} ts={data.new}/>
            ))
        }
      
      
    </div>
    <div className="flex justify-center p-4 py-10">
        <button className="border border-yellow-600 text-yellow-600 px-8 p-2">Show More</button>
    </div>
    </>
  )
}

export default OurProduct
