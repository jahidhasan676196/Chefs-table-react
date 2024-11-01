
import bannerImg from '../../Image/Rectangle 1.jpg'
const Banner = () => {
    const background={
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '80vw',
        height: '70vh',
        borderRadius: '24px'
    }
    return (
        <div style={background} className='mt-12 px-52 py-32 text-center space-y-6' >
        <h3 className='text-[#FFFFFF] text-6xl font-bold '>Discover an exceptional cooking class tailored for you!</h3>
        <p className='text-[white] text-lg font-normal w-3/4 mx-auto'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
        <div className='mt-20 flex gap-6 justify-center text-[#150B2B] text-xl font-semibold'>
        <button className='bg-[#0BE58A] px-6 py-4 rounded-full'>Explore Now</button>
        <button className=' px-6 py-4 rounded-full border text-white'>Our Feedback</button>
        </div>
    </div>
    );
};

export default Banner;