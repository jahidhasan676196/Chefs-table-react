


const Cart = ({cart,handlecartClick}) => {
    const {recipe_image,recipe_name,short_description,preparing_time,calories,ingredients}=cart
    // console.log(ingredients);
    return (
        <div className=" p-6 shadow-xl space-y-6 text-start">
            <img className="w-full bg-center bg-cover  h-[200px] rounded-2xl " src={recipe_image} alt="" />
            <h3 className="text-[#282828] text-xl font-bold">{recipe_name}</h3>
            <p className="text-[#878787] text-base font-normal">{short_description}</p>
            <hr />
            <div className="text-[#878787] text-base font-normal">
                <h3 className="text-[#282828] text-xl font-bold">Ingredients: {ingredients.length}</h3>
                {
                    ingredients.map(item=><li>{item}</li>)
                }
            </div>
            <div className="flex gap-6 text-[#878787] text-base font-normal">
                <p>{preparing_time}</p>
                <p>{calories} calories</p>
            </div>
            <button onClick={()=>handlecartClick(cart)} className="bg-[#0BE58A] px-6 py-4 rounded-full text-[#150B2B] font-medium text-lg">Want to Cook</button>
        </div>
    );
};

export default Cart;