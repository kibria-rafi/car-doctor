

import PropTypes from 'prop-types';
import { CgArrowRight } from "react-icons/cg";

const ServiceCard = ({service}) => {
    const {title, price, img} = service;

    return (
        <div className='card  flex justify-center items-center'>
            <div className=' px-4 py-2  border  rounded-xl'>
            <img className='rounded-xl h-56' src={img} alt="" />
            <h1 className='text-3xl text-black'>{title}</h1>
            <div className='flex justify-between items-center mt-2'>
            <h3 className='text-[#FF3811] font-bold'>Price: {price} $</h3>
            <button className='text-[#FF3811] text-3xl font-bold'><CgArrowRight /></button>
            </div>
        </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired
};

export default ServiceCard;