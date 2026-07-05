import React from 'react'
import TasksForm from '../../components/Tasks/TasksForm'
import TasksTable  from '../../components/Tasks/TasksTable'
import AddTaskForm from '../../components/Tasks/AddTaskForm'


const Tasks = () => {


  return (
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex justify-between items-center '>
        <div className='flex flex-col justify-start'><h2 className='text-3xl text-gray-600 font-semibold dark:text-zinc-100'>Tasks</h2>
        <p className='dark:text-zinc-400'>Manage and create task </p>
        </div>
        <AddTaskForm></AddTaskForm>
      </div>
     <TasksTable></TasksTable>

      </div>
  )
}

export default Tasks