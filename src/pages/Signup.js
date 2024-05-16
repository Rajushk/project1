import React from 'react'
import signupImg from "../assets/signup.png"
import Templet from '../component/Templet'

const Signup = ({setIsLogin}) => {
  return (
    <Templet
    title="join the millon learning to code "
    desc1='Build skill for today , tomorrow , and beyond'
    desc2="Education to future-proof your career."
    image={signupImg}
    formtype='signup'
    setIsLogin={setIsLogin}
    />
  )
}

export default Signup