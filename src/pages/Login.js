import React from 'react'
import loginImg from "../assets/login.png"
import Templet from "../component/Templet"



const Login = ({ setIsLogin }) => {
  return (
    <Templet
      title='Welcome back'
      desc1='Build skill for today , tomorrow , and beyond'
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype='login'
      setIsLogin={setIsLogin}
    />
  )
}

export default Login