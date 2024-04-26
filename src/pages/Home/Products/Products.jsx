import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className=" section flex flex-col items-center justify-center h-full">
            <div className="text-center ">
                <p className="text-[#FF3811] font-bold text-xl">Popular Products</p>
                <h1 className="text-3xl font-bold text-black">Browse Our Products</h1>
                <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Vel impedit eos hic. Vero blanditiis nemo ad itaque cupiditate nisi soluta.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-3">
                {
                    products.map((product)=><ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
            <button className="text-[#FF3811] font-semibold border-2 border-[#FF3811] px-3 py-2 rounded-lg m-10">More Products</button>
        </div>
    );
};

export default Products;