import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import login from "../assets/login.svg";

export default function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    // console.log(data.email, "<<<data");
    axios({
      method: "POST",
      url: "http://localhost:8000/v1/auth/login",
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((resp) => {
        console.log(resp);
        //simpen access_token
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Login success!",
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };
  return (
    <>
      <div className="lg:flex">
        <div className="g:w-1/2 xl:max-w-screen-sm">
          <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="mt-0 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
              <h2
                className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
              >
                Log in
              </h2>
              <div className="mt-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* <div className="flex"> */}
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="saya@gmail.com"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600">This field is required</span>
                  )}
                  {/* </div> */}
                  <div className="mt-8">
                    <label className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      placeholder="Enter your password"
                      name="password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mt-10">
                    <button
                      className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                      shadow-lg"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
          <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
            <img src={login} alt="login svg" />
          </div>
        </div>
      </div>
    </>
  );
}
