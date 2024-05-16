import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const Signupform = ({ setIsLogin }) => {
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function changeHandle(event) {
        setFormData((preData) => (
            {
                ...preData,
                [event.target.name]: event.target.value
            }
        ))

    }
    function submitHandle(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("password do not match");
            return ;
        }
        setIsLogin(true);
        toast.success("Account created");
        const accountData={
            ...formData
        }
        const finalData={
            ...accountData,
            accountType
        }
        console.log("printing finalData data of yours")
        console.log(finalData);
        navigate("/dashboard")

    }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setConirmPassword] = useState(false)
    const [accountType, setAccountType]=useState("student")

    return (
        <div>
            {/* student-Instructor tab */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType==="student" ?
                 "bg-richblack-900 text-richblack-5":
                 "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transtion-all duration-200`}
                 onClick={()=>setAccountType("student")}>
                    Student
                </button>
                <button className={`${accountType==="instructor" ?
                 "bg-richblack-900 text-richblack-5":
                 "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transtion-all duration-200`}
                 onClick={()=>setAccountType("instructor")}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandle}>
                {/* firstName lastName */}
                <div className='flex gap-x-4 mt-[20px] '>
                    <lable className="w-full">
                        <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="text"
                            name='firstName'
                            onChange={changeHandle}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className="bg-richblack-800 rounded-[0.5rem] text-rickblack-5 w-full p-[12px] border-b "
                        />
                    </lable>
                    <lable className="w-full">
                        <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="text"
                            name='lastName'
                            onChange={changeHandle}
                            placeholder='Enter last Name'
                            value={formData.lastName}
                            className="bg-richblack-800 rounded-[0.5rem] text-rickblack-5 w-full p-[12px] border-b "
                        />
                    </lable>

                </div>
                {/* email id */}
                <div className='mt-[20px]'>
                    <lable className="w-full ">
                        <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="email"
                            name='email'
                            onChange={changeHandle}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className="bg-richblack-800 rounded-[0.5rem] text-rickblack-5 w-full p-[12px]  "
                        />
                    </lable>
                </div>
               
                {/* password */}
                <div className=' w-full flex gap-x-4 mt-[20px]'>
                    <lable className=" w-full relative">
                        <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandle}
                            placeholder='Enter password'
                            value={formData.password}
                            className="bg-richblack-800 rounded-[0.5rem] text-rickblack-5 w-full p-[12px]  "
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </lable>
                    <lable className=" w-full relative">
                        <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">confirm Password<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name='confirmPassword'
                            onChange={changeHandle}
                            placeholder='confirm password'
                            value={formData.confirmPassword}
                            className="bg-richblack-800 rounded-[0.5rem] text-rickblack-5 w-full p-[12px] border-b "
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setConirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? <AiOutlineEyeInvisible   fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye  fontSize={24} fill="#AFB2BF" />}
                        </span>
                    </lable>
                </div>
                {/* create account */}
                <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6" >
                    create Account
                </button>
            </form>
        </div>
    )
}

export default Signupform