import About from "../About/About";
import Banner from "../Banner/Banner";

import Features from "../Features/Features";

import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Address from "../address/Address";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Address/>
            <Products/>
            <Team/>
            <Features/>
            
            
        </div>
    );
};

export default Home;