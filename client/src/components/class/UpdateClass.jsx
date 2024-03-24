import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateContext } from "../../context/ContentProvider";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateClass = () => {

  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:3000/api/class/${id}`);

      const studentInfo = res.data.data.studentList.map(student => `${student.studentName}-${student.studentId}`);
   console.log(studentInfo);
      reset({ ...res.data.data, studentList: studentInfo });
    })();
  }, []);
  const { hidden, setHidden, dispatch } = useContext(CreateContext);
  const onSubmitUpdate = async (data) => {
    const res = await axios.post(
      "http://localhost:3000/api/class/create",
      data
    );
    dispatch({ type: "ADD", payload: res.data.data });
    setHidden(false);
  };
  return (
    <>
      <div className="w-[100%] h-[750px] bg-gray-500 backdrop-blur-md bg-opacity-40 flex justify-center items-center relative transition-opacity duration-500 ease-in-out backdrop-sepia-0">
        <form
          className="w-[800px] bg-white rounded-lg"
          onSubmit={handleSubmit(onSubmitUpdate)}
        >
          <button className="absolute right-[25%]">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div className="grid gap-6 m-6  md:grid-cols-3">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mã lớp
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mã sinh viên"
                {...register("classId", { required: true, pattern: /^SV/ })}
              />
              {errors.classId && errors.classId.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
              {errors.classId && errors.classId.type === "pattern" && (
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
                Tên Lớp
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Họ và tên"
                {...register("className", { required: true })}
              />
              {errors.className && errors.className.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mã Giảng viên
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Flowbite"
                {...register("teacherId", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.teacherId && errors.teacherId.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
              {errors.teacherId && errors.teacherId.type === "pattern" && (
                <p className="text-red-500 font-medium">
                  Không đúng định dạng teacherId
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tên Giảng viên
              </label>
              <input
                type=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("teacherName", {
                  required: true,
                  pattern: /^[0-9\b]+$/,
                })}
             
              />
              {errors.teacherName && errors.teacherName.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
              {errors.teacherName && errors.teacherName.type === "pattern" && (
                <p className="text-red-500 font-medium">
                  Không đúng định dạng số điện thoại
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mã môn
              </label>
              <input
                type=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("subjectId", {
                  required: true,
                  pattern: /^[0-9\b]+$/,
                })}
              />
              {errors.subjectId && errors.subjectId.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
              {errors.subjectId && errors.subjectId.type === "pattern" && (
                <p className="text-red-500 font-medium">
                  Không đúng định dạng số điện thoại
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phòng học
              </label>
              <input
                type=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("room", {
                  required: true,
                  pattern: /^[0-9\b]+$/,
                })}
              />
              {errors.room && errors.room.type === "required" && (
                <p className="text-red-500 font-medium">Không được để trống</p>
              )}
              {errors.room && errors.room.type === "pattern" && (
                <p className="text-red-500 font-medium">
                  Không đúng định dạng số điện thoại
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ngày học
              </label>
              <select
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("day", {
                  required: true,
                })}
              >
                <option value="2 4 6">Thứ 2 4 6</option>
                <option value="3 5 7">Thứ 3 5 7</option>
              </select>
              {/* <p className="text-red-500 font-medium">
                Không đúng định dạng số điện thoại
              </p> */}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ca học
              </label>
              <select
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("periods", {
                  required: true,
                })}
              >
                <option value="ca 1 : 7:30-9:30"> ca 1 : 7:30-9:30</option>
                <option value="ca 2 : 9:30-11:30"> ca 2 : 9:30-11:30</option>
                <option value="ca 3 : 13:30-15:30">ca 3 : 13:30-15:30</option>
                <option value="ca 4 : 15:30-17:30">ca 4 : 15:30-17:30</option>
                <option value="ca 5 : 17:30-29:30">ca 5 : 17:30-29:30</option>
              </select>
            </div>
          
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                
              >
                Thành viên
              </label>
           
              <textarea name="" id="" cols="30" rows="10" {...register("studentList", {
                  required: true,
                })}></textarea>
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

export default UpdateClass;
