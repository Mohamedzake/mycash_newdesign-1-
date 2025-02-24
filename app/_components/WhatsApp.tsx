import Link from 'next/link';
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsApp = () => {
  return (
    <Link href="https://wa.me/966920031014" className='fixed bottom-4 right-4 text-4xl duration-75 text-white bg-primary-green z-50 cursor-pointer py-3 px-3 rounded-full'>
        <IoLogoWhatsapp />
    </Link>
  )
}

export default WhatsApp