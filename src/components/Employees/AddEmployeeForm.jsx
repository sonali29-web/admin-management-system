import React, { useState } from "react";
import { CirclePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddEmployeeForm = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/dashboard/employees/form");
  };

  return (
    <>
      <div
        className="flex items-center p-2 gap-1 text-pink-100 font-semibold bg-linear-to-br  from-pink-500 to-pink-700 rounded-lg px-4"
        onClick={handleAdd}
      >
        <CirclePlus />
        <button>Add Emp</button>
      </div>
    </>
  );
};

export default AddEmployeeForm;
