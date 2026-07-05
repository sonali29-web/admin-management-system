import { createContext, useContext } from "react";
import { useState } from "react";
import { EmployeeContext } from "./EmployeeContext";

export const FilterContext=createContext();

export const FilterProvider=({children})=>{

const {employees,debounceSearchValue}=useContext(EmployeeContext)


const dept=employees.map((emp)=>emp.department)

const selectdept=[...new Set(dept)]

const [filter,setFilter]=useState(false)

const [filterData,setFilterData]=useState({
empName:"",
empDept:"",
empStatus:"",
empJoiningDate:""
})


const filterChange=(e)=>{
setFilterData({...filterData,[e.target.name]:e.target.value})
console.log(e.target.value)
}

const reset=()=>{
setFilterData({
  empName:"",
empDept:"",
empStatus:"",
empJoiningDate:""
})
}

const filterEmp=employees.filter((emp)=>{
        const matchSearch=!debounceSearchValue || emp.name.toLowerCase().includes(debounceSearchValue.toLowerCase(),) || emp.email.toLowerCase().includes(debounceSearchValue.toLowerCase()) || emp.empId.toLowerCase().includes(debounceSearchValue.toLowerCase());

        const matchName=!filterData.empName || emp.name === filterData.empName

        const matchDept=!filterData.empDept || emp.department === filterData.empDept

        const matchStatus=!filterData.empStatus || emp.empStatus === filterData.empStatus

        const matchJoiningDate=!filterData.empJoiningDate || emp.joiningDate === filterData.empJoiningDate

        return matchSearch && matchName && matchDept && matchStatus  &&  matchJoiningDate

})



    return(<>

    <FilterContext.Provider value={{selectdept,filter,setFilter,filterData,setFilterData,filterChange,reset,filterEmp}}>
        {children}
    </FilterContext.Provider>

    </>)
}