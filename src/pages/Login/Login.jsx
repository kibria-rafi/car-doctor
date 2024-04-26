import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import img from "./login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext)
const handleLogin = e =>{
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email,password)
  signIn(email,password)
  .then(user=>{
    console.log(user)
    
  })
  .catch(error=>console.log(error))
}

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row lg:gap-28">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-2xl font-bold text-center text-[#FF3811]">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input bg-white  border border-slate-400"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input bg-white border border-slate-400"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white">Sign In</button>
            </div>

            <div></div>
            <p className="text-black text-center">Or sing in With</p>
            <div className="flex justify-center gap-4">
              <button className="text-2xl">
                <FcGoogle />
              </button>
              <button className="text-2xl text-blue-600">
                <FaFacebook />
              </button>
            </div>
            <div className="mt-3">
              <p className="text-center text-black">
                New to car Doctor? <Link to="/signUp" className="text-[#FF3811] font-bold">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
