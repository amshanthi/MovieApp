import React from "react";

const Filter = ({ filterArr, handleFilterChange, minRate }) => {
  return (
    <ul className="flex justify-between items-center  gap-4 md:text-sm ">
      {filterArr.map((filter) => (
        <li
          onClick={() => handleFilterChange(filter)}
          key={filter}
          className={`cursor-pointer active:border-b-2   ${minRate === filter ? "border-b-2 border-[#ffe400]" : ""}`}
        >
          {filter}+ stars
        </li>
      ))}
    </ul>
  );
};

export default Filter;
