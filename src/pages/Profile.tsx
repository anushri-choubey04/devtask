import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

interface User {
  fullName: string;
  email: string;
  profilePicture?: ImageData;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = {
          ...user,
          profilePicture: reader.result as string,
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100">
      <div className="header flex justify-between items-center">
        <h2 className="font-bold text-xl">Account Settings</h2>
        <Link to="/" className="cursor-pointer">
          <MdHome size={23} />
        </Link>
      </div>

      {user ? (
        <div className="info flex flex-col gap-3 my-8">
          <div className=" items-center gap-4">
            <div className="relative w-20 h-20 rounded-full  relative">
              <img
                src={
                  typeof user.profilePicture === "string"
                    ? user.profilePicture
                    : "https://via.placeholder.com/80"
                }
                className="h-20 w-20 object-cover rounded-full border"
              />
              <label className="absolute right-0 bottom-0 h-7 w-7 bg-[#7B3FF6] text-white rounded-full flex items-center justify-center cursor-pointer">
                <FaCamera size={14} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <div className=" info flex-col">
              <span className="font-semibold text-lg">{user.fullName}</span>
              <span className="text-gray-700 font-semibold hover:underline ">
                {user.email}
              </span>
            </div>
          </div>

          <p className="text-gray-500 font-semibold pt-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam
            Erat, Sed Diam
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
