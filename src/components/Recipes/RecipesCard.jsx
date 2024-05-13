import React from "react";
import toast from "react-hot-toast";

const RecipesCard = ({data, name})=>{
    const addtocart = async()=>{
        try{
            const response= await fetch("http://localhost:3000/carts",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",

                },
                body:JSON.stringify(data),
            });
            
                let res= await response.json();
                console.log(res)
                if (res){
                    toast.success("Added to cart");
                }
            

        }catch(error){
            console.log(error)
            toast.error("Error adding to cart");
        }
    };
    return(
        <div className=" border border-gray-400 flex flex-col items-center justify-center text-start gap-4">
            <h1>{name}</h1>
            <div className="">
                <img className="object-contain max-w-40 " src={data.image}/>
            </div>

            <div className=" p-3 space-y-3">
        <div>ID: {data.id} </div>
        <div>{data.name}</div>
        <div>Description: {data.description}</div>

        <button
          onClick={addtocart}
          className=" px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default RecipesCard;