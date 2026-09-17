import React from 'react'
import UserCard from '../../components/userCard/UserCard'
import './User.css'


export default function User() {
  return (
    <div className='user-grid'>
      <div>
        <UserCard/>
      </div>
    </div>
  )
}
