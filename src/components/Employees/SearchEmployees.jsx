import React, { useState } from "react";
import { useContext } from "react";
import { EmployeeContext } from "../../store/context/EmployeeContext";

const SearchEmployees = () => {
  const { search, setSearch } = useContext(EmployeeContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" w-full p-3 ">
      <div className=" border border-gray-300 bg-white rounded-lg dark:bg-zinc-900  dark:border-zinc-700 ">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          className="w-full text-md p-3 outline-none dark:text-zinc-100"
          placeholder="Search by employee name, email and Id"
        />
      </div>
    </div>
  );
};

export default SearchEmployees;
