import React from "react";

const CartsCard = (props)=>{
    const addtocart = async()=>{
        console.log(props.data);
        console.log("clicked");

        const response = await fetch(`http://localost:3000/carts/${props.data.id}`,
        {
            method: "DELETE",
        }
    );

    const data = await response.json();
    console.log(data);
    if(data){
        props.fetchCartsdata()
    }
    };
    return(
        <div>
            <div>
                <img className="w-40" src={props.data.image}/>
            </div>

            <div className=" p-3">
        <div> {props.data.title} </div>
        <div>${props.data.price}</div>
        <div>category: {props.data.category}</div>

        <button
          onClick={addtocart}
          className=" px-4 py-2 bg-red-500 text-white rounded-md">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartsCard;