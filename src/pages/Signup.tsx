import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


 export type signupdata={
  name:string,
  phonenumber:number|string,
  email:string,
  password:string,
  companyname?:string,
  agency:boolean
}


export let mydata={}
 export interface SignupData {
  name: string;
  phonenumber: string;
  email: string;
  password: string;
  companyname: string;
  agency: boolean;
}

const Signup = () => {
  const [data, setData] = useState<SignupData>({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
    companyname: "",
    agency: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mydata={
      ...data}
    // Store user data (Consider using localStorage or API call)
    localStorage.setItem("user", JSON.stringify(data));

    // Reset form
    setData({
      name: "",
      phonenumber: "",
      email: "",
      password: "",
      companyname: "",
      agency: false,
    });

    navigate("/login");
  };

  return (
    <div className="h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100">
      <h2 className="font-bold text-3xl text-black-600">Create Your PopX Account</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-5">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-purple-600">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter full name"
            value={data.name}
            onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phonenumber" className="text-sm font-medium text-purple-600">
            Phone Number
          </label>
          <input
            type="tel"
            id="phonenumber"
            placeholder="Enter phone number"
            pattern="^[0-9-+\s()]*$"
            value={data.phonenumber}
            onChange={(e) => setData((prev) => ({ ...prev, phonenumber: e.target.value }))}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-purple-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            value={data.email}
            onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-purple-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={data.password}
            onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col">
          <label htmlFor="companyname" className="text-sm font-medium text-purple-600">
            Company Name
          </label>
          <input
            type="text"
            id="companyname"
            placeholder="Enter company name"
            value={data.companyname}
            onChange={(e) => setData((prev) => ({ ...prev, companyname: e.target.value }))}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Agency Selection */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-purple-600">Are you an Agency?</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                checked={data.agency === true}
                onChange={() => setData((prev) => ({ ...prev, agency: true }))}
              />
              Yes
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                checked={data.agency === false}
                onChange={() => setData((prev) => ({ ...prev, agency: false }))}
              />
              No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#7B3FF6] my-3 w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
