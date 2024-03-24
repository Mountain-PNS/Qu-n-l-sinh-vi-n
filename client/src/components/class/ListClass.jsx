import React, { useContext, useEffect, useRef, useState } from "react";
import { CreateContext } from "../../context/ContentProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const ListClass = () => {
  const { content, dispatch, hidden, setHidden } = useContext(CreateContext);
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3000/api/class");
      dispatch({ type: "GET", payload: res.data.data });
    })();
  }, []);
  const onDelete = async (id) => {
    const res = await axios.delete(
      `http://localhost:3000/api/student/delete/${id}`
    );
    dispatch({ type: "DELETE", payload: id });
  };
  console.log(content);
  return (
    <>
      <div className=" flex justify-between ">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
        >
          Thêm sinh viên
        </button>
        <form action="#" method="GET" className="w-[256px]">
          <label htmlFor="topbar-search" className="sr-only">
            Search
          </label>
          <div className="mt-1 relative lg:w-64">
            <button className="absolute inset-y-0 left-0 pl-3 flex items-center ">
              <svg
                className="w-5 h-5 text-gray-500"
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
            <input
              type="text"
              name="email"
              id="topbar-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Mã Lớp học
              </th>
              <th scope="col" className="px-6 py-3">
                Tên Lớp
              </th>
              <th scope="col" className="px-6 py-3">
                Giảng viên
              </th>
              <th scope="col" className="px-6 py-3">
                Mã môn học
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày học
              </th>
              <th scope="col" className="px-6 py-3">
                Ca học
              </th>
              <th scope="col" className="px-6 py-3">
                Chi tiết
              </th>
            </tr>
          </thead>
          <tbody>
            {content.value.map((item, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.classId}
                  </th>
                  <td className="px-6 py-4">{item.className}</td>
                  <td className="px-6 py-4">{item.teacherName}</td>
                  <td className="px-6 py-4">{item.subjectId}</td>
                  <td className="px-6 py-4">Thứ {item.day}</td>
                  <td className="px-6 py-4">{item.periods}</td>
                  <td className="flex items-center px-6 py-4">
                    <Link
                      to={`/classroom/${item._id}`}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      <i class="fa-solid fa-circle-info"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListClass;
