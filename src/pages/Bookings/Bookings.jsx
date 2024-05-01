import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import TableRow from "./TableRow";


const Bookings = () => {
    const [bookings,setBookings]=useState([])
    const {user}= useContext(AuthContext)
    

    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[user.email])
    return (
        <div>
            <h1 className="text-3xl"> {bookings.length} </h1>
            
      {
       bookings.map(booking=> <TableRow key={booking._id} booking={booking}></TableRow>)
      }
      
    

        </div>
    );
};

export default Bookings;