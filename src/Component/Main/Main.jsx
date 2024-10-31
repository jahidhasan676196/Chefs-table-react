import Calculate from "../Calculate/Calculate";
import Cards from "../Cards/Cards";


const Main = () => {
    return (
        <div className="mt-24 text-center">
            <div>
                <h3>Our Recipes</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            {/* main section */}
            <div className="mt-12 flex justify-between  mb-24 gap-6">
                {/* cart section */}
                <div className=" w-2/3">
                    <Cards></Cards>
                </div>
                {/* calculation section */}
                <div className="border w-1/3">
                    <Calculate></Calculate>
                </div>
            </div>
        </div>
    );
};

export default Main;