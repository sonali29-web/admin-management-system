import React, { useState } from 'react'
import {handleSignUp} from "../../store/Auth"
import {useNavigate,Link} from "react-router-dom"
import signImg from "../../assets/images/Data extraction-amico (1).webp"
import {Eye,EyeOff} from "lucide-react"


const SignUp = () => {

  const navigate =useNavigate()

  const [email,setemail]=useState("");

  const [password,setpassword]=useState("")

  const [showPass,setshowPass]=useState(false)

const handleSubmit=async(e)=>{



  e.preventDefault();

  await handleSignUp(email,password)

  navigate("/dashboard")
  setemail("")
  setpassword("")
}


  return (
    <div className='flex justify-center items-center min-h-screen bg-stone-50 dark:bg-zinc-950 p-4 '>
    <div className='grid   grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg max-w-3xl w-full border border-gray-200 dark:border-zinc-700 '>

    <div className='hidden cols-span-1 bg-linear-to-r from-pink-400 to-pink-700 md:flex justify-center items-start p-4 border-r border-white/20'>
    <div className='flex flex-col gap-6 p-4'>
      <h2 className='text-white font-semibold text-2xl'><span>AD</span> AdminDesk</h2>
      <div><h2 className='text-white text-2xl font-semibold'>Welcome Back !</h2>
      <p className='text-stone-50 text-sm flex-wrap'>Sign up to your account and your dashboard efficiently</p>
      </div>
    <img src={signImg} alt=""  />
    </div>
    </div>
    <div className='cols-span-2 flex justify-center items-center p-4 rounded-lg bg-white dark:bg-zinc-900'>
      <div className='w-full'>

    <div className='flex flex-col gap-1 p-1 '>
      <h2 className='text-[30px] text-shadow-indigo-50 font-bold text-pink-600'>Sign Up</h2>
      <p className='text-[15px] mb-4 dark:text-zinc-100'>Enter Your Information to create your account</p>
    </div>
    <form className='flex flex-col p-4 gap-4' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1'>
        <label htmlFor="" className='dark:text-zinc-100'>Email Address</label>
       <input value={email} onChange={(e)=>setemail(e.target.value)}   autoComplete='email'     className='border border-gray-300 w-full p-2 rounded-xl outline-none dark:text-zinc-100' type="email" placeholder='Email' />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="" className='dark:text-zinc-100'>Password</label>
        <div className='relative'>
       <input  value={password}  onChange={(e)=>setpassword(e.target.value)} autoComplete='new-password' className='border border-gray-300 w-full p-2 rounded-xl outline-none dark:text-zinc-100' type={showPass ? "text": "password"} placeholder='password' />
     <span onClick={()=>setshowPass(!showPass)} className='absolute right-3 top-3'>{showPass ? <Eye strokeWidth={1.25}  size={22}/>:<EyeOff strokeWidth={1.25} size={22} />}</span>
     </div>
      </div>


      <label className="flex items-center gap-2 text-sm dark:text-zinc-100"> <input className="accent-green-400" type="checkbox" />

     Remember me</label>
     <button className=' text-white font-bold  bg-linear-to-r from-pink-500 to-pink-700 rounded-lg p-2 shadow-md hover:scale-95 transition  '>SignUp</button>


      <p className='text-[13px] dark:text-zinc-100 text-center'>Already have an account ? <Link to={"/login"}  className='text-pink-600 underline'>Login</Link></p>
     </form>
     </div>

    </div>

    </div>

    </div>

  )
}

export default SignUp
