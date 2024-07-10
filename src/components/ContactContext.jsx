import React, { createContext, useEffect, useState } from "react";

export const usersContactContext = createContext();

const ContactContext = ({ children }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("AishwaryaContact")) || []
  );

  useEffect(() => {
    localStorage.setItem("AishwaryaContact", JSON.stringify(data));
  }, [data]);

  const handleData = (Name, DOB, adhar, phone, age) => {
    let arr = [...data];
    let obj = {
      Name: Name,
      "Date of Birth": DOB,
      "Aadhar Number": adhar,
      "Mobile Number": phone,
      Age: age,
    };

    arr.push(obj);
    setData(arr);
  };

  const deleteData = (adhar) => {
    let arr = [...data];
    arr = arr.filter((ele) => ele["Aadhar Number"] !== adhar);
    setData(arr);
  };

  return (
    <usersContactContext.Provider value={{ data, handleData, deleteData }}>
      {children}
    </usersContactContext.Provider>
  );
};

export default ContactContext;
