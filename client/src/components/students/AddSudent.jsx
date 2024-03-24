import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { CreateContext } from "../../context/ContentProvider";
const AddSudent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { hidden, setHidden,dispatch } = useContext(CreateContext);

  const handleHidden = () => {
    setHidden(hidden === false ? true : false);
  };
  const onSubmitAdd = async (data) => {
    const res = await axios.post("http://localhost:3000/api/student/create", data); 
    dispatch({ type: "ADD", payload: res.data.data });
    setHidden(false)
  };
  return (
    <>
      <div className="w-[100%] h-[750px] bg-gray-500 backdrop-blur-md bg-opacity-40 flex justify-center items-center relative transition-opacity duration-500 ease-in-out backdrop-sepia-0">
        <form
          className="w-[800px] bg-white rounded-lg"
          onSubmit={handleSubmit(onSubmitAdd)}
        >
          <button className="absolute right-[25%]" onClick={handleHidden}>
            <i class="fa-solid fa-xmark"></i>
          </button>
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
                <p className="text-red-500 font-medium">Mã sinh viên bắt đầu SV </p>
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
                <p className="text-red-500 font-medium">Không đúng định dạng email</p>
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
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-6"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddSudent;
