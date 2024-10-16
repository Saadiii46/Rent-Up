import './Location.css'

export const Location = () => {

    const location = [
        {
          id: 1,
          name: "New Orleans, Louisiana",
          Villas: "12 Villas",
          Apartments: "10 Apartments",
          Offices: "07 Offices",
          cover: "./src/assets/images/location-image-one.png",
        },
        {
          id: 2,
          name: "Jerrsy, United State",
          Villas: "12 Villas",
          Apartments: "10 Apartments",
          Offices: "07 Offices",
          cover: "./src/assets/images/location-image-two.png",
        },
        {
          id: 3,
          name: "Liverpool, London",
          Villas: "12 Villas",
          Apartments: " 10 Apartments",
          Offices: "07 Offices",
          cover: "./src/assets/images/location-image-three.png",
        },
        {
          id: 4,
          name: "NewYork, United States",
          Villas: "12 Villas",
          Apartments: " 10 Apartments",
          Offices: "07 Offices",
          cover: "./src/assets/images/location-image-four.png",
        },
        {
          id: 5,
          name: "Montreal, Canada",
          Villas: "12 Villas",
          Apartments: " 10 Apartments",
          Offices: "07 Offices",
          cover: "./src/assets/images/location-image-five.png",
        },
        {
          id: 6,
          name: "California, USA",
          Villas: "12 Villas",
          Apartments: " 10 Apartments",
          Offices: "07 Offices",
          cover: "./src/assets/images/location-image-six.png",
        },
      ]
     

    return<>
    
    <section className='location padding'>
        <div className='container'>
         <h1>Explore By Location</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </>
}