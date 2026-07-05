import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../../store/Auth";
import LoginImg from "../../assets/images/Data extraction-amico (1).webp";
import {Eye,EyeOff} from "lucide-react"

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const[showPass,setshowPass]=useState(false)

  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  const handleLoginsubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);

      navigate("/dashboard");

      setemail("");
      setpassword("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-stone-50 dark:bg-zinc-950 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg max-w-3xl w-full border border-gray-200  dark:border-gray-700">
          <div className="hidden cols-span-1 bg-linear-to-r from-pink-400 to-pink-700 md:flex justify-center items-start p-4 border-r border-white/20">
            <div className="flex flex-col gap-6 p-4">
              <h2 className="text-white font-semibold text-2xl">
                <span>AD</span> AdminDesk
              </h2>
              <div>
                <h2 className="text-white text-2xl font-semibold">
                  Welcome Back !
                </h2>
                <p className="text-stone-50 text-sm flex-wrap">
                  Login to your account and your dashboard efficiently
                </p>
              </div>
              <img src={LoginImg} alt="" />
            </div>
          </div>
          <div className="cols-span-2 flex justify-center items-center p-4 rounded-lg bg-white dark:bg-zinc-900">
            <div className="w-full">
              <div className="flex flex-col gap-1 p-1 ">
                <h2 className="text-[30px] text-shadow-indigo-50 font-bold text-pink-600">
                  Login
                </h2>
                <p className="text-[15px] mb-4 dark:text-zinc-100">
                  Enter Your Information to access your account
                </p>
              </div>
              <form
                className="flex flex-col p-4 gap-4"
                onSubmit={handleLoginsubmit}
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="dark:text-zinc-100">
                    Email Address
                  </label>

                  <input
                    value={email}
                    onChange={handleEmail}
                    autoComplete="email"
                    required
                    className="border border-gray-300 w-full p-2 rounded-xl outline-none dark:bg-zinc-800 dark:text-zinc-600"
                    type="email"
                    placeholder="Email"
                  />


                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="dark:text-zinc-100">
                    Password
                  </label>
                  <div className="relative">
                  <input
                    value={password}
                    onChange={handlePassword}
                    autoComplete="current-password"
                    required
                    className="border border-gray-300 w-full p-2 rounded-xl outline-none dark:bg-zinc-800 dark:text-zinc-600"
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                  />
                  <span onClick={()=>setshowPass(!showPass)}  className="absolute right-3 top-3 ">{showPass ? <Eye strokeWidth={1.25}  size={22}/>:<EyeOff strokeWidth={1.25} size={22} />}</span>
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm dark:text-zinc-100">
                  {" "}
                  <input className="accent-green-400" type="checkbox" />

                  Remember me
                </label>
                <button className=" text-white font-bold  bg-linear-to-r from-pink-500 to-pink-700 rounded-lg p-2 shadow-md hover:scale-95 transition ">
                  Login
                </button>


                <p className="text-[13px] dark:text-zinc-100 text-center">
                  Dont have an account ?{" "}
                  <Link to={"/"} className="text-pink-600 text-center underline">
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// {/* <div className='flex justify-center items-center h-screen w-screen bg-stone-100 '>
//     <div className=' grid grid-cols-3 p-4 w-225'>
//       <div className='col-span-1/2 bg-linear-to-r from-pink-500 to-purple-500 rounded-2xl '>
//         <h2>Welcome Back</h2>
//         <p>login to your account and manage your dashboard efficiently</p>
//       </div>

//     <div className='cols-span-3  flex justify-center items-center '>

//       <div className='  border border-white/30 bg-white/10 rounded-xl p-8 text-center '>
//         <h2 className='text-[30px] text-shadow-indigo-50 font-bold text-pink-600'>Login</h2>
//         <p className='text-[15px] mb-4'>Welcome back! please login to your account</p>
//         <form className='flex flex-col p-4 gap-4' onSubmit={handleLoginsubmit}>
//           <input  value={email} onChange={handleEmail} autoComplete='email' required className='border border-gray-300 w-full p-2 rounded-xl outline-none' type="email" placeholder='Email' />
//           <input value={password} onChange={handlePassword} autoComplete='current-password'   required className='border border-gray-300 w-full p-2 rounded-xl outline-none' type="password" placeholder='password'/>
//           <label className="flex items-center gap-2 text-sm"> <input className="accent-green-400" type="checkbox" />
//           {/* <div className=' w-4 h-4 border-2 peer-checked:bg-linear-to-r peer-checked:from-yellow-400 peer-checked:to-green-500'></div>  */}
//           Remember me</label>
//           <button className=' text-white font-bold  bg-linear-to-r from-pink-500 to-pink-700 rounded-lg p-2 '>Login</button>
//           <p className='text-[13px]'>Dont have an account ? <Link  to={"/"} className='text-blue-600'>Signup</Link></p>
//         </form>
//       </div>

//     </div>
// </div>

//     </div> */}
