

export const Hero = () => {
    return <>
    
    <section className='h-[90vh] w-full bg-cover bg-center' style={{ backgroundImage: "url('/src/assets/banner-image.png')" }}>
        <div className='pt-[15%] max-w-[1200px] mx-auto'>
          
          <h1 className='text-white text-[60px] text-center'>Search Your Next Home</h1>
          <p className='text-white opacity-80 text-center'>Find new & featured property located in your local city.</p>

          <form className='bg-white rounded-md mt-[50px] p-[20px] flex justify-between flex-wrap gap-[20px]'>
            <div className='box flex-1 min-w-[250px] p-[15px] border-l border-l-[rgba(128,128,128,0.2)]'>
              <span className='text-[14px] text-gray-500'>City/Street</span>
              <input type='text' placeholder='Location' className='mt-[5px] p-[10px] w-full border border-[rgba(128,128,128,0.2)] rounded-md' />
            </div>
            <div className='box flex-1 min-w-[250px] p-[15px] border-l border-l-[rgba(128,128,128,0.2)]'>
              <span className='text-[14px] text-gray-500'>Property Type</span>
              <input type='text' placeholder='Property Type' className='mt-[5px] p-[10px] w-full border border-[rgba(128,128,128,0.2)] rounded-md' />
            </div>
            <div className='box flex-1 min-w-[250px] p-[15px] border-l border-l-[rgba(128,128,128,0.2)]'>
              <span className='text-[14px] text-gray-500'>Price Range</span>
              <input type='text' placeholder='Price Range' className='mt-[5px] p-[10px] w-full border border-[rgba(128,128,128,0.2)] rounded-md' />
            </div>
            <div className='box p-[15px]'>
              <h4 className='font-medium'>Advance Filter</h4>
            </div>
            <button className='bg-[greenyellow] border-none p-[10px_20px] rounded-md text-white flex items-center justify-center cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
              </svg>
            </button>
          </form>
        </div>
      </section>

    </>
}
