import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex flex-col items-center justify-center w-screen'>
        <ul className='mt-4 p-2 flex flex-row justify-around items-center text-white w-[50rem] border-2 border-solid border-slate-100 rounded-md'>
            <li><a className='font-bold hover:text-yellow-500 hover:animate-pulse' href="#">Home</a></li>
            <li><a className='font-bold hover:text-emerald-500 hover:animate-pulse' href="#">Contact</a></li>
            <li><a className='font-bold hover:text-sky-600 hover:animate-pulse' href="#">About Us</a></li>
        </ul>
    </nav>
  )
}
// background-image: linear-gradient( 86.3deg,  rgba(0,119,182,1) 3.6%, rgba(8,24,68,1) 87.6% );

// background-image: linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );