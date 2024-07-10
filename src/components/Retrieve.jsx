import { useContext } from "react";
import { useState } from "react";
import { usersContactContext } from "./ContactContext";

const Retrieve = () => {
    const { data } = useContext(usersContactContext);
    const [input, setInput] = useState("");
    const [adVal, setAdval] = useState([]);

    const handleSearch = () => {
        if(input.length === 12){
          let arr = [...data];
          arr = arr.filter((ele) => {
            return ele["Aadhar Number"] === input;
          })
    
          setAdval(arr)
        }
      }

  return (
    <div className=" border p-2 md:p-0 md:mx-16 border-black min-h-[500px]">
      <h1 className="border p-2 md:mb-6 border-slate-400 max-w-fit">Retrieve Information</h1>
      <div className="flex flex-col md:flex-row gap-2 md:mx-8">
        <input className="p-2 md:min-w-[500px]" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="bg-[#4472c4] text-white px-10 p-2" onClick={() => handleSearch()}>FIND</button>
      </div>

      {adVal.length === 0 ? <p className="text-center font-medium text-3xl py-8">No Data</p> : <div className=" mt-2 p-2 border border-slate-400">
        <p>Name : {adVal[0].Name}</p>
        <p>DOB : {adVal[0]["Date of Birth"]}</p>
        <p>Aadhar: {adVal[0]["Aadhar Number"]}</p>
        <p>Mobile No : {adVal[0]["Mobile Number"]}</p>
        <p>Age : {adVal[0].Age}</p>
      </div>}
    </div>
  )
}

export default Retrieve
