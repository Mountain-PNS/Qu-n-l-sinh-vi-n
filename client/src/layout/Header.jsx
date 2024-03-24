import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
            <img
              src="https://hnmu.edu.vn/upload/data/news/02-12-19/dt-hssv-co-cau.jpg"
              className=" h-10 mr-2"
              alt="Windster Logo"
            />
          </a>
          
        </div>
        <div className="flex items-center">
          <button
            id="toggleSidebarMobileSearch"
            type="button"
            className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
          >
            <span className="sr-only">Search</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {user ? <></>: <div className="hidden lg:flex items-center">
            <div className="mx-4">
              <Link to={"/login"}>Log In</Link>
            </div>
            <div className="mx-4">
              <Link to={"/register"}>Register</Link>
            </div>
          </div>}
          {user ? <a
            href="#"
            className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
          >
            <svg
              className="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="gem"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
              />
            </svg>
            {user && user.name }
          </a> : <></>}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
