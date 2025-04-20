'use client'
import ContactForm from '@/components/ContactForm'
import React from 'react'


function page() {
  return (
    <div className='min-h-screen pb-10 pt-32 bg-gray-900'>
      <h1 className='text-center mt-5 mb-10 text-white text-4xl font-bold'>Contact</h1>
      <ContactForm />
    </div>
  )
}

export default page