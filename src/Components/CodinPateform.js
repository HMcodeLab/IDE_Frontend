import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const CodinPateform = () => {
  return (
    <>
      <div className="px-12">
        <h2 className="bg-[#0F2027] p-10 text-white taext mt-5 font-medium  rounded-2xl font-popping  sm:text-xl md:text-xl lg:text-xl xl:text-[23px]">
          Test Your Knowledge On Full Stack Development
        </h2>
        <div className="grid sm:grid-cols-12 gap-4 my-6 bg-white">
          {/* Left Section: 3 Columns */}
          <div className="col-span-12 lg:col-span-4 bg-white p-4">
            <h1 className="font-semibold  py-2  font-montserrat text-[18px]">
              Problem Statement
            </h1>
            <div className="flex">
              <p className="text-md font-bold pr-2">1.</p>
              <div>
                <ol>
                  <li>
                    Given an array of integers, calculate the ratios of its
                    elements that are positive, negative, and zero.
                  </li>
                  <li>Print the decimal value of each fraction.</li>
                </ol>

                <h2 className="font-semibold">Example: 1</h2>
                <ol>
                  <li>Input: N = 5, S = 12 A[] = {(1, 2, 3, 7, 5)}</li>
                  <li>Output: 2 4</li>
                  <li>
                    Explanation: The sum of elements from the 2nd position to
                    the 4th position is 12.
                  </li>
                </ol>

                <h2 className="font-semibold">Input</h2>
                <ol start="4">
                  <li>N = 5, S = 12 A[] = {(1, 2, 3, 7, 5)}</li>
                </ol>

                <h2 className="font-semibold">Output: 2 4</h2>
                <h2>
                  <b className="font-semibold">Explanation:</b>
                </h2>
                <ol start="5">
                  <li>
                    The sum of elements from the 2nd position to the 4th
                    position is 12.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Right Section: 9 Columns */}
          <div className="col-span-12 lg:col-span-8">
            <div className="border border-black pt-5 rounded-xl">
              <div className="w-full h-12 px-10 bg-white rounded-lg flex justify-between">
                <select
                  className="bg-white flex justify-center pl-3 h-8 border-2 text-[#9D9D9D] w-[120px]
               
                rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="option1">javascript</option>
                  <option value="option2">java</option>
                  <option value="option3">c++</option>
                  <option value="option3">c</option>
                  <option value="option3">c#</option>
                  <option value="option3">python</option>
                </select>
                <div className="flex flex-col justify-center pr-5">
                  <FaRegPlayCircle className="text-black h-8 mb-5  w-8 cursor-pointer" />
                </div>
              </div>

              <div className="flex flex-row basis-1/2grid  pb-0">
                <div className="flex flex-col p-2 mt-4">
                  <p>1.</p>
                  <p>2.</p>
                  <p>3.</p>
                  <p>4.</p>
                  <p>5.</p>
                  <p>6.</p>
                  <p>7.</p>
                  <p>8.</p>
                  <p>9.</p>
                </div>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full h-[50vh] text-10  text-white bg-black rounded-br-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-3 border-none"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 my-6 bg-white">
              <div className="border border-black pt-2 rounded-xl">
                <h3 className="text-md font-popping font-semibold p-2">
                  Test Cases
                </h3>

                <div>
                  <div className="  align-iteam pb-0 block w-full h-[168px] text-sm text-white bg-black  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-none outline-none  rounded-b-lg">
                    <button className=" ml-4 mt-2 hover:bg-sky-100 hover:text-black ">
                      case1
                    </button>
                    <button className="ml-4  mt-2 hover:bg-sky-100 hover:text-black ">
                      case2
                    </button>
                    <button className="ml-4  mt-2 hover:bg-sky-100 hover:text-black ">
                      case3
                    </button>
                    <p className="mt-3 ml-3">input:</p>
                    <p className=" mt-4 ml-3">output:</p>
                  </div>
                  {/* <textarea
                    id="message"
                    rows="4"
                    class="block w-full h-[192px] text-sm text-white bg-black border-none outline-none resize-none rounded-b-lg"
                    placeholder="Write your thoughts here..."
                  ></textarea> */}
                </div>
              </div>

              <div className="border border-black pt-2 rounded-xl  ">
                <h3 className="text-md font-popping font-semibold p-2">
                  Output
                </h3>
                {/* <textarea
                  id="message"
                  rows="4"
                  className="block w-full h-[216px] text-sm text-white bg-black  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-none outline-none  rounded-b-lg"
                  placeholder="Write your thoughts here..."
                ></textarea> */}
                <div className="block w-full h-[160px] text-sm text-white bg-black  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-none outline-none  rounded-b-lg">
                  <p className="mt-2 ml-2">output :</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end items-end">
              <button
                type="button"
                className="text-white font-pop text-lg bg-[#1DBF73] rounded-full p-3 w-[120px]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <ol className="flex justify-center gap-1 text-xs font-medium mb-10">
          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>

          <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default CodinPateform;
