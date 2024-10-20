
export const Awards = () => {

    const awards = [
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/></svg> ,
          num: "32 M",
          name: "Blue Burmin Award",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg> ,
          num: "43 M",
          name: "Mimo X11 Award",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-240q-33 0-56.5-23.5T320-320v-50q-57-39-88.5-100T200-600q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 69-31.5 129.5T640-370v50q0 33-23.5 56.5T560-240H400Zm0-80h160v-92l34-24q41-28 63.5-71.5T680-600q0-83-58.5-141.5T480-800q-83 0-141.5 58.5T280-600q0 49 22.5 92.5T366-436l34 24v92Zm0 240q-17 0-28.5-11.5T360-120v-40h240v40q0 17-11.5 28.5T560-80H400Zm80-520Z"/></svg> ,
          num: "51 M",
          name: "Australian UGC Award",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg> ,
          num: "42 M",
          name: "IITCA Green Award",
        },
    ]

    return (
        <section className='bg-[#122947] text-white text-center py-12 px-5'>
            <div className='container'>
                <p className='text-[#27ae60] text-lg'>Our Rewards</p>
                <h1 className='text-white text-2xl font-normal my-5 max-w-[80%] leading-[1.4]'>Over 1,24,000+ Happy User Being With Us Still They Love Our Services</h1>

                <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {awards.map((val, index) => (
                        <div className='box' key={index}>
                            <div className='w-20 h-20 line-height-[80px] mx-auto mt-10 bg-white/10 rounded-[4%] text-2xl text-white flex items-center justify-center'>
                                <span>{val.icon}</span>
                            </div>
                            <h1 className='mt-2 text-xl'>{val.num}</h1>
                            <p className='text-[#a8b2bf] text-base mt-2'>{val.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
