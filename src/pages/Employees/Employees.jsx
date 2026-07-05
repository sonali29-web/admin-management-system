import React from "react";
import SearchEmployees from "../../components/Employees/SearchEmployees";
import FilterEmployees from "../../components/Employees/FilterEmployees";
import EmployeesTable from "../../components/Employees/EmployeesTable";
import AddEmployeeForm from "../../components/Employees/AddEmployeeForm";
import EmployeeForm from "../../components/Employees/EmployeeForm";

const Employees = () => {
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between items-center p-2">
          {" "}
          <div className="flex flex-col justify-start items-start p-2">
            <h2 className="text-3xl text-center font-semibold text-gray-600 dark:text-zinc-100">
              Employees
            </h2>
            <p className="dark:text-gray-400">
              Manage And view all your employees
            </p>
          </div>
          <AddEmployeeForm></AddEmployeeForm>
        </div>

        <div className="flex justify-between items-center p-2 gap-2">
          <SearchEmployees></SearchEmployees>
          <FilterEmployees></FilterEmployees>
        </div>

        <div className="p-4">
          <EmployeesTable></EmployeesTable>{" "}
        </div>
        {/* <AddEmployeeForm></AddEmployeeForm> */}
      </div>
    </>
  );
};

export default Employees;
