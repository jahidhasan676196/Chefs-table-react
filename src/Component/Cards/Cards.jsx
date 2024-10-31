
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";


const Cards = () => {
    const [cards,setCards]=useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    console.log(cards);
    return (
        <div className="grid grid-cols-2 gap-6">
            {
                cards.map(cart=><Cart key={cart.id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default Cards;