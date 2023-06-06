/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'

import '../../index.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className='bg-[#23272F]'>
      <nav className='flex justify-between items-center container mx-auto h-[72px] z-50'>
        <div>
          <img className='w-16' src={logo} alt='logo' />
        </div>
        <div
          className={`md:static absolute bg-[#23272F] md:min-h-fit min-h-[24vh] left-0  ${
            showDropdown ? `top-[6%]` : `top-[100%]`
          }  md:w-auto w-full flex items-center px-5`}
        >
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-12'>
            <li>
              <a className='text-gray-400 hover:text-white transition-colors duration-500' href='#'>
                Về chúng tôi
              </a>
            </li>
            <li>
              <a className='text-gray-400 hover:text-white transition-colors duration-500' href='#'>
                Công việc
              </a>
            </li>
            <li>
              <a className='text-gray-400 hover:text-white transition-colors duration-500' href='#'>
                Khóa học
              </a>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-6'>
          <a className='bg-[#3D4453] text-white px-5 py-2 rounded-full hover:bg-[#4ED9F8] hover:text-gray-800 transition-colors duration-500'>
            Liên hệ
          </a>
          <i
            onClick={() => {
              setShowDropdown(!showDropdown)
            }}
            className={`fa-solid ${showDropdown ? `fa-x` : `fa-bars`} text-white text-3xl cursor-pointer md:hidden`}
          ></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
