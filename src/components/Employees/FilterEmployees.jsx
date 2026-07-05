import React, { useState,useContext } from 'react'
import { FiFilter } from "react-icons/fi";
import {X} from "lucide-react"
import { EmployeeContext } from '../../store/context/EmployeeContext';
import { FilterContext } from '../../store/context/FilterContext';

const FilterEmployees = () => {

const {employees}=useContext(EmployeeContext)

const {selectdept,filter,setFilter,filterData,setFilterData,filterChange,reset}=useContext(FilterContext)







  return (<>
    <div className='relative p-2 rounded-lg cursor-pointer'   >
        <button onClick={()=>setFilter(true)} className=' flex justify-around items-center gap-2 border border-gray-300 rounded-lg p-3 bg-white px-8 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700'><FiFilter />Filter</button>


        {filter && <div className='absolute right-0  border border-gray-300 bg-white p-4 w-50 md:w-105 mt-5 rounded-lg dark:bg-zinc-900'>
          <span className='flex justify-end' onClick={()=>setFilter(false)}><X className='dark:text-zinc-100'></X></span>
               <div className='grid  grid-cols-1  md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-1  '><label htmlFor="" className='text-sm font-semibold dark:text-zinc-100'>Name</label>
                <select name='empName' value={filterData.empName} onChange={filterChange} type="text" className='w-full border border-gray-300 rounded-lg p-2 dark:text-zinc-400'>
                  <option value="" >All EmpName</option>
                  {employees.map((emp)=>(
                     <option key={emp.id}  value={emp.name}>{emp.name}</option>
                  ))}
                  </select>
                </div>

<div className='flex flex-col gap-1 '><label htmlFor="" className='text-sm font-semibold dark:text-zinc-100'>Department</label>
                <select  name='empDept'  value={filterData.empDept} onChange={filterChange}   type="text" className='w-full border border-gray-300 rounded-lg p-2 dark:text-zinc-400'>
                  <option value="" disabled>All Department</option>
                  {selectdept.map((dept,index)=>( <option  key={index} value={dept}>{dept}</option>))}
                  </select>
                </div>


                <div className='flex flex-col gap-1 '><label htmlFor="" className='text-sm font-semibold dark:text-zinc-100'>Status</label>
                <select name='empStatus' value={filterData.empStatus} onChange={filterChange} type="text" className='w-full border border-gray-300 rounded-lg p-2 dark:text-zinc-400'><option value="">All Status</option>
               <option value="Active">Active</option>
               <option value="Active">In-Active</option>
                </select>
                </div>


                 <div className='flex flex-col gap-1 '><label htmlFor="" className='text-sm font-semibold dark:text-zinc-100'>Joining Date</label>
                <input name='empJoiningDate' value={filterData.empJoiningDate} onChange={filterChange} type="date" className='w-full border border-gray-300 rounded-lg p-2 dark:text-zinc-400'/>
                </div>
</div>

 <div className='flex justify-end items-center pt-4'><button onClick={reset} className='border border-gray-400 p-2 px-2 rounded-lg bg-pink-700 text-white font-semibold'>Reset</button>
</div>
            </div>}
            </div>
 </> )
}

export default FilterEmployees