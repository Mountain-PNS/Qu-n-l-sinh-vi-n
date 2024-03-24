import axios from "axios";
import React, { useContext, useEffect } from "react";
import { CreateContext } from "../../context/ContentProvider";
import { useState } from "react";
import { Link } from "react-router-dom";
const ListScores = () => {
  const [student, setStudent] = useState([]);
  const { content, dispatch } = useContext(CreateContext);
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3000/api/scores");
      dispatch({ type: "GET", payload: res.data.data });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3000/api/student");
      setStudent(res.data.data);
    })();
  }, []);

  const data = content.value.map(itemContent => {
    const studentName = student.find(itemStudent => itemStudent.studentId === itemContent.studentId);
  
    if (studentName) {
      return {
        ...itemContent,
        name: studentName.name,
        id : studentName._id
      };
    } else {
      return itemContent;
    }
  });
  const studentData = {};

  data.forEach((item) => {
    
    if (!studentData[item.studentId]) {
      studentData[item.studentId] = {
        studentId: item.studentId,
        name : item.name,
        id : item.id,
        scores: {},
      };  
    }

    // Lưu trữ điểm trung bình theo subjectId
    studentData[item.studentId].scores[item.subjectId] = item.average;
  });
  // Chuyển đổi đối tượng thành mảng để sử dụng với map()
  const studentArray = Object.values(studentData);
  console.log(studentArray);
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
                Mã sinh viên
              </th>
              <th scope="col" className="px-6 py-3">
                Tên sinh viên
              </th>
              <th scope="col" className="px-6 py-3">
                Lập trình cơ bản
              </th>
              <th scope="col" className="px-6 py-3">
                HTML CSS
              </th>
              <th scope="col" className="px-6 py-3">
                Javascript
              </th>
              <th scope="col" className="px-6 py-3">
                Node Js
              </th>
              <th scope="col" className="px-6 py-3">
                JReact JS
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {studentArray.map((item, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.studentId}
              </th>
                <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.scores["BC001"]}</td>
              <td className="px-6 py-4">{item.scores["IT002"]}</td>
              <td className="px-6 py-4">{item.scores["JS003"]}</td>
              <td className="px-6 py-4">{item.scores["NJS004"]}</td>
              <td className="px-6 py-4">{item.scores["RJ003"]}</td>
              <td className="flex items-center px-6 py-4">
               
                <Link
                  to={`/scores/${item.studentId}`}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                 <i class="fa-solid fa-circle-info"></i>
                </Link>
              </td>
            </tr>
          ))}
          {/* {data.map((item, index) => {
            return (
              <tbody>
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.studentId}
                  </th>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">{item.average}</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="flex items-center px-6 py-4">
                    <button
                      onClick={() => onDelete(item._id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <i class="fa-solid fa-trash fa-lg"></i>
                    </button>
                    <Link
                      to={`/students/${item._id}`}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      <i class="fa-solid fa-pen-to-square fa-lg"></i>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })} */}
        </table>
      </div>
    </>
  );
};

export default ListScores;
