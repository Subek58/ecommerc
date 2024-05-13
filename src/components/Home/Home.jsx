import React from "react";
import Recipes from "../Recipes/Recipes";

const Home =()=>{
    return(
        <div className="flex-wrap flex gap-3 text-red-600 text-xl font-bold text-right" >This is the recipes of the hotel
            <Recipes/>
        </div>
    )
}

export default Home;