import { Link } from "react-router-dom";

import Navbar from '../Navbar/Navbar'
import apples from '../../assets/apple .png'
function Hero(){
   return(
    <main className="bg-red-800 md:py-6 md:px-12">
      <section className="bg-red-700 relative min-h-[650px] w-full md:rounded-xl shadow-md">
         <div className="container">
                <Navbar/>
                <div className="grid grid-cols-1 
                md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
                      {/*Text section */}
                      <div className="text-white space-y-4 p-4 md:mt-0">    

                        <h1 className="text-3xl md:pl-10">01___________</h1>

                        <h1 className="text-5xl font-bold uppercase text-shadow ">A healthy fruit</h1>
                       
                        <p className="text-sm"> js jsdnj jsdbjdjsdj 
                           sdsuj bdbsa sakr jdj hrus sahil thakue
                           sdjdjs sDFKbsdsd js js js jsdnj jsdbjdjsj 
                           sdsuj bdbsa sakr jdj hrus sahil thakue
                           sdjdjs
                           sdsuj bdbsa sakr jdj hrus sahil thakue
                           sdjdjs sDFKbsdsd js js js jsdnj jsdbjdjsdj 
                           sdsuj bdbsa sakr jdj hrus sahil thakue
                           sdjdjs
                        </p>
                        <Link to="/shop">
                        <button className="border border-white px-4 py-2 rounded-lg">Shop Now</button>
                        </Link>
                      </div>
                    
                      {/*Image section */}
                      <div> 
                        <img src={apples} alt="not found" 
                        className="w-[900px] img-shadow relative z-[1]"/>
                      </div>
                      {/*Blank section */}
                      <div className="md:hidden">

                      </div>
                           
                </div>
         </div>
         <h1 className="text-center text-[80px] text-white uppercase font-bold 
         sm:text-[120px] md:text-[150px] xl:text-[180px] absolute bottom-0 
         w-full z-0 text-shadow  pointer-events-none">SKS Farm</h1>
      </section>
    </main>
   )
}
export default Hero;