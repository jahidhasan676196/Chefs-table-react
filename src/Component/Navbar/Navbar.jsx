import searchImg from '../../Image/Frame (9).svg'
import profileImg from '../../Image/Frame (10).svg'

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
            <div className='flex gap-6'>
              <div className='flex bg-[#DCDCFF] px-6 rounded-full'>
                <img className='w-6' src={searchImg} alt="" />
                <input className="bg-[#DCDCFF] rounded-r-full" type="text" placeholder="Search" />
              </div>
              <img className='bg-[#A09AFF] rounded-full' src={profileImg} alt="" />
            </div>
        </div>
    );
};

export default Navbar;