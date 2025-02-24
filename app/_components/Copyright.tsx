import Link from 'next/link'
import React from 'react'

const Copyright = () => {
  return (
    <div className='container m-auto text-black flex flex-col-reverse lg:flex-row lg:justify-between lg:w-[90%] justify-evenly items-center mx-auto h-20 '>
      <div className='text-sm text-[#5A6475]'> 2025 My Cash Inc&copy; All Rights Reserved</div>

      <span className='border-[1.2px] border-[#E1E1E1] w-full lg:hidden'></span>

      <div className='flex flex-row gap-x-4 text-base'>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms Of Service</Link>
      </div >

    </div>
  )
}

export default Copyright