import React, { useContext, useEffect, useState } from "react";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { EmployeeContext } from "../../store/context/EmployeeContext";
import { useNavigate } from "react-router-dom";
import { deleteEmp } from "../../store/employeeservice";
import { FilterContext } from "../../store/context/FilterContext";
import { NotificationContext } from "../../store/context/NotificationContext";
import { addNotiData } from "../../store/notification";
import { notificationDatafetch } from "../../store/notification";
import Loader from "../Loader";
import { AuthContext } from "../../store/context/AuthContext";

const EmployeesTable = () => {

 const {loading}= useContext(AuthContext)

  const {
    employees,
    setformdata,
    formdata,
    edit,
    setEdit,
    setEmpId,
    empId,

  } = useContext(EmployeeContext);

  const {notiEnabled,

       setNotification,setNotiPopUp,}=useContext(NotificationContext)


  const {filterEmp}=useContext(FilterContext)

  const navigate = useNavigate();

  const handleEdit = (emp) => {
    setEdit(true);
    setEmpId(emp.id);

    setformdata({
      name: emp.name,
      email: emp.email,
      department: emp.department,
      role: emp.role,
      status: emp.status,
    });

    navigate("form");
  };

  const handleDelete = async(id,name) => {
    deleteEmp(id);

    await addNotiData({
    type: "employeeDel",
    title: "Employee Deleted",
    message: `${name} has been deleted`,
    time: new Date().toLocaleTimeString(),
  });

    const notiData=await notificationDatafetch()
   setNotification(notiData);


   if(notiEnabled){
setNotiPopUp("Employee deleted Successfully")
   setTimeout(()=>setNotiPopUp(""),3000)

   setTimeout(() => {
    setNotiPopUp("")
   }, 3000);
   }

  };

  if(loading){
    return <Loader></Loader>
  }


  return (
    <div className="w-full  p-4 bg-white border border-gray-300 rounded-lg dark:bg-zinc-900">
      <div className=" overflow-x-auto bg-white dark:bg-zinc-900 ">
        <table className="border-collapse w-full rounded-xl min-w-225 ">
          <thead>
            <tr className="bg-linear-to-br from-pink-500 to-pink-700">
              <th className="text-left p-3 border-b border-gray-200 text-zinc-100">
                Id
              </th>
              <th className="text-left p-3 border-b border-gray-200 text-zinc-100">
                Name
              </th>
              <th className="text-left p-3 border-b border-gray-200 text-zinc-100">
                Email
              </th>
              <th className="text-left p-3 border-b border-gray-200 text-zinc-100">
                Department
              </th>
              <th className="text-left p-3 border-b border-gray-200 text-zinc-100">
                Role
              </th>
              <th className="text-left p-3 border-b border-gray-200 text-zinc-100">
                Status
              </th>
              <th className="text-left p-3 border-b border-gray-200 text-zinc-100">
                Joining Date
              </th>
              <th className="text-left p-3 border-b border-gray-200 text-zinc-100">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filterEmp.map((emp) => (
              <tr key={emp.id} className="text-left p-2">
                <td className="p-3 border-b border-gray-100 dark:text-zinc-100">
                  {emp.empId}
                </td>
                <td className=" flex justify-start items-center gap-1 p-4 border-b border-gray-100 dark:text-zinc-100">
                  {/* <img className="w-10 h-10 rounded-full" src={emp.image} alt="" /> */}
                  <span>{emp.name}</span>

                </td>
                <td className="p-3 border-b border-gray-100 dark:text-zinc-100">
                  {emp.email}
                </td>
                <td className="p-3 border-b border-gray-100 dark:text-zinc-100 ">
                  {emp.department}
                </td>
                <td className="p-3 border-b border-gray-100 dark:text-zinc-100">
                  {emp.role}
                </td>
                <td className="p-3 border-b border-gray-100 dark:text-zinc-100">
                  {emp.status}
                </td>
                <td className="p-3 border-b border-gray-100 dark:text-zinc-100">
                  {emp.joiningDate}
                </td>
                <td className="p-3 border-b border-gray-100 dark:text-zinc-100">
                  <div className="flex  items-center gap-3">
                    <Eye
                      size={20}
                      className="text-sky-500 hover:scale-110 cursor-pointer "
                    />
                    <PencilLine
                      onClick={() => handleEdit(emp)}
                      size={20}
                      className="text-yellow-400 hover:scale-110 cursor-pointer"
                    />
                    <Trash2
                      onClick={() => handleDelete(emp.id,emp.name)}
                      className="text-red-500 hover:scale-110 cursor-pointer"
                      size={20}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesTable;
