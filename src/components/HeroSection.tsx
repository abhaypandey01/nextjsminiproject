import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { BorderButton } from './BorderButton'

function HeroSection() {
  return (
    <div
    className='h-screen md:h-[40rem] w-full rounded-sm flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 dark:bg-dot-white/[0.07]'
    >
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
        <div className='w-full text-center z-10 relative p-4'>
            <h1
            className='pt-20 md:pt-0 font-bold text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
            >Here To Provide Solutions</h1>
            <p
            className='mt-4 font-normal text-base md:text-lg max-w-lg mx-auto text-neutral-400'
            >At IT Service Consultancy, we are committed to empowering businesses with cutting-edge technology solutions tailored to their unique needs. As a full-service IT consultancy firm, we specialize in web development, SEO optimization, and a broad range of IT consulting services.</p>
        </div>
        <div className='mt-5'>
            <Link href={'/services'}><BorderButton /></Link>
        </div>
    </div>
  )
}

export default HeroSection