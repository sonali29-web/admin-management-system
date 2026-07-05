import React, { useContext } from 'react'
import { NotificationContext } from '../store/context/NotificationContext'
import {CheckCheck} from "lucide-react"

const NotificationPopUp = () => {

  const { notiPopUp}=useContext(NotificationContext)


  return (
    <div>
    <div className='flex justify-center items-center bg-black/40 '>
     <div className='fixed top-17  bg-white text-black px-4 py-3 rounded-lg shadow-lg flex items-center border border-gray-300 p-1'><CheckCheck color="#17dd13" /><h2> {notiPopUp} </h2></div>
     </div>
    </div>
  )
}

export default NotificationPopUp