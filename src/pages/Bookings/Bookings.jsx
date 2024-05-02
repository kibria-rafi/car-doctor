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

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    } else {
                        alert('Delete failed');
                    }
                })
                .catch(error => {
                    console.error('Error deleting booking:', error);
                });
        }
    }



    return (
        <div>
            <h1 className="text-3xl"> {bookings.length} </h1>
            
      {
       bookings.map(booking=> <TableRow handleDelete={handleDelete} key={booking._id} booking={booking}></TableRow>)
      }
      
    

        </div>
    );
};

export default Bookings;