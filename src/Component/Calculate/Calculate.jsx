

const Calculate = () => {
    return (
        <div className="mt-8">
        <h3 className="text-[#282828] text-2xl font-semibold ">Want to cook: 01</h3>
        <div className="mt-6 space-y-5 p-3 text-[#282828B2] text-base font-normal">
            <div className="flex justify-around ">
                <p></p>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                <p></p>
            </div>
            <div className="flex justify-around gap-4">
                <p>1</p>
                <p>Chicken Caesar Salad</p>
                <p>20 minutes</p>
                <p>400 calories</p>
                <button className="bg-[#0BE58A] px-2">Preparing</button>
            </div>
        </div>
        {/* last */}
        <div className="mt-6">
        <h3 className="text-[#282828] text-2xl font-semibold">Currently cooking: 02</h3>
        <div className="mt-6 space-y-5 p-3 text-[#282828B2] text-base font-normal">
            <div className="flex justify-around ">
                <p></p>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div className="flex justify-around gap-4">
                <p>1</p>
                <p >Chicken Caesar Salad</p>
                <p>20 minutes</p>
                <p>400 calories</p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Calculate;