import one from "./group.svg";
import two from "./check.svg";
import three from "./deliveryt.svg";
import four from "./person.svg";
import five from "./Wrench.svg";

const Features = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <p className="text-[#FF3811] font-bold text-xl">Core Features</p>
        <h1 className="text-3xl font-bold text-black">Why Choose Us</h1>
        <p className="text-black">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="lg:flex gap-3 justify-between mt-10">
      <div className="card card-body items-center text-center border-2 shadow-lg transition-all duration-300">
  <img src={one} alt="" />
  <p className="text-black font-bold">Expert Team</p>
</div>


        <div className="card card-body items-center text-center border-2 shadow-lg">
          <img src={three} alt="" />
          <p className="text-black font-bold">Timely Delivery</p>
        </div>

        <div className="card card-body items-center text-center border-2 shadow-lg">
          <img src={four} alt="" />
          <p className="text-black font-bold">24/7 Support</p>
        </div>

        <div className="card card-body items-center text-center border-2 shadow-lg">
          <img src={five} alt="" />
          <p className="text-black font-bold">Best Equipment</p>
        </div>

        <div className="card card-body items-center text-center border-2 shadow-lg">
          <img src={two} alt="" />
          <p className="text-black font-bold ">100% Guranty</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
