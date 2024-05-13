import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const Login =()=>{

    const[email, setEmail] = useState("");
    const[password, setPassword]= useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
window.alert('this is password',password)
        if(password.length<6){
            toast.error("Password must be at greater 6 characters long")
        }else if(password.length > 16){
            toast.error("Password must be at most 16 characters long")
            return;
          }else{
            const response = await fetch("http://localhost:3000/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
                {
                  Email : email,
                  password : password
                }
              ),
            })
    }}
    
    return(
    <div className="bg-black">
    <form onSubmit={handleSubmit}>
        <h1 className="text-5xl font-semibold text-gray-100">Login Form</h1>
        <div className="mt-8">
            <div>
              <label className="text-lg font-medium"> Email</label>
              <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
              type="email">
              
              </input>
               
                
            </div>
            <div>
                <label>Password</label>
                <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter Your Password"
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                
                />
                
            </div>
            <button
              type="submit"
              
              className="w-full flex justify-center py-2 px-4 border mt-3  text-sm font-medium rounded-md bg-yellow-600 hover:bg-indigo-700 "
            >
              Login
              
            </button>
            <div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-5">Forgot Password</button>
            </div>
            <div>
                <Link to={"/home/signup"}>
                <button className="font-medium text-base text-blue-500 mt-3">SignUp</button>
                </Link>
            </div>
        </div>
        </form>
    </div>
   )

}

export default Login;