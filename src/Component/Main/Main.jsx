import { useState } from "react";
import Calculate from "../Calculate/Calculate";
import Cards from "../Cards/Cards";


const Main = () => {
    const [cards,setCards]=useState([])
    const handlecartClick=(cart)=>{
        const iscard=cards.find(item=>item.recipe_id==cart.recipe_id)
        if(!iscard){
            setCards([...cards,cart])
        }
        else{
            alert('Allready selected')
        }
       
    }
    return (
        <div className="mt-24 text-center">
            <div className="space-y-6">
                <h3 className="text-[#150B2B] text-4xl font-semibold">Our Recipes</h3>
                <p className="text-[#150B2B99] text-base font-normal w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            {/* main section */}
            <div className="mt-12 flex justify-between  mb-24 gap-6">
                {/* cart section */}
                <div className=" w-2/3">
                    <Cards handlecartClick={handlecartClick}></Cards>
                </div>
                {/* calculation section */}
                <div className="border w-1/3">
                    <Calculate cards={cards}></Calculate>
                </div>
            </div>
        </div>
    );
};

export default Main;