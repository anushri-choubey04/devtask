import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {mydata} from "./Signup";

 export interface review {
  name?: string;
  phonenumber?: string;
  email?: string;
  password?: string;
  companyname?: string;
  agency?: boolean;
}

export type logindata={
  email:string,
  password:string
}

const Login = () => {
  const reviewdata:review=mydata
  const [data,setData]=useState<logindata>({
      email:"",
      password:""
  })
  const[err,setErr]=useState<string>("")
  const navigate = useNavigate();
  const handleLoginSubmit=(e:React.FormEvent)=>{
      e.preventDefault()
      console.log("review data",reviewdata)
      console.log("data",data)
      if(!data.email||!data.password){
          setErr("fill all the details")
          return
      }
      if (data.email!==reviewdata?.email || data.password!==reviewdata?.password) {
          setErr("incorrect data")
          return
      }
 
    navigate("/profile");
  };

  return (
    <div className="h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold w-[60%] text-3xl">Sign in to your PopX Account</h2>
        <p className="w-[75%] text-gray-400 font-semibold text-lg">
          Welcome back! Please enter your login details.
        </p>

        <form className="my-5" onSubmit={handleLoginSubmit}>
          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-purple-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col my-4">
            <label htmlFor="password" className="text-sm font-medium text-purple-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          {/* Error Message */}
          {err && <p className="text-red-500 text-sm">{err}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="bg-[#7B3FF6] w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
