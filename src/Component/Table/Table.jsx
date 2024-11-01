

const Table = ({c,index}) => {
    console.log(c);
    const {recipe_name,preparing_time,calories}=c
    return (
        <div className="flex justify-around gap-4">
            <p>{index+1}</p>
            <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button className="bg-[#0BE58A] px-5 py-2 rounded-full text-[#150B2B] font-medium text-base">Preparing</button>
    </div>
    );
};

export default Table;