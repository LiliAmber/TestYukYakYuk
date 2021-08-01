import React, { useEffect } from "react";
import { fetchAddOn, setLoading } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import hero from "../assets/hero.svg";

export default function AddOn() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchAddOn());
  }, []);

  const addOn = useSelector((state) => state.addOnReducer);
  console.log(addOn, "<<<fetch di dashboard");
  const loading = useSelector((state) => state.addOnReducer.loading);
  //   const errors = useSelector((state) => state.addOnReducer.errors);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  //   if (errors) {
  //     return <h1>Errors ...</h1>;
  //   }

  function toAddForm() {
    // console.log("aku di klik yeay/");
    history.push("/add");
  }

  function toEditForm() {
    history.push("/edit");
  }

  return (
    <div className="w-screen">
      <div className="hero py-16 w-full">
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="hero-text col-span-6">
              <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">
                Craving for a tasty food ? We can help you !
              </h1>
              <p className="text-gray-800 text-base leading-relaxed mt-6 font-semibold">
                Your ultimate belly companion. Carries all the suppa tasty food
                for your belly need.
              </p>
              <div className="flex space-x-5 mt-10 justify-center md:justify-start">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white shadow-md px-3 py-2 rounded-lg flex items-center">
                  See Details
                </button>
              </div>
            </div>

            <div className="hero-image col-span-6">
              <img src={hero} alt="tasty food" />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <h1 className=" text-indigo-500 text-center py-4 font-extrabold -mt-3 text-4xl md:text-5xl ">
          Categories
        </h1>

        {/*===CATEGOTY WRAPPER=== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          {/*===HARUSNYA LOOP CATEGORY CARD MULAI DARI SINI===*/}
          <div className="bg-indigo-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-indigo-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-right mr-3">
              <p class="text-2xl">Jelly</p>
            </div>
          </div>

          <div className="bg-indigo-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-indigo-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-right mr-3">
              <p class="text-2xl">Jelly</p>
            </div>
          </div>

          <div className="bg-indigo-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-indigo-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-right mr-3">
              <p class="text-2xl">Jelly</p>
            </div>
          </div>

          <div className="bg-indigo-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-indigo-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-right mr-3">
              <p class="text-2xl">Jelly</p>
            </div>
          </div>

          <div className="bg-indigo-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-indigo-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-right mr-3">
              <p class="text-2xl">Jelly</p>
            </div>
          </div>

          <div className="bg-indigo-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-indigo-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-right mr-3">
              <p class="text-2xl">Jelly</p>
            </div>
          </div>
          {/*===END OF CATEGORY CARD */}
        </div>
        {/*===END OF CATEGORY WRAPPER=== */}

        <h1 className=" text-indigo-500 text-center py-4 pt-10 font-extrabold -mt-3 text-4xl md:text-5xl">
          My Add Ons
        </h1>
        <div className="flex ml-6">
          <button
            className="hover:bg-indigo-200 hover:text-indigo-800 group flex items-center rounded-md bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-2"
            onClick={toAddForm}
          >
            <svg
              className="group-hover:text-indigo-600 text-indigo-500 mr-2"
              width="12"
              height="20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
              />
            </svg>
            Add
          </button>
        </div>
        {/*===ADD ON WRAPPER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          {/*===CARD BEGIN, LOOP NYA DRI SINI=== */}
          <div className="bg-grey-100 shadow-md  rounded-3xl p-4">
            <div className="flex-none lg:flex">
              <div className="h-full w-full mb-3">
                <img src={hero} alt="tasty food" />
              </div>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs text-indigo-700 font-medium ">
                    Ayam
                  </div>
                  <h2 className="flex-auto text-lg font-medium">AddOns Demo</h2>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <button
                    className="mb-2 md:mb-0 bg-indigo-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-indigo-500"
                    onClick={toEditForm}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-100 shadow-md  rounded-3xl p-4">
            <div className="flex-none lg:flex">
              <div className="h-full w-full mb-3">
                <img src={hero} alt="tasty food" />
              </div>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs text-indigo-700 font-medium ">
                    Ayam
                  </div>
                  <h2 className="flex-auto text-lg font-medium">AddOns Demo</h2>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <button
                    className="mb-2 md:mb-0 bg-indigo-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-indigo-500"
                    type="sumbit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-100 shadow-md  rounded-3xl p-4">
            <div className="flex-none lg:flex">
              <div className="h-full w-full mb-3">
                <img src={hero} alt="tasty food" />
              </div>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs text-indigo-700 font-medium ">
                    Ayam
                  </div>
                  <h2 className="flex-auto text-lg font-medium">AddOns Demo</h2>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <button
                    className="mb-2 md:mb-0 bg-indigo-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-indigo-500"
                    type="sumbit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-100 shadow-md  rounded-3xl p-4">
            <div className="flex-none lg:flex">
              <div className="h-full w-full mb-3">
                <img src={hero} alt="tasty food" />
              </div>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs text-indigo-700 font-medium ">
                    Ayam
                  </div>
                  <h2 className="flex-auto text-lg font-medium">AddOns Demo</h2>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <button
                    className="mb-2 md:mb-0 bg-indigo-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-indigo-500"
                    type="sumbit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-100 shadow-md  rounded-3xl p-4">
            <div className="flex-none lg:flex">
              <div className="h-full w-full mb-3">
                <img src={hero} alt="tasty food" />
              </div>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs text-indigo-700 font-medium ">
                    Ayam
                  </div>
                  <h2 className="flex-auto text-lg font-medium">AddOns Demo</h2>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <button
                    className="mb-2 md:mb-0 bg-indigo-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-indigo-500"
                    type="sumbit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-100 shadow-md  rounded-3xl p-4">
            <div className="flex-none lg:flex">
              <div className="h-full w-full mb-3">
                <img src={hero} alt="tasty food" />
              </div>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs text-indigo-700 font-medium ">
                    Ayam
                  </div>
                  <h2 className="flex-auto text-lg font-medium">AddOns Demo</h2>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <button
                    className="mb-2 md:mb-0 bg-indigo-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-indigo-500"
                    type="sumbit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-100 shadow-md  rounded-3xl p-4">
            <div className="flex-none lg:flex">
              <div className="h-full w-full mb-3">
                <img src={hero} alt="tasty food" />
              </div>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs text-indigo-700 font-medium ">
                    Ayam
                  </div>
                  <h2 className="flex-auto text-lg font-medium">AddOns Demo</h2>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <button
                    className="mb-2 md:mb-0 bg-indigo-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-indigo-500"
                    type="sumbit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-100 shadow-md  rounded-3xl p-4">
            <div className="flex-none lg:flex">
              <div className="h-full w-full mb-3">
                <img src={hero} alt="tasty food" />
              </div>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs text-indigo-700 font-medium ">
                    Ayam
                  </div>
                  <h2 className="flex-auto text-lg font-medium">AddOns Demo</h2>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <button
                    className="mb-2 md:mb-0 bg-indigo-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-indigo-500"
                    type="sumbit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-100 shadow-md  rounded-3xl p-4">
            <div className="flex-none lg:flex">
              <div className="h-full w-full mb-3">
                <img src={hero} alt="tasty food" />
              </div>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs text-indigo-700 font-medium ">
                    Ayam
                  </div>
                  <h2 className="flex-auto text-lg font-medium">AddOns Demo</h2>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <button
                    className="mb-2 md:mb-0 bg-indigo-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-indigo-500"
                    type="sumbit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**===CARD END */}
        </div>
        {/*===END OF ADD ON WRAPPER */}
      </div>
    </div>
  );
}
