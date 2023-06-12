/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../index.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className='bg-[#23272F] fixed w-screen z-50'>
      <nav className='flex justify-between items-center container mx-auto h-[72px]'>
        <div>
          <Link to={'/'}>
            <img className='w-16 cursor-pointer' src={logo} alt='logo' />
          </Link>
        </div>
        <div
          className={`md:static absolute bg-[#23272F] md:min-h-fit min-h-[24vh] left-0  ${
            showDropdown ? `top-[6%]` : `top-[100%]`
          }  md:w-auto w-full flex items-center px-5`}
        >
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-12'>
            <li>
              <Link className='text-gray-400 hover:text-white transition-colors duration-500' to='#'>
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-white transition-colors duration-500' to='#'>
                Công việc
              </Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-white transition-colors duration-500' to='#'>
                Khóa học
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-6'>
          <Link
            to={'/contact'}
            className='bg-[#3D4453] text-white px-5 py-2 rounded hover:bg-[#4ED9F8] hover:text-gray-800 transition-colors duration-500'
          >
            Liên hệ
          </Link>
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
