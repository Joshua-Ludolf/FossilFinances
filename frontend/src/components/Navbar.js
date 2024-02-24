import React from 'react'
import { HiHome } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";



function Navbar() {
  return (
    <>
        <div className='  rounded-t-xl fixed bottom-[0%] bg-[#A8947C] w-full h-32 flex row  justify-around items-center'>
          <div className='flex-col  align-middle'>
            <HiOutlineMenuAlt2 size={60} className='h-15 w-[100%]' />            
            <h1>Transactions</h1>
          </div>
          <div className='flex-col  align-middle'>
            <HiHome size={60} className='h-15 w-[100%]' />            
            <h1>Home</h1>
          </div>
          <div className='flex-col  align-middle'>
            <HiOutlineInformationCircle  size={60} className='h-15 w-[100%]' />            
            <h1>Knowledge Base</h1>
          </div>

        </div>
    </>
  )
}

export default Navbar