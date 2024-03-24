import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CreateContext } from "../../context/ContentProvider";

const UpdateStudent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {id} = useParams();
  const {dispatch} = useContext(CreateContext); 
  useEffect(() => {
    (async()=>{
        const res = await axios.get(`http://localhost:3000/api/student/${id}`);
        const data = res.data.data;
        if (data.dateOfBirth) {
            const date = new Date(data.dateOfBirth);
            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2); // thêm số 0 phía trước nếu tháng < 10
            const day = ("0" + date.getDate()).slice(-2); // thêm số 0 phía trước nếu ngày < 10
            data.dateOfBirth = `${year}-${month}-${day}`;
          }
        reset(data)
    })()
  },[])
  const navigate = useNavigate()
  const onSubmitUpdate = async (data) => {
   const res = await axios.put(`http://localhost:3000/api/student/edit/${id}`,data);
   dispatch({type:"UPDATE",payload:res.data.data});
   navigate("/students")
  };
  return (
    <>
      <div className="w-[100%] h-[750px] bg-gray-500 backdrop-blur-md bg-opacity-40 flex justify-center items-center relative transition-opacity duration-500 ease-in-out backdrop-sepia-0">
        <form
          className="w-[800px] bg-white rounded-lg"
          onSubmit={handleSubmit(onSubmitUpdate)}
        >
          <p className="absolute right-[25%]" >
            <i class="fa-solid fa-xmark"></i>
          </p>
          <div className="grid gap-6 m-6  md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mã sinh viên
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mã sinh viên"
                {...register("studentId", { required: true, pattern: /^SV/ })}
              />
              {errors.studentId && errors.studentId.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
              {errors.studentId && errors.studentId.type === "pattern" && (
                <p className="text-red-500 font-medium">
                  Mã sinh viên bắt đầu SV{" "}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tên sinh viên
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Họ và tên"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Flowbite"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="text-red-500 font-medium">
                  Không đúng định dạng email
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Số điện thoại
              </label>
              <input
                type=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9\b]+$/,
                })}
              />
              {errors.phone && errors.phone.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
              {errors.phone && errors.phone.type === "pattern" && (
                <p className="text-red-500 font-medium">
                  Không đúng định dạng số điện thoại
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Giới tính
              </label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                {...register("gender", { required: true })}
              />
              <span className="mx-2">Nam</span>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                {...register("gender", { required: true })}
              />
              <span className="mx-2">Nữ</span>
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ngày sinh
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                {...register("dateOfBirth", { required: true })}
              />
              {errors.dateOfBirth && errors.dateOfBirth.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Trạng thái
              </label>
              <input
                type="radio"
                name="status"
                value="Đang học"
                {...register("status", { required: true })}
              />
              <span className="mx-2">Đang học</span>
              <input
                type="radio"
                name="status"
                value="Nghỉ học"
                {...register("status", { required: true })}
              />
              <span className="mx-2">Nghỉ học</span>
              <input
                type="radio"
                name="status"
                value="Bảo lưu"
                {...register("status", { required: true })}
              />
              <span className="mx-2">Bỏ học</span>
              
            </div> 
            <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-6"
          >
            Submit
          </button>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default UpdateStudent;
