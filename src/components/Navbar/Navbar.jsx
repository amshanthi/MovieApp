import React from "react";
import FireIcon from "../../assets/fire.png";
import StarIcon from "../../assets/glowing-star.png";
import partyIcon from "../../assets/partying-face.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between md:items-center border-b-2 border-gray-600  flex-col md:flex-row ">
      <h1 className="text-2xl font-bold text-[#ffe400]">MovieFlix</h1>{" "}
      <div className="flex justify-between items-center gap-4 py-4 md:py-0">
        <ul className="flex justify-between md:items-center gap-4 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ffe400] flex items-center gap-1"
                  : "hover:text-gray-400 flex items-center gap-1"
              }
            >
              Popular
              <img
                className="inline-block w-6 h-6 ml-2"
                src={FireIcon}
                alt="Fire Icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top-rated"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ffe400] flex items-center gap-1"
                  : "hover:text-gray-400 flex items-center gap-1"
              }
            >
              Top Rated
              <img
                className="inline-block w-6 h-6 ml-2"
                src={StarIcon}
                alt="Star Icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ffe400] flex items-center gap-1"
                  : "hover:text-gray-400 flex items-center gap-1"
              }
            >
              Upcoming
              <img
                className="inline-block w-6 h-6 ml-2"
                src={partyIcon}
                alt="Party Icon"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
