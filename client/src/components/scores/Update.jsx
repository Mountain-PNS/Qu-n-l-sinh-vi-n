import React from 'react'

const UpdateScores = () => {
  return (
    <>
    <div className=" flex justify-between ">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
        onClick={handleSubmit}
      >
        Thêm sinh viên
      </button>
     <></>
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
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Số điện thoại
            </th>
            <th scope="col" className="px-6 py-3">
              Trạng thái
            </th>
            <th scope="col" className="px-6 py-3">
              Giới tính
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {content.value.map((item, index) => {
            return (
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
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4">{item.gender}</td>
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
            );
          })} */}
        </tbody>
      </table>
    </div>
  </>
  )
}

export default UpdateScores