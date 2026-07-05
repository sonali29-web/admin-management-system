import React from 'react'
import MainCards from '../../components/Dashboard/DashboardCards/MainCards'
import MainCharts from '../../components/Dashboard/Charts/MainCharts'
import RecentTaskTable from '../../components/Tasks/RecentTaskTable'
import TaskStatus from '../../components/Dashboard/Charts/TaskStatus'


const AdminDashboard = () => {
  return (
<>
<div className='flex flex-col gap-4  p-2 rounded-lg'>

<div className='flex flex-col gap-1 p-4  text-gray-700'><h2 className='text-2xl font-bold dark:text-zinc-100'>Dashboard Overview</h2>
<p className='dark:text-zinc-500'>Monitor employees, tasks, and performance from one place</p>
</div>

<MainCards></MainCards>
<MainCharts></MainCharts>

 <div className="grid grid-cols-1  md:grid-cols-2   lg:grid-cols-4 gap-4 mt-1">

  <div className="lg:col-span-2 ">
<RecentTaskTable></RecentTaskTable>
  </div>

{/* <div className='lg:col-span-1'>

</div> */}

  <div className="lg:col-span-2">
    <TaskStatus></TaskStatus>
  </div>



</div>
</div>


</>
  )
}

export default AdminDashboard