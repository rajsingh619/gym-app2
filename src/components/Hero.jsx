import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg: text-7xl'>Fit<span className='text-blue-400'>&Healthy</span></h1>
      </div>
       
        <p className='text-sm md:text-base font-light'>Keep your fitness goals on track with our ultimate workout tracker app! <span className='text-blue-400 font-medium'>Effortlessly</span> log your exercises, monitor progress, and stay motivated as you conquer every rep and set. It's time to <span className='text-blue-400 font-medium'>take control</span> of your workouts and see real results—track your way to success!</p>
        <button className='px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueshadow duration-300' >
          <p>Scroll down and get FIT</p>
        </button>
    </div>
  )
}
