import React from 'react';

const ProductCard = ({product}) => {
    const {name,image,price}=product;
    return (
        <div className="card h-96 w-96  border p-3">
  <figure className="">
    <img src={image} alt="Shoes" className="rounded-lg " />
  </figure>
  <div className="card-body items-center text-center">
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <h2 className="card-title text-black">{name}</h2>
    <p className='text-[#FF3811] font-semibold'>price: {price}$</p>
    
  </div>
</div>
    );
};


export default ProductCard;