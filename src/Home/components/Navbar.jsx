import logo from "../../assets/images/Asset 3 1.png"
import Dropdown from "./Dropdown"

const Navbar = () => {
    const menu=[
        {
            name:"Home",
        },
        {
            name:"About",
        },
        {
            name:"Shop",
            list:["Dress","Mens Fession","Cotton Mattres","Mens Fession",]
        },
        {
            name:"Contacts",
        },
        {
            name:"Blog",
        },
    ]
  return (
    <nav className="flex justify-between p-4 text-white">
      <img src={logo} alt="" className="h-7 md:h-10"/>
      <ul className="md:flex hidden gap-x-4 items-center">
       {
        menu.map((menu,i)=>(
            <li key={i}>
              {
                menu.list?<Dropdown name={menu.name} list={menu.list}/>:menu.name
              }
            </li>
        ))
       }
      </ul>
     <button className="flex items-center"><span className="p-1 mt-1 text-blue-600"><ion-icon name="log-in-outline"></ion-icon></span>Login</button>
    </nav>
  )
}

export default Navbar
