import React from 'react'


function Hero() {
  return (
    <main className='flex flex-col items-center justify-center w-1/2 p-4 text-white mt-36'>
        <div className='flex flex-col justify-around h-[12rem]'>
        <h1 className='text-6xl font-bold cursor-pointer hover:animate-bounce'>AstrX</h1>
        <p className='font-bold'>Learn more about the universe!</p>
        <button className='p-2 rounded-full bg-my-middle-color'>Get Started</button>

        </div>

    </main>
  )
}

export default Hero