import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { newAddOn } from "../store/action/actionCreator";
import Swal from "sweetalert2";

export default function AddForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    dispatch(newAddOn(data));
    Swal.fire("you added a new data");
    history.push("/");
  };
  return (
    <>
      <div className=" w-11/12 shadow-md mx-auto text-center py-4 mt-2 rounded-xl">
        <h1 className=" text-gray-800 text-center py-4 font-extrabold -mt-3 text-3xl">
          Add On Form
        </h1>
        <div className="container py-5 max-w-4xl mx-auto text-left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Name
            </label>
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
            <input
              type="text"
              name="name"
              className="w-full text-lg py-2 mb-6 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              {...register("name", { required: true })}
            />
            <label className="text-sm font-bold text-gray-700 tracking-wide mb-4">
              Price
            </label>
            {errors.price && (
              <span className="text-red-600">This field is required</span>
            )}
            <input
              type="number"
              name="price"
              className="w-full text-lg py-2 mb-6 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              {...register("price", { required: true })}
            />

            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Category
            </label>
            <select
              name=" addon_category_id"
              className="w-full text-lg py-2 mb-6 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              {...register(" addon_category_id", { required: true })}
            >
              <option defaultChecked="Category" selected disabled>
                Category
              </option>
              <option value="81">Jamu</option>
              <option value="80">Baru</option>
              <option value="77">Jelly Update</option>
              <option value="76">Jelly</option>
              <option value="74">Demo 2</option>
              <option value="72">Toping Update</option>
            </select>
            {errors.addon_category_id && (
              <span className="text-red-600">This field is required</span>
            )}
            <div className="flex items-center justify-between">
              <button
                className=" bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
