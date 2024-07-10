import { useContext, useEffect, useState } from "react";
// import { contactContext } from "../main";
import { usersContactContext } from "./ContactContext";

const AddPerson = () => {
  const { data, handleData, deleteData } = useContext(usersContactContext);
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [mob, setMob] = useState();
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = (dob) => {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return age;
    };

    if (calculateAge(date) >= 0) {
      setAge(calculateAge(date));
    }
  }, [date]);

  const handleEmpty = () => {
    setName("");
    setDate("");
    setAadhar("");
    setMob("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (aadhar.length === 12 && mob.length === 10 && name.trim("") && date) {
      handleData(name, date, aadhar, mob, age);
      handleEmpty();
      setShowInput(false);
    }
  };

  return (
    <div className="border md:mx-16 border-black min-h-[550px] md:min-h-[450px] relative">
      <h1 className=" border border-slate-400 max-w-fit py-3">Add New Person</h1>
      <div className="md:px-10">
        <div className="w-full text-center mt-2 p-2 md:m-2 ">
          {/* <thead> */}
          <div className=" bg-[#4472c4] text-white flex justify-evenly w-full parent">
            <p className="border border-black">Name</p>
            <p className="border border-black">Date of Birth</p>
            <p className="border border-black">Aadhar Number</p>
            <p className="border border-black">Mobile Number</p>
            <p className="border border-black">Age</p>
            <p className="border border-black">Actions</p>
          </div>
          {/* </thead> */}
          {/* <tbody> */}
          <div>
            {data.map((ele) => (
              <div
                key={ele["Aadhar Number"]}
                className="parent border flex w-full justify-evenly border-black"
              >
                <p className="border border-black">{ele["Name"]}</p>
                <p className="border border-black">{ele["Date of Birth"]}</p>
                <p className="border border-black">{ele["Aadhar Number"]}</p>
                <p className="border border-black">{ele["Mobile Number"]}</p>
                <p className="border border-black">{ele["Age"]}</p>
                <p className="border border-black">
                  <button className="text-[#4472c4]" onClick={() => deleteData(ele["Aadhar Number"])}>
                    Delete
                  </button>
                </p>
              </div>
            ))}
          </div>
          {/* </tbody> */}
        </div>

            <div className="p-2">
        {showInput && (
          <div className="bg-[#4472c4] border mb-4   border-black mt-8">
            <h2 className="text-white text-center p-2">
              Fill Below Form for New Entry
            </h2>
            <div onSubmit={handleSubmit} className=" gap-4 md:flex justify-center md:p-0 p-4 ">
              <div>
                {/* <label>Name: </label> */}
                <input
                className="w-full"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                />
              </div>
              <div>
                {/* <label>Date of Birth: </label> */}
                <input
                className="w-full"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                {/* <label>Aadhar Number: </label> */}
                <input
                className="w-full"
                  type="text"
                  required
                  value={aadhar}
                  onChange={(e) => {
                    if(e.target.value.length <= 12){setAadhar(e.target.value)}
                  }}
                  placeholder="Enter Aadhar Number"
                />
              </div>
              <div>
                {/* <label>Mobile Number: </label> */}
                <input
                className="w-full"
                  type="text"
                  required
                  value={mob}
                  onChange={(e) => {
                    if(e.target.value.length <= 10){setMob(e.target.value)}
                  }}
                  placeholder="Enter Mobile Number"
                />
              </div>

              <div>
                {/* <label>Age: </label> */}
                <input
                
                className="bg-white w-full"
                  type="text"
                  disabled
                  required
                  value={age}
                //   placeholder="Enter Mobile Number"
                />
              </div>

              <div className="flex justify-evenly border md:min-w-[200px] bg-white text-[#0a63fd]">
                <button onClick={(e) => handleSubmit(e)}>Save</button>
                <button
                  type="button"
                  onClick={() => {
                    setShowInput(false), handleEmpty();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        </div>

        <button className="absolute bottom- right-2 md:right-6 md:bottom-4 bg-[#4472c4] px-12 py-2 text-white" onClick={() => setShowInput(true)}>Add</button>
      </div>
    </div>
  );
};

export default AddPerson;
