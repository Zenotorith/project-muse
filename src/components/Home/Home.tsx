import logoHero from '../../assets/logo-hero.png'

const Home = () => {
  return (
    <section className='body-font'>
      <div className='container mx-auto flex py-36 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-8 font-medium text-white'>Lorem ipsum dolor sit almet</h1>
          <p className='mb-8 leading-relaxed text-[#636C80] md:w-[60%] w-full text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet metus urna. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Proin at est in
            urna gravida scelerisque et at leo. Integer eget pulvinar elit, sollicitudin malesuada libero. Donec at
            felis varius, dictum leo sed, consequat nibh. Nulla venenatis volutpat nisl, at luctus nisl tincidunt vitae.
            Nunc orci magna, interdum et sapien at, imperdiet tempor leo.
          </p>
          <div className='flex justify-center'>
            <button
              className='inline-flex border-0 py-2 px-12 focus:outline-none rounded bg-[#636C80] text-white hover:bg-[#4ED9F8]
             hover:text-gray-800 transition-colors duration-500 text-lg'
            >
              Liên hệ ngay
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end'>
          <img className='object-cover object-center' alt='hero' src={logoHero} />
        </div>
      </div>
    </section>
  )
}

export default Home
