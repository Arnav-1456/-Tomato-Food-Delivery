import React, { useState } from "react";
import './Home.css'
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../component/appDownload/AppDownload.jsx";
 const Home = () =>{
    const[category, setcategory] = useState("All");
    return(

        <div >
            <Header/>
            <ExploreMenu category= {category} setcategory = {setcategory}/>
            <FoodDisplay category={category}/>
             <AppDownload/>
            

        </div>
    )
 }
 export default Home