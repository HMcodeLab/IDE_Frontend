import React, { useEffect, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import CodeEditor from "./CodeEditor";
import { BASE_URL } from "./api";

const CodinPateform = () => {
  const [allquestions, setallquestions] = useState([])
  const [currentindex, setcurrentindex] = useState(0)
  const [testcaseindex, settestcaseindex] = useState(0)
  const [output, setoutput] = useState([])
  const [compiledcode, setcompiledcode] = useState('')
  
  useEffect(() => {
async function Fetchdata() {
  try {
    const data=await fetch(BASE_URL+'/api/allQues')
    const response=await data.json()
    setallquestions(response)
    
  } catch (error) {
    
  }
}
Fetchdata()
  }, [])
  async function Runsampletestcases(){
    try {
      const tempdata=await fetch(BASE_URL+'/api/runAllTestCaseForJS',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          Id:allquestions[currentindex]?.Id,
          testCase:1,
          jsCode:compiledcode
        })
      })
      const response=await tempdata.json()
      console.log(response);
      setoutput(response?.results)
      
    } catch (error) {
      
    }
  }
  function Changequestion(ind){
    setcurrentindex(ind)
    setoutput([])
  }
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
                    {allquestions[currentindex]?.Ques}
                  </li>
                  <li>Print the decimal value of each fraction.</li>
                </ol>
{
  allquestions[currentindex]?.sample_test_cases?.map((item,index)=>{
    return(<>
    <h2 className="font-semibold mt-3">Example: {index+1}</h2>
                <ol>
                  <li>Input: {item?.input}</li>
                  <li>Output: {item?.expected_output}</li>
                  {/* <li>
                    Explanation: The sum of elements from the 2nd position to
                    the 4th position is 12.
                  </li> */}
                </ol>             
    </>
    )
  })
}

              </div>
            </div>
          </div>

          {/* Right Section: 9 Columns */}
          <div className="col-span-12 lg:col-span-8">
            <div className="border border-black  rounded-xl">
      

              <div className="flex flex-row basis-1/2grid  pb-0">
               
                <CodeEditor Runsampletestcases={Runsampletestcases} setcompiledcode={setcompiledcode} codesnippet={allquestions[currentindex]?.initial_user_func?.javascript?.initial_code}/>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 my-6 bg-white">
              <div className="border border-black pt-2 rounded-xl">
                <h3 className="text-md font-popping font-semibold p-2">
                  Test Cases
                </h3>

                <div>
                  <div className="  align-iteam pb-0 block w-full h-[168px] text-sm text-white bg-black  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-none outline-none  rounded-b-lg">
                   {allquestions[currentindex]?.sample_test_cases?.map((item,index)=>{
                    return(<>
                     <button onClick={()=>settestcaseindex(index)} className={` ml-4 mt-2 hover:bg-sky-100 hover:text-black p-2 rounded ${testcaseindex==index ? 'bg-green-500 text-white':''}`}>
                      case {index+1}
                    </button>
                  
                    </>)
                   })
        }
                   
                   <p className="mt-3 ml-3">input: {allquestions[currentindex]?.sample_test_cases[testcaseindex]?.input}</p>
                   <p className=" mt-4 ml-3">output: {allquestions[currentindex]?.sample_test_cases[testcaseindex]?.expected_output}</p>
                    
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
                <div className="block w-full h-[160px] text-sm text-white bg-black  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-none outline-none  rounded-b-lg overflow-y-auto">
                  <p className="mt-2 ml-2">output :</p>
                  {
                    output?.map((item,index)=>{
                      return(<>
                      <div className="mt-3">TestCase {index+1}</div>
                      <div>Expected output : {item?.expectedOutput}</div>
                      <div>Actual output : {item?.actualOutput}</div>
                      </>)
                    })
                  }
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col justify-end items-end">
              <button
                type="button"
                className="text-white font-pop text-lg bg-[#1DBF73] rounded-full p-3 w-[120px]"
              >
                Submit
              </button>
            </div> */}
          </div>
        </div>

        <div className="flex justify-center gap-1 text-xs font-medium mb-10">
         
{
  allquestions?.map((item,index)=>{
    return(<>
    <div>
            <p
            onClick={()=>Changequestion(index)}
              className={`cursor-pointer block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 ${currentindex==index ? 'bg-green-500 text-white':''}`}
            >
              {index+1}
            </p>
          </div>
    </>)
  })
}
          

         

      
        </div>
      </div>
    </>
  );
};

export default CodinPateform;
