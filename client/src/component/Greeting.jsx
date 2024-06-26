import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';


const Greeting = () => {
  const {currentUser} = useContext(UserContext)
  const {username} = currentUser

  return (
    <div className='p-5'>
        <p className='text-xl'>Welcome, <span className='font-semibold md:text-2xl font-poppins capitalize'>{currentUser ? username : null}</span> </p>
        <p className='text-2xl md:text-3xl py-2 font-zeyada'>Discover fashion that defines you</p>
    </div>
  )
}

export default Greeting