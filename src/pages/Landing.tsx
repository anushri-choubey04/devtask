import React, { FC } from "react";
import { Link } from "react-router-dom";


const Landing: FC = () => {
  return (
    <div className="h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100">
      

      <div className="flex flex-col absolute bottom-5 z-10 gap-2">
        <h2 className="font-bold text-2xl">Welcome to PopX</h2>
        <p className="w-[75%] text-gray-400 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="buttons w-[95%] flex flex-col gap-3 py-4">
          <Link
            to="/signup"
            className="bg-[#7B3FF6] hover:bg-[#5b15e8] text-white font-semibold text-center py-3 rounded-lg cursor-pointer"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="bg-[#D0A8FF] hover:bg-[#ac70f0] font-semibold text-center py-3 rounded-lg cursor-pointer"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
