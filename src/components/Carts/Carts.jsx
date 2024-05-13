import React,{useEffect, useState} from "react";
import CartsCard from "./CartsCard";

const Carts =()=>{
    const[cartsdata, setCartsdata]= useState([]);

    const fetchCartsdata = async()=>{
        const response= await fetch("http://localhost:3000/carts");
        const data = await response.json();
        setCartsdata(data);
        };

        useEffect(()=>{
            fetchCartsdata();
        },[]);
        return(
            <div className="flex gap-5 flex-wrap">
                {cartsdata.length===0?(
                    <div>no items in the cart</div>
                ):(
                    cartsdata.map((item)=>{
                        return<CartsCard fetchCartsdata={fetchCartsdata} data={item}/>;
                    })
                )}
            </div>
        );
};

export default Carts;