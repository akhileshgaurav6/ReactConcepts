import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/dashboard')
    }
  return (
    <div>
        About Page
        <button onClick={handleClick}>
            Move to dashboard page
        </button>
    </div>
  )
}

export default About