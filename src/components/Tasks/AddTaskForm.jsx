import React from 'react'
import { useNavigate } from 'react-router-dom'
import {CirclePlus} from "lucide-react"

const AddTaskForm = () => {

const navigate=useNavigate()

const addForm=()=>{
navigate("form")
}

  return (<>
<div className='flex items-center gap-2 text-pink-100 font-semibold   bg-linear-to-br  from-pink-500 to-pink-700 rounded-lg px-4 p-2 hover:bg-pink-800 cursor-pointer'>
<CirclePlus /><button onClick={addForm}>Add Task</button>
</div>
</>
  )
}

export default AddTaskForm