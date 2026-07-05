import React, { useState } from "react";
import { useContext } from "react";
import { EmployeeContext } from "../../store/context/EmployeeContext";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { fetchEmployee, editEmp } from "../../store/employeeservice";
import { db } from "../../store/firebaseConfig";
import { addNotiData, notificationDatafetch } from "../../store/notification";
import { NotificationContext } from "../../store/context/NotificationContext";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

const EmployeeForm = () => {
  const navigate = useNavigate();

  console.log("EmployeeForm Render");
  const {
    employees,
    setEmployee,
    formdata,
    setformdata,
    edit,
    setEdit,
    setEmpId,
    empId,
  } = useContext(EmployeeContext);

  const {
    notification,
    notiEnabled,
    setNotification,
    newNotification,
    setNotiPopUp,
    empUpdateNotication,
  } = useContext(NotificationContext);

  // console.log("noti",notification)
  // console.log("newnoti",newNotification)

  const handleChange = (e) => {
      setformdata({
        ...formdata,
        [e.target.name]: e.target.value,
      });
  };

  const handleCancel = () => {
    setformdata({
      image: null,
      name: "",
      email: "",
      empId: "",
      department: "",
      role: "",
      status: "",
      joiningDate: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (edit) {
        await editEmp(empId, formdata);

        console.log(formdata);
        setEmployee((prev) =>
          prev.map((emp) => (emp.id === empId ? { ...emp, ...formdata } : emp)),
        );

        await addNotiData(empUpdateNotication);

        const notiData = notificationDatafetch();

        setNotification(notiData);

        if (notiEnabled) {
          setNotiPopUp("Employee Updated Successfully");

          setTimeout(() => {
            setNotiPopUp("");
          }, 3000);
        }
      } else {
        await addDoc(collection(db, "employees"), formdata);

        const data = await fetchEmployee();

        setEmployee(data);

        await addNotiData(newNotification);

        console.log("new notification", newNotification);
        const notidata = await notificationDatafetch();
        setNotification(notidata);

        if (notiEnabled) {
          setNotiPopUp("Employee Added Successfully");

          navigate("/dashboard/employees");

          setTimeout(() => {
            setNotiPopUp("");
          }, 5000);
        }
      }

      setformdata({
        image: "",
        name: "",
        email: "",
        empId: "",
        department: "",
        role: "",
        status: "",
        joiningDate: "",
      });

      setEdit(false);
      setEmpId(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className=" flex justify-center items-center p-4 ">
      <form
        className="flex flex-col gap-4 p-4 bg-white rounded-xl w-full dark:bg-zinc-900"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center dark:text-zinc-100 font-semibold text-lg">
          {edit ? "Update" : "New"}Employee Form
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2">
          {/* <div className="lg:col-span-1 flex justify-center items-center"><div className="w-40 h-40 flex justify-center items-center bg-gray-300 rounded-full p-2 gap-2"><input className=" hidden w-42 h-42 object-cover rounded-full text-middle" type="file" name="image"  onChange={handleChange} id="image"/><Upload strokeWidth={1.75} /><label className="cursor-pointer" htmlFor="image">Upload image</label></div></div> */}
          <div className="lg:col-span-3 flex flex-col gap-4 p-3">
            <h2 className="dark:text-zinc-100">Employee Personal Details</h2>

            <input
              name="name"
              value={formdata.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="p-2 border border-gray-200 rounded-lg outline-none dark:text-zinc-100 dark:border-zinc-700"
            ></input>
            <input
              name="email"
              value={formdata.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="p-2  border border-gray-200  rounded-lg outline-none dark:text-zinc-100 dark:border-zinc-700"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <h2 className="dark:text-zinc-100">Employees work Details</h2>
          <input
            name="empId"
            value={formdata.empId}
            onChange={handleChange}
            type="text"
            placeholder="Employee Id"
            className="p-2 border border-gray-200  rounded-lg outline-none dark:text-zinc-100 dark:border-zinc-700"
          />
          <input
            name="department"
            value={formdata.department}
            onChange={handleChange}
            type="text"
            placeholder="Department"
            className="p-2 border border-gray-200  rounded-lg outline-none dark:text-zinc-100 dark:border-zinc-700"
          />
          <input
            name="role"
            value={formdata.role}
            onChange={handleChange}
            type="text"
            placeholder="Role"
            className="p-2 border border-gray-200  rounded-lg outline-none dark:text-zinc-100 dark:border-zinc-700"
          />
          <select
            name="status"
            value={formdata.status}
            onChange={handleChange}
            id=""
            className="p-2 border border-gray-200  rounded-lg outline-none dark:text-zinc-100 dark:border-zinc-700"
          >
            <option value="" disabled className="dark:text-zinc-100">
              Status
            </option>
            <option value="Active">Active</option>
            <option value="In-Active">In-Active</option>
          </select>

          <input
            name="joiningDate"
            value={formdata.joiningDate}
            onChange={handleChange}
            type="date"
            className="dark:border-zinc-700 w-full border border-gray-300 p-2 rounded-lg outline-none  dark:text-zinc-100"
          />

          <div className="col-span-full flex justify-end gap-4 ">
            <button
              onClick={handleCancel}
              type="button"
              className="border border-gray-300 px-4 py-2 rounded-lg dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700"
            >
              Cancel
            </button>

            <button
              className="bg-linear-to-br from-pink-500 to-pink-700 px-4 py-2 rounded-lg text-white cursor-pointer  hover:bg-pink-800 "
              type="submit"
            >
              {edit ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
