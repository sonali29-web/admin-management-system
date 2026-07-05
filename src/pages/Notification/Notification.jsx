import React, { useState,useContext } from 'react'
import {FaUserPlus,FaCheckCircle,FaUserEdit} from "react-icons/fa"
import { Trash2 } from 'lucide-react';
import { deleteNotification } from '../../store/notification';
import { NotificationContext } from '../../store/context/NotificationContext';
import { RiDeleteBin2Fill } from "react-icons/ri";




const Notification = () => {

const{notification,setNotification}=useContext(NotificationContext);

const icons={
  employeeAdd:<FaUserPlus className="w-10 h-10   p-2 rounded-full bg-pink-100 text-pink-500"/>,
  employeeDel:<RiDeleteBin2Fill className="w-10 h-10   p-2 rounded-full bg-red-100 text-red-500"/>,
  employeeUpdate:<FaUserEdit className="w-10 h-10   p-2 rounded-full bg-orange-100 text-orange-500"/>,
  taskAdd:<FaCheckCircle   className="w-10 h-10   p-2 rounded-full bg-green-100 text-green-500"/>,
  taskDel:<RiDeleteBin2Fill className="w-10 h-10   p-2 rounded-full bg-red-100 text-red-500"/>,
  taskEdit:<FaUserEdit className="w-10 h-10   p-2 rounded-full bg-orange-100 text-orange-500"/>
}


const handleDeleteNoti=async(id)=>{
await deleteNotification(id)
}


  return (<>
    <h2 className='text-3xl text-start font-semibold text-gray-600 p-4 dark:text-zinc-100'>Notification</h2>

    <div className='flex flex-col gap-3 bg-white dark:bg-zinc-900 '>
{notification.map((noti)=>(
  <div className='flex justify-between items-center  gap-4 p-4 border-b border-gray-100' key={noti.id}>
    <div className='flex justify-around items-center gap-4'>{icons[noti.type]}
  <div className='flex flex-col  '>
     <h2 className='text-black font-semibold text-md dark:text-zinc-100'>{noti.title}</h2>
     <p className='text-gray-500 text-sm'>{noti.message}</p>
    </div>
    </div>
    <div className='flex justify-around items-center p-2 gap-4'>
      <p  className='text-gray-500 text-sm'>{noti.time}</p>

     {noti.isRead ? <span className='bg-red-600 rounded-full w-2 h-2 '></span> :<span className='bg-gray-500 rounded-full w-2 h-2 '></span>}
     <span><Trash2 className='text-red-500 hover:scale-110 cursor-pointer' onClick={()=>handleDeleteNoti(noti.id)} /></span>
    </div>

    </div>

))}
 </div>
</>
  )
}

export default Notification