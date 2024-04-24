import person from "./person.jpg";
import parts from "./parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2  border-white border-8"
          />
        </div>
        <div className="lg:w-1/2">
          <h4 className="text-xl font-bold text-[#FF3811]">About us</h4>
          <h1 className="text-4xl font-bold text-black">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6 text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="text-black">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className=" mt-4 px-5 py-3 text-white font-semibold rounded-lg bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
