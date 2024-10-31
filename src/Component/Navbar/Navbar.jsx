

const Navbar = () => {
    return (
        <div className="flex justify-between mt-14">
            <h3 className="text-4xl text-[#150B2B] font-bold">Recipe Unique</h3>
            <div className="flex justify-between gap-12 text-[#150B2BB2] text-base font-normal">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="Search">Search</a>
            </div>
            <div>
                <input className="border" type="text" placeholder="Search" />
            </div>
        </div>
    );
};

export default Navbar;