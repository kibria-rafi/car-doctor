import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const handleCheckOut=e=>{
    e.preventDefault();
    const firstName=e.target.firstName.value;
    const lastName=e.target.lastName.value;
    const email=e.target.email.value;
    const phone=e.target.phone.value;
    const message=e.target.message.value;
    const orderDetails={
      firstName,
      lastName,
      email,
      phone,
      message
    }
    console.log(orderDetails);
  }


  const data = useLoaderData();
  const { _id, title, price } = data;
  return (
    <div>
        <div>
            <h1 className="text-3xl text-red-400">{title}</h1>
        </div>
        
<form onSubmit={handleCheckOut}>
<div className="flex justify-center items-center w-screen h-screen bg-white">

<div className="container mx-auto my-4 px-4 lg:px-20">

  <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
    <div className="flex">
      <h1 className="font-bold uppercase text-5xl text-[#FF3811]">Please <br /> CheckOut</h1>
    </div>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
      <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text" placeholder="First Name*" name="firstName" />
      <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text" placeholder="Last Name*" name="lastName" />
      <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email" placeholder="Email*" name="email" />
      <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number" placeholder="Phone*" name="phone" />
      </div>
      <div className="my-4">
        <textarea placeholder="Message*" name="message" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div className="my-2 mx-auto  lg:w-1/4">
        <button className="uppercase text-sm font-bold hover:bg-blue-900 bg-[#FF3811] text-gray-100 p-3  rounded-lg w-full 
                    focus:outline-none focus:shadow-outline">
          Order Confirm
        </button>
      </div>
    </div>

    
  </div>
  
</div>
</form>


<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  
</div>
    </div>
  );
};

export default CheckOut;
