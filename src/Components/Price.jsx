import './Price.css'

export const Price = () => {

    const price = [
        {
          plan: "Basic",
          price: "29",
          ptext: "per user, per month",
          list: [
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "99.5% Uptime Guarantee",
            },
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "120GB CDN Bandwidth",
            },
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "5GB Cloud Storage",
            },
            { change: "color", icon: <svg className='icon-two' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>, text: "Personal Help Support" },
            { change: "color", icon: <svg className='icon-two' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>, text: "Enterprise SLA" },
          ],
        },
        {
          best: "Best Value",
          plan: "Standard",
          price: "49",
          ptext: "per user, per month",
          list: [
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "99.5% Uptime Guarantee",
            },
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "150GB CDN Bandwidth",
            },
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "10GB Cloud Storage",
            },
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "Personal Help Support",
            },
            {
              change: "color",
              icon: <svg className='icon-two' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>,
              text: "Enterprise SLA",
            },
          ],
        },
        {
          plan: "Platinum",
          price: "79",
          ptext: "2 user, per month",
          list: [
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "100% Uptime Guarantee",
            },
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "200GB CDN Bandwidth",
            },
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "20GB Cloud Storage",
            },
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "Personal Help Support",
            },
            {
              icon: <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>,
              text: "Enterprise SLA",
            },
          ],
        },
      ]


    return <>
    
    <section className='price padding'>
        <div className='container'>
         <h1>Select Your Package</h1>
         <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
          <div className='content flex flex-wrap justify-between mtop'>
        {price.map((item, index) => (
          <div className='box shadow-lg w-[31.5%] p-8 rounded-lg' key={index}>
            <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div>
            <h3 className='text-lg'>{item.plan}</h3>
            <h1 className='text-6xl'>
              <span className='text-2xl font-medium'>$</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul className='mt-10'>
              {item.list.map((val, idx) => {
                const { icon, text, change } = val
                return (
                  <li className='flex mb-5' key={idx}>
                    <label
                      className={`w-7 h-7 rounded-full mr-5 ${change === "color" ? 'bg-[#dc35451f] text-[#dc3848]' : 'bg-[#27ae601f] text-[#27ae60]'}`}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button
              className={`btn5 w-full ${item.plan === "Standard" ? 'bg-[#27ae60] text-white' : 'bg-white text-[#27ae60]'}`}
            >
              Start {item.plan}
            </button>
          </div>
        ))}
      </div>
        </div>
      </section>
    
    </>
}
