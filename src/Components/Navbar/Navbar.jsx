import { GiHamburgerMenu } from "react-icons/gi"
function Navbar(){
   return(
    <div className="text-white py-2 absolute top-0 left-0 w-full z-20 ">
         <div className = "Container  p-1 mx-8">
            <div className = "flex justify-between items-center">
                <h1 className = "text-4xl font-bold uppercase">SKS<span className="font-normal"> Farm</span></h1>

                <ul className="flex space-x-14 text-xl">
                  <li>
                    <a href = "#">Home</a>
                  </li>
                   <li>
                    <a href = "#">About</a>
                  </li>
                   <li>
                    <a href = "#">Section</a>
                  </li>
                </ul>

                <div>
                    <GiHamburgerMenu className = "text-3xl cursor-pointer"/>
                </div>
            </div>
         </div>
    </div>
   )
}
export default Navbar;