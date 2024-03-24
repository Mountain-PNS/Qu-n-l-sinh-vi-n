import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const {login, isErrors } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmitLogin = async (user) => {
     login(user);
     navigate('/')
  };
  return (
    <div className="w-[100%] h-[750px] bg-blue-100 backdrop-blur-md bg-opacity-90 flex justify-center items-center relative transition-opacity duration-500 ease-in-out backdrop-sepia-0">
      <div className="w-[445px] h-[500px] bg-white rounded-lg">
        <div className=" flex flex-col items-center my-3">
          <img
            src="../src/assets/img/d0932b3ed34581f4f811626a242c4ce3.jpg"
            width={"100px"}
            alt=""
          />
          <h1 className="text-2xl font-medium my-2">Log In</h1>
        </div>
        <form class=" max-w-sm mx-auto mt-8 " onSubmit={handleSubmit(onSubmitLogin)}>
          <div class="[100px] mb-2">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              {...register("email", { required: true,pattern: /^\S+@\S+$/i})}
            />
              {errors.email && errors.email.type === "required"  && <p className="text-red-600 font-semibold m-2 ">Không được để trống</p>}
              {errors.email && errors.email.type === "pattern"  && <p className="text-red-600 font-semibold m-2 ">Không đúng định dạng email</p>}
          </div>
          <div class="[100px] mb-2">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mật khẩu"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 32,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="text-red-600 font-semibold m-2 ">
                Không được để trống
              </p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="text-red-600 font-semibold m-2 ">
                Ký tự không nhỏ hơn 6
              </p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <p className="text-red-600 font-semibold m-2 ">
                Ký tự không lớn hơn 32
              </p>
            )}
            <p className="text-red-600 font-semibold m-2 ">{isErrors}</p>
          </div>

          <button
            type="submit"
            class="bg-blue-500 border border-blue-500 text-white  text-lg font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
