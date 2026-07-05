import React, { useContext, useState } from "react";
import { UserRoundPen, Bell, Monitor, Lock, SunDim,Moon ,SunMoon} from "lucide-react";
import { EmployeeContext } from "../../store/context/EmployeeContext";
import { useNavigate } from "react-router-dom";
import { handleChangePassword } from "../../store/Auth";
import { ThemeContext } from "../../store/context/ThemeContext";
import { ProfileContext } from "../../store/context/ProfileContext";
import { NotificationContext } from "../../store/context/NotificationContext";

const Setting = () => {
  const navigate = useNavigate();


  const{profileDetails,currPass,setcurrPass}=useContext(ProfileContext)

  const{setnotiEnabled}=useContext(NotificationContext)

  const{handleDark,handleLight}=useContext(ThemeContext)

  const handleProfileClick = () => {
    navigate("profile");
  };



  const[newPass,setnewPass]=useState("");
  const[confirmPass,setconfirmPass]=useState("")

const currChange=(e)=>{
setcurrPass(e.target.value)
console.log("curr",e.target.value)
  }

const newChange=(e)=>{
setnewPass(e.target.value);
console.log("new",e.target.value)
}

const confirmChange=(e)=>{
  setconfirmPass(e.target.value)
  console.log("confirm",e.target.value)
}


const submitChangePassword=async(e)=>{
e.preventDefault();


  try{

    if(newPass!==confirmPass){
            alert("Passwrd mismatch")
        }

    await handleChangePassword(currPass,newPass,confirmPass);

    console.log("password Change")
setcurrPass("");
setnewPass("");
setconfirmPass("")

  }
    catch(err){
    console.log(err.message)
  }



}


  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex items-center">
        <h2 className="text-3xl text-gray-700 p-2 font-semibold dark:text-zinc-100">Setting</h2>
        <span className="dark:text-zinc-100">{">"}</span>
        <h2 className="text-3xl text-gray-700 p-2 dark:text-zinc-100" onClick={handleProfileClick}>
          Profile
        </h2>
      </div>

      <div className="flex flex-col bg-white gap-2 p-2 rounded-lg dark:bg-zinc-900 dark:text-zinc-100">
        <div className="flex flex-col gap-1">
          <div className="flex  items-center border-b border-gray-200 dark:border-zinc-700">
            <span className="bg-pink-200 text-pink-600 p-2 rounded-lg">
              <Lock />
            </span>
            <div className="flex flex-col p-4">
              <h2 className="text-2xl font-semibold ">Security</h2>
              <p className="text-sm ">
                Keep your accunt secure by updating your password regularly
              </p>
            </div>
          </div>
          <h2 className="text-xl text-gray-600 font-semibold p-2 dark:text-zinc-100">
            Change Password
          </h2>
        </div>

        <form className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6  w-full" onSubmit={submitChangePassword}>
          <div className="flex flex-col gap-1">
            <label>Current Password</label>
            <input
              type="password"
              name="currPass"
              value={currPass}
              onChange={currChange}
              placeholder="Current Password"
              className="w-full  outline-none p-2 border border-gray-400 rounded-lg dark:border-zinc-700"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>New Password</label>
            <input
              type="password"
              name="newPass"
              value={newPass}
              onChange={newChange}
              placeholder="New Password"
              className="w-full  outline-none p-2 border border-gray-400 rounded-lg dark:border-zinc-700"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPass"
              value={confirmPass}
              onChange={confirmChange}
              placeholder="Confirm Password"
              className=" w-full  outline-none p-2 border border-gray-400 rounded-lg dark:border-zinc-700"
            />
          </div>
          <div className=" col-span-full    flex  md:justify-end">
            <button type="submit" className="bg-linear-to-r from-pink-400 to-pink-700 text-white p-2 px-4 rounded-lg font-semibold">
              Update Password
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4 dark:bg-zinc-900 dark:text-zinc-100 ">
        <div className="flex flex-col gap-1">
        <div className="flex items-center border-b border-gray-200 dark:border-zinc-700">
          <span className="bg-purple-200 text-purple-600 p-2 rounded-lg">
            <Monitor />
          </span>
          <div className="flex flex-col p-4">
            <h2 className="text-2xl font-semibold ">Aprearance</h2>
            <p className="text-sm">
              Customize the look and feel of your dashboard
            </p>
          </div>
          </div>
        </div>

        <div className="p-2 flex md:justify-around  justify-center items-center gap-2" >
           <div className="p-2 px-4 flex border border-gray-400 rounded-lg dark:border-zinc-700" onClick={handleLight}><span className="p-1"><SunDim/></span><h2 className="p-1 font-semibold">Light</h2></div>

           <div className="p-2 px-4 flex border border-gray-400 rounded-lg dark:border-zinc-700" onClick={handleDark}>
<span className="p-1" ><Moon/></span><h2 className="p-1 font-semibold">Dark</h2>
        </div>

        <div className="p-2 px-4 flex border border-gray-400 rounded-lg dark:border-zinc-700" >
<span className="p-1"><SunMoon /></span><h2 className="p-1 font-semibold">Default</h2>
        </div>
        </div>


      </div>
      <div>
        <div className="flex flex-col gap-4 bg-white rounded-lg p-3 dark:bg-zinc-900 dark:text-zinc-100">
          <div className="flex items-center p-1 border-b border-gray-200 dark:border-zinc-700">
            <span className="bg-orange-200 text-orange-600 p-2 rounded-lg">
              <Bell />
            </span>
            <div className="flex flex-col p-4">
              <h2 className="text-2xl font-semibold ">Notification</h2>
              <p className="text-sm">
                Manage how and when you receive notifications
              </p>
            </div>
          </div>
          <div className="p-2 border border-gray-400 rounded-lg dark:border-zinc-700">
            <select name="" id="" className="w-full p-1 outline-none">
              <option value="">ON/OFF</option>
              <option value="ON"  onClick={()=>setnotiEnabled(true)}>ON</option>
              <option value="OFF" onClick={()=>setnotiEnabled(false)}>OFF</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
