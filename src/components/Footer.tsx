import React from 'react'

function Footer() {
  return (
    <footer className='py-12 bg-black text-gray-400'>
        <div className='mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
            <div>
                <h2 className='text-white text-3xl sm:text-lg md:text-2xl font-bold mb-7'>About</h2>
                <p>At IT Service Consultancy, we are committed to empowering businesses with cutting-edge technology solutions tailored to their unique needs. As a full-service IT consultancy firm, we specialize in web development, SEO optimization, and a broad range of IT consulting services.</p>
            </div>
            <div>
                <h2 className='text-white text-3xl sm:text-lg md:text-2xl font-bold mb-7'>Quick Links</h2>
                <ul className='list-none'>
                    <li><a href="#" className='hover:text-white transition-colors duration-300'></a>Home</li>
                    <li><a href="#"></a>Services</li>
                    <li><a href="#"></a>Contact</li>
                    <li><a href="#"></a>About</li>
                </ul>
            </div>
            <div>
                <h2 className='text-white text-3xl sm:text-lg md:text-2xl font-bold mb-7'>Follow Us</h2>
                <ul className='list-none'>
                    <li><a href="#"></a>Facebook</li>
                    <li><a href="#"></a>Twitter</li>
                    <li><a href="#"></a>Linkedin</li>
                </ul>
            </div>
            <div>
                <h2 className='text-white text-3xl sm:text-lg md:text-2xl font-bold mb-7'>Address</h2>
                <p>Vijay Nagar Sqr., Indore, M.P. (452006)</p>
                <p>Email: it@solution.com</p>
                <p>Phone: +91 1111 3333 22</p>
            </div>
        </div>
        <div className='text-center text-gray-500'><p>c. 2025 It Solutions. All rights reserved.</p></div>
    </footer>
  )
}

export default Footer