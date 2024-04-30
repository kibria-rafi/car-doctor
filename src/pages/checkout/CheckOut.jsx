import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>Book service</h2>
        </div>
    );
};

export default CheckOut;