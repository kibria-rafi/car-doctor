

import PropTypes from 'prop-types';
import { CgArrowRight } from "react-icons/cg";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,title, price, img} = service;

    return (
        <div className='card  flex justify-center items-center'>
            <div className=' px-4 py-2  border  rounded-xl'>
            <img className='rounded-xl h-56' src={img} alt="" />
            <h1 className='text-3xl text-black'>{title}</h1>
            <div className='flex justify-between items-center mt-2'>
            <h3 className='text-[#FF3811] font-bold'>Price: {price} $</h3>
            <Link to={`/bookService/${_id}`}><button className='text-[#FF3811] px-3 py-2 my-3 bg-black rounded-lg hover:bg-slate-600'> Book Now </button></Link>
            </div>
        </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired
};

export default ServiceCard;