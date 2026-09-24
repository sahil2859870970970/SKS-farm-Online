import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="text-white py-2 absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          <h1 className="text-2xl md:text-4xl font-bold uppercase">
            SKS<span className="font-normal"> Farm</span>
          </h1>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 lg:space-x-14 text-lg lg:text-xl">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Section</a>
            </li>
          </ul>

          {/* Hamburger */}
          <div>
            <GiHamburgerMenu className="text-2xl md:text-3xl cursor-pointer" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;