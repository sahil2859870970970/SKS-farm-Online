import { Link } from "react-router-dom";

import Navbar from '../Navbar/Navbar'
import apples from '../../assets/apple .png'
function Hero(){
   return(
    <main className="bg-red-800 md:py-6 md:px-12">
      <section className="bg-red-700 relative min-h-[650px] w-full md:rounded-xl shadow-md">
         <div className="container">
                <Navbar/>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                              min-h-[650px] md:min-h-[650px] place-items-center px-4 md:px-0">
                      {/*Text section */}
                     <div className="text-white space-y-4 p-4 md:mt-0 max-w-xl">   

                        <h1 className="text-3xl md:pl-10">01___________</h1>

                        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold uppercase text-shadow">
                                            A healthy fruit
                       </h1>
                       
                        <p className="text-sm"> At SKS Farm, we bring the taste of Himachal’s 
                          finest apples straight from the orchard to your doorstep. 
                          Carefully selected for freshness, natural sweetness, and quality,
                           our apples are sourced directly from the hills of Himachal 
                           Pradesh ,so every bite feels fresh, 
                            crisp, and naturally delicious.

                        </p>
                        <Link to="/shop">
                        <button className="border border-white px-4 py-2 rounded-lg">Shop Now</button>
                        </Link>
                      </div>
                    
                      {/*Image section */}
                      <div> 
                        <img
                            src={apples}
                            alt="Fresh apples"
                            className="w-[280px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[900px] max-w-full img-shadow relative z-[1]"
/>
                      </div>
                      {/*Blank section */}
                      <div className="md:hidden">

                      </div>
                           
                </div>
         </div>
         <h1 className="text-center text-[45px] sm:text-[80px] md:text-[120px] 
            lg:text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0 
             text-shadow text-white uppercase font-bold pointer-events-none">
                SKS Farm
         </h1>
      </section>
    </main>
   )
}
export default Hero;