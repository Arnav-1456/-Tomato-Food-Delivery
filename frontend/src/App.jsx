import React, { useState } from "react"
import Navbar from "./component/Navigation/Navbar"
import { Route, Routes,} from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./component/Footer/Footer"
import Loginpop from "./component/Loginpop/Loginpop"
import Verify from "./pages/verify/verify"

function App() {
  const[showLogin,setShowLogin] = useState(false);
    return (<>
    {showLogin?<Loginpop  setShowLogin= {setShowLogin}/>:<></>}
      <div className="app">
       <Navbar setShowLogin= {setShowLogin}/>
       <Routes> 
       <Route path ='/' element = {<Home/>}/>
       <Route path='/cart' element = {<Cart/>}/>
       <Route path = '/order' element= {<PlaceOrder/>}/>
       <Route path = '/verify' element= {<Verify/>}/>
       </Routes>
       
      </div>
      <Footer/>
      </>
    )

    
  
}

export default App
