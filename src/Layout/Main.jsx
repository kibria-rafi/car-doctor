import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/shared/Footer/Footer";
import Navbar from "../pages/Home/shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="md:px-[200px]">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;