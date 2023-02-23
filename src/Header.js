import React from 'react'
import logo from './Images/logo.svg'

const Header = () => {
  return (
    <div className='flex space-x-2  justify-center bg-yellow-400 mb-10 sticky'>
      <img src={logo} alt="" className='border-2 border-yellow-200 rounded-xl mr-2' />
      <h1 className='self-center text-white text-lg font-bold tracking-wider	'>Keep your notes</h1>
    </div>
  )
}

export default Header