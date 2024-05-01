import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const data = useLoaderData();
  const { _id, title, price, img } = data;
  const { user } = useContext(AuthContext);

  const handleBook = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const date = e.target.date.value;
    const email = e.target.email.value;
    const price = e.target.dueAmount.value;

    const orderDetails = {
      customerName: name,
      date,
      email,
      img,
      price,
      service: title,
      service_id: _id,
    };
    console.log(orderDetails);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: "Your Order is Placed!",
                text: "Thank you for your order!",
                icon: "success"
              });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl text-red-400">{title}</h1>
      </div>

      <form onSubmit={handleBook}>
        <div className="flex justify-center items-center w-screen h-screen bg-white">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl text-[#FF3811]">
                  Book Now
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name*"
                  defaultValue={user?.displayName}
                  name="name"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="date"
                  placeholder="Date*"
                  name="date"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                  defaultValue={user?.email}
                  name="email"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Due Amount*"
                  defaultValue={`${price} $`}
                  name="dueAmount"
                />
              </div>

              <div className="my-2 mx-auto  lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold hover:bg-blue-900 bg-[#FF3811] text-gray-100 p-3  rounded-lg w-full 
                    focus:outline-none focus:shadow-outline"
                >
                  Order Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"></div>
    </div>
  );
};

export default BookService;
