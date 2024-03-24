import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const {registeruser, login, isErrors} = useContext(AuthContext)
  const {register,handleSubmit,formState: {errors}} = useForm()
  const nagvigate = useNavigate()
  const onSubmitResgister = async (user)=>{
      registeruser(user)
      alert(isErrors)
      nagvigate('/')
  }
  return (
    <div className="w-[1519px] h-[728px] flex justify-center items-center bg-slate-400">
      <div className="">
        <img
          src="../src/assets/img/cdc5ddde285f071d9043604b65c077d7.jpg"
          alt=""
          className="w-[250px]"
        />
      </div>
      <div className="w-[445px] h-[445px] bg-white">
        <form class=" max-w-sm mx-auto mt-11 " onSubmit={handleSubmit(onSubmitResgister)}>
          <div class="h-[100px] mb-2">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tên người dùng
            </label>
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tên người dùng"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-600 font-semibold m-2 ">Không được để trống</p>}
          </div>
          <div class="h-[100px] mb-2">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="abc.@gmail.com"
              {...register("email", { required: true,pattern: /^\S+@\S+$/i})}
            />
              {errors.email && errors.email.type === "required"  && <p className="text-red-600 font-semibold m-2 ">Không được để trống</p>}
              {errors.email && errors.email.type === "pattern"  && <p className="text-red-600 font-semibold m-2 ">Không đúng định dạng email</p>}
        
          </div>
          <div class="h-[100px] mb-2">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pass word
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mật khẩu"
              {...register("password", { required: true,minLength: 6,maxLength:32})}
              />
              {errors.password && errors.password.type === "required"  && <p className="text-red-600 font-semibold m-2 ">Không được để trống</p>}
              {errors.password && errors.password.type === "minLength"  && <p className="text-red-600 font-semibold m-2 ">Ký tự không nhỏ hơn 6</p>}
              {errors.password && errors.password.type === "maxLength"  && <p className="text-red-600 font-semibold m-2 ">Ký tự không lớn hơn 32</p>}
              {isErrors && <p className="text-red-600 font-semibold m-2 ">{isErrors}</p>}
          </div>
        
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
