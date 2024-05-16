import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
// import Login from '../pages/Login';
import toast from "react-hot-toast"

const Loginform = ({setIsLogin}) => {
    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    function changeHandle(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }
    
    function submithandle(event){
        event.preventDefault()
        setIsLogin(true);
        toast.success("login in")
        navigate("/dashboard")

        const accountData={
            ...formData
        }
        console.log("printing  login finalData data of yours")
        console.log(accountData);
    }

    return (
        <form onSubmit={submithandle} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandle}
                    placeholder="Enter email Id"
                    name="email"
                    className="bg-richblack-800 rounded-[0.5rem] text-rickblack-5 w-full p-[12px] border-b "
                />
                {/* </input> */}
            </label>
            <label className="w-full relative">
                <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]" >
                    Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={changeHandle}
                    placeholder="Enter password "
                    name="password"
                    className="bg-richblack-800 rounded-[0.5rem] text-rickblack-5 w-full p-[12px] border-b "
                />
                <span className="absolute right-3 top-[38px] cursor-pointer"
                 onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
                <Link to="#">
                    <p className="text-x5 mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>
            </label>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">sign In</button>
        </form>
    );
};

export default Loginform;
