import React,{useEffect, useState} from "react";
import RecipesCard from "./RecipesCard";

const Recipes= () =>{
    const[recipes, setRecipes]=useState([]);
    console.log(recipes)

    const getRecipes= async()=>{
        const response= await fetch("http://localhost:3000/recipes");

        const data = await response.json();
        console.log(data)
        setRecipes(data);
    };

    useEffect(()=>{
        getRecipes();
    },[]);

    return(
        <div className="w-full">
            <div className="  gap-5 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-10 border border-red-400">
                {recipes.map((item,index)=>{
                     return <RecipesCard data = {item}  />;
                })}
            </div>
        </div>
    )
};

export default Recipes;