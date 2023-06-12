/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='bg-[#23272F] w-screen z-50'>
      <div className='container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <img className='w-16 cursor-pointer' src={logo} alt='logo' />
            <span className='ml-3 text-xl text-white'>MUSE</span>
          </a>
          <p className='mt-6 text-sm text-[#636C80]'>Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        <div className='flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>CATEGORIES</h2>
            <nav className='list-none mb-10'>
              <li>
                <a className='text-[#636C80] hover:text-gray-800'>First Link</a>
              </li>
              <li>
                <a className='text-[#636C80] hover:text-gray-800'>Second Link</a>
              </li>
              <li>
                <a className='text-[#636C80] hover:text-gray-800'>Third Link</a>
              </li>
              <li>
                <a className='text-[#636C80] hover:text-gray-800'>Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>CATEGORIES</h2>
            <nav className='list-none mb-10'>
              <li>
                <a className='text-[#636C80] hover:text-gray-800'>First Link</a>
              </li>
              <li>
                <a className='text-[#636C80] hover:text-gray-800'>Second Link</a>
              </li>
              <li>
                <a className='text-[#636C80] hover:text-gray-800'>Third Link</a>
              </li>
              <li>
                <a className='text-[#636C80] hover:text-gray-800'>Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
