


const TableRow = ({booking,handleDelete}) => {
    const {_id,customerName,date,email,img,price,service} =booking;
    
    return (
        <div className="md:flex justify-between items-center">
            <button onClick={()=>handleDelete(_id)}  className="bg-black px-5 py-3 text-white rounded-full">X</button>
            <img className="h-44 w- rounded-xl" src={img} alt="" />
            <h1 className="font-bold text-black text-xl">{customerName}</h1>
            <h1 className="font-bold text-black">{email}</h1>
            <h3 className="text-black font-bold">{date}</h3>
            <button>pending</button>
        </div>
    );
};

export default TableRow;