import React from 'react'
import love from '../assets/love.jpeg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={love} alt='akhi'></img>
        <p id='user-desc'>{props.desc}</p>

    </div>
  )
}

export default UserCard