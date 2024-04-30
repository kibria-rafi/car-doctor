import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect (()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className=" section flex flex-col items-center justify-center h-full">
            <div className="text-center">
                <h3 className="text-xl font-bold text-[#FF3811] mb-3">Services</h3>
                <h1 className="text-4xl font-bold text-black">Our Services Area</h1>
                <p className="text-slate-600 mb-4 font-semibold">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {
                services.map(service => <ServiceCard key={service._id} service={service}/>)
            }
            </div>
        </div>
    );
};

export default Services;