


const TableRow = ({booking,handleDelete,handleConfirm}) => {
    const {_id,customerName,date,email,img,price,service,status} =booking;
    
    return (
        <div className="md:flex justify-between items-center">
            <button onClick={()=>handleDelete(_id)}  className="bg-black px-5 py-3 text-white rounded-full">X</button>
            <img className="h-44 w- rounded-xl" src={img} alt="" />
            <h1 className="font-bold text-black text-xl">{customerName}</h1>
            <h1 className="font-bold text-black">{email}</h1>
            <h3 className="text-black font-bold">{date}</h3>
            {
                status === 'confirmed' ? <h1 className="text-green-500 font-bold">Confirmed</h1> : <button onClick={()=>handleConfirm(_id)} className="bg-green-500 px-5 py-3 text-white rounded-full">Confirm</button>
            }
        </div>
    );
};

export default TableRow;