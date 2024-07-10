// import React from 'react'

import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="p-5 text-center font-bold text-xl bg-[#4472c4] text-white">
        Aishwarya Patni Directory App
      </h3>
      <div className="flex  gap-6 m-6">
        <button
          onClick={() => navigate("/")}
          className="p-2 bg-[#4472c4]    text-center text-white"
        >
          Add New Person
        </button>
        <button className="p-2 bg-[#4472c4]    text-center text-white" onClick={() => navigate("/retrieve") }>
          Retrieve Information
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
