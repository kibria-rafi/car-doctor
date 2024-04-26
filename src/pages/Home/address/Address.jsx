import { LuCalendarClock } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const Address = () => {
    return (
        <div>
            <div className="bg-black md:flex justify-between md:mx-0 mx-3 mt-10 mb-10 md:px-32 px-3 py-14 rounded-xl">
            <div className="flex gap-4 items-center">
               <div className="text-5xl text-white">
               <LuCalendarClock />
               </div>
               <div>
                <p className="text-white">We are open monday-friday</p>
                <h2 className="text-2xl text-white">7:00am-9:00pm</h2>
               </div>
            </div>
            <div className="flex gap-4 items-center">
               <div className="text-5xl text-white">
               <FiPhoneCall />
               </div>
               <div>
                <p className="text-white">Have a question?</p>
                <h2 className="text-2xl text-white">+8801407-638740</h2>
               </div>
            </div>
            <div className="flex gap-4 items-center">
               <div className="text-5xl text-white">
               <MdLocationOn />
               </div>
               <div>
                <p className="text-white">Need a repair? Our address</p>
                <h2 className="text-2xl text-white">Daffodil smart city,Birulia,Dhaka</h2>
               </div>
            </div>
            
        </div>
        </div>
    );
};

export default Address;