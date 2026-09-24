import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Hero from './Components/Hero/Hero'
import Shop from './Components/Shop/Shop'


function App() {
  return (
    <BrowserRouter>
     <Routes>
    
         {/*landing Page*/}
       <Route path="/" element={<Hero/>} />

       {/* Shop Now Page */}
       <Route path="/shop" element={<Shop/>}/>

      </Routes>  
     </BrowserRouter>
  )
}

export default App;