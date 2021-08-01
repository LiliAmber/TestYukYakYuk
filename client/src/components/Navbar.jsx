import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header class="header my-8">
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div class="header-wrapper flex items-center justify-between">
            <div class="header-logo">
              <span class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                <svg
                  class="fill-current text-gray-800 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                </svg>
                TestYukYakYuk
              </span>
            </div>
            <navbar class="navbar hidden md:block">
              <ul class="flex space-x-8 text-sm font-semibold">
                <li>
                  <Link to="/" class="active border-b-2 border-orange-500 pb-2">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/login"
                    class="cta bg-indigo-500 hover:bg-indigo-600 px-3 py-2 rounded text-white font-normal"
                  >
                    Log In
                  </Link>
                </li>
              </ul>
            </navbar>
          </div>
        </div>
      </header>
    </>
  );
}
