import { useState} from "react";
import { Toaster } from "react-hot-toast";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipes/Recipes";
import Carts from "./components/Carts/Carts";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Signup/Login";


function App(){
  return(
  
    <div className="bg-slate-950 min-w-screen min-h-screen">
      <Toaster/>
      <Navbar/>
    <div className="min-w-screen min-h-screen max-w-7xl mx-auto p-10 text-white ">
      <Routes>
      <Route path="/home/" element={<Home/>}/>
      <Route path="/home/recipes" element={<Recipe />} />
      <Route path="/home/carts" element={<Carts />} />
      <Route path="/home/login" element={<Login />}/>
      <Route path="/home/signup" element={<Signup/>}/>
      </Routes>

    </div>
    </div>
  );
}

export default App;
