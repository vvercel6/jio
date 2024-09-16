import React from "react";

function Heder() {
  return (
    <div>
      {/* RESPONSIVE NAVIGATION BAR STARTS*/}
      <nav className="bg-blue-700 px-4  py-3 fixed z-20 w-full">
        <div className="flex justify-between lg:justify-around">
          <div className="flex items-center space-x- lg:space-x-10 justify-center ">
            <svg
              onclick="icons()"
              className="svg-inline--fa fa-bars text-white text-xl lg:hidden cursor-pointer hover:bg-blue-800 p-3 px-3.5 rounded-full"
              id="icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
              />
            </svg>
            {/* <i onclick="icons()" class="fa-solid fa-bars text-white text-xl lg:hidden cursor-pointer hover:bg-blue-800 p-3 px-3.5 rounded-full " id="icon"></i> Font Awesome fontawesome.com */}
            <img
              src="https://1000logos.net/wp-content/uploads/2021/07/Jio-Logo-768x483.png"
              alt="error loading image"
              title="jio"
              style={{ width: 80 }}
              className=" text-white  mr-7"
            />
            <div className="hidden lg:block">
              <ul className="flex space-x-12 text-white font-bold">
                <li className="hover:text-blue-300">
                  <a href="#">Mobile</a>
                </li>
                <li className="hover:text-blue-300">
                  <a href="#">Fibre</a>
                </li>
                <li className="hover:text-blue-300">
                  <a href="#">Business</a>
                </li>
                <li className="hover:text-blue-300">
                  <a href="#">Shops</a>
                </li>
                <li className="hover:text-blue-300">
                  <a href="#">Apps</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 items-center font-[helvetica] ">
            <form>
              <div className="flex items-center">
                <svg
                  className="svg-inline--fa fa-magnifying-glass text-white bg-blue-900 p-3 rounded-l-3xl"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="magnifying-glass"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                  />
                </svg>
                {/* <i class="fa-solid fa-magnifying-glass text-white bg-blue-900 p-3 rounded-l-3xl"></i> Font Awesome fontawesome.com */}
                <input
                  type="text"
                  autoComplete=""
                  name="search"
                  className="bg-blue-900 text-white  rounded-r-3xl font-bold focus:outline-none dd-11x"
                  placeholder="Search"
                  style={{
                    padding: "8.2px !important",
                    border: "1px solid #0c2d8b",
                  }}
                />
              </div>
            </form>
            <a href="#">
              <svg
                className="svg-inline--fa fa-message hidden lg:block text-white rounded-full text-xl p-3 lg:hover:bg-blue-900"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="message"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"
                />
              </svg>
              {/* <i class="fa-solid fa-message hidden lg:block text-white rounded-full text-xl p-3 lg:hover:bg-blue-900"></i> Font Awesome fontawesome.com */}
            </a>
            <a href="#">
              <svg
                className="svg-inline--fa fa-cart-shopping hidden lg:block text-white rounded-full text-xl p-3 lg:hover:bg-blue-900"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cart-shopping"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                />
              </svg>
              {/* <i class="fa-solid fa-cart-shopping hidden lg:block text-white rounded-full text-xl p-3 lg:hover:bg-blue-900 "></i> Font Awesome fontawesome.com */}
            </a>
            <a href="#">
              <svg
                className="svg-inline--fa fa-user bg-white text-blue-700 rounded-full text-md p-3"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                />
              </svg>
              {/* <i class="fa-solid fa-user bg-white text-blue-700 rounded-full text-md p-3"></i> Font Awesome fontawesome.com */}
            </a>
            <button className="dark-button text-slate-300">
              {" "}
              <svg
                className="svg-inline--fa fa-moon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="moon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"
                />
              </svg>
              {/* <i class="fa-solid fa-moon"></i> Font Awesome fontawesome.com */}
            </button>
            <button className="light-button pl-4" hidden="hidden">
              {" "}
              <svg
                className="svg-inline--fa fa-sun"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sun"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"
                />
              </svg>
              {/* <i class="fa-solid fa-sun"></i> Font Awesome fontawesome.com */}
            </button>
          </div>
        </div>
      </nav>
      {/* RESPONSIVE NAVBAR ENDS */}
      {/* HAMBURGER MENU STARTS */}
      <div className="w-3/4 px-5 h-screen overflow-y-auto hidden res fixed top-[4.2rem] z-10 bg-white shadow-lg shadow-black ham ">
        <div className="border-b-2 border-gray-300 border-solid font-bold py-3 items-center flex justify-between">
          Mobile{" "}
          <svg
            onclick="iconsyo1(this)"
            className="svg-inline--fa fa-plus text-2xl text-blue-500 cursor-pointer hover:bg-purple-100 px-2.5 py-2 rounded-full"
            id="i1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
            />
          </svg>
          {/* <i onclick="iconsyo1(this)" class="fa-solid fa-plus text-2xl text-blue-500  cursor-pointer hover:bg-purple-100 px-2.5 py-2 rounded-full" id="i1"></i> Font Awesome fontawesome.com */}
        </div>
        <div className="px-8 w hidden menu">
          <div className="py-3 font-sans font-semibold border-b-2 border-gray-300 border-solid">
            Discover
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Prepaid
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            postpaid
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Intrnational Services
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Get Jio Sim
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Recharge
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Pay Bills
          </div>
        </div>
        <div className="border-b-2 border-gray-300 border-solid font-bold py-3 flex justify-between items-center">
          Jiofibre{" "}
          <svg
            onclick="iconsyo2(this)"
            className="svg-inline--fa fa-plus text-2xl text-blue-500 cursor-pointer hover:bg-purple-100 px-2.5 py-2 rounded-full"
            id="i2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
            />
          </svg>
          {/* <i onclick="iconsyo2(this)" class="fa-solid fa-plus text-2xl text-blue-500  cursor-pointer  hover:bg-purple-100 px-2.5 py-2 rounded-full" id="i2"></i> Font Awesome fontawesome.com */}
        </div>
        <div className="px-8 r hidden menu ">
          <div className="py-3 font-sans font-semibold border-b-2 border-gray-300 border-solid">
            Discover
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Prepaid
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            postpaid
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Intrnational Services
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Get Jio Sim
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Recharge
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Pay Bills
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Services
          </div>
        </div>
        <div className="border-b-2 border-gray-300 border-solid font-bold py-3 flex justify-between items-center">
          Business{" "}
          <svg
            onclick="iconsyo3(this)"
            className="svg-inline--fa fa-plus text-2xl text-blue-500 cursor-pointer hover:bg-purple-100 px-2.5 py-2 rounded-full"
            id="i3"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
            />
          </svg>
          {/* <i onclick="iconsyo3(this)" class="fa-solid fa-plus text-2xl text-blue-500  cursor-pointer  hover:bg-purple-100 px-2.5 py-2 rounded-full" id="i3"></i> Font Awesome fontawesome.com */}
        </div>
        <div className="px-8 y hidden menu ">
          <div className="py-3 font-sans font-semibold border-b-2 border-gray-300 border-solid">
            Discover
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-5 font-sans font-semibold">
            Jio Business Solution{" "}
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Plans
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Service
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Enquire
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Resources
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Contact Us
          </div>
        </div>
        <div className="border-b-2 border-gray-300 border-solid font-bold py-3 flex justify-between items-center">
          Shops
          <svg
            onclick="iconsyo4(this)"
            className="svg-inline--fa fa-plus text-2xl text-blue-500 cursor-pointer hover:bg-purple-100 px-2.5 py-2 rounded-full"
            id="i4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
            />
          </svg>
          {/* <i onclick="iconsyo4(this)" class="fa-solid fa-plus text-2xl text-blue-500 cursor-pointer  hover:bg-purple-100 px-2.5 py-2 rounded-full" id="i4"></i> Font Awesome fontawesome.com */}
        </div>
        <div className="px-8 i hidden menu ">
          <div className="py-3 font-sans font-semibold border-b-2 border-gray-300 border-solid">
            Smart Phone
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Smart Devices{" "}
          </div>
          <div className="border-b-2 border-gray-300 border-solid py-3 font-sans font-semibold">
            Accessories
          </div>
        </div>
        <div className="border-b-2 border-gray-300 border-solid font-bold py-3 flex justify-between">
          Apps
        </div>
        <div className="border-b-2 border-gray-300 border-solid font-bold py-3 flex justify-between">
          Support
        </div>
      </div>
      {/* HAMBURGER MENU ENDS */}
      {/* SLIDER STARTS */}
    </div>
  );
}

export default Heder;
