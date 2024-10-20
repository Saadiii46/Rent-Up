
export const Location = () => {
  const location = [
    {
      id: 1,
      name: 'New Orleans, Louisiana',
      Villas: '12 Villas',
      Apartments: '10 Apartments',
      Offices: '07 Offices',
      cover: './src/assets/images/location-image-one.png',
    },
    {
      id: 2,
      name: 'Jerrsy, United State',
      Villas: '12 Villas',
      Apartments: '10 Apartments',
      Offices: '07 Offices',
      cover: './src/assets/images/location-image-two.png',
    },
    {
      id: 3,
      name: 'Liverpool, London',
      Villas: '12 Villas',
      Apartments: '10 Apartments',
      Offices: '07 Offices',
      cover: './src/assets/images/location-image-three.png',
    },
    {
      id: 4,
      name: 'NewYork, United States',
      Villas: '12 Villas',
      Apartments: '10 Apartments',
      Offices: '07 Offices',
      cover: './src/assets/images/location-image-four.png',
    },
    {
      id: 5,
      name: 'Montreal, Canada',
      Villas: '12 Villas',
      Apartments: '10 Apartments',
      Offices: '07 Offices',
      cover: './src/assets/images/location-image-five.png',
    },
    {
      id: 6,
      name: 'California, USA',
      Villas: '12 Villas',
      Apartments: '10 Apartments',
      Offices: '07 Offices',
      cover: './src/assets/images/location-image-six.png',
    },
  ];

  return (
    <>
      <section className="location py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">Explore By Location</h1>
          <p className="text-center mx-auto my-4 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {location.map((item, index) => (
              <div className="relative rounded-lg overflow-hidden" key={index}>
                <img src={item.cover} alt="" className="rounded-lg" />
                <div className="absolute top-0 left-0 flex items-center justify-center flex-col h-64 w-full text-white z-20">
                  <h5 className="text-lg text-center font-medium">{item.name}</h5>
                  <p>
                    <label className="text-white opacity-80 mr-5">{item.Villas}</label>
                    <label className="text-white opacity-80 mr-5">{item.Offices}</label>
                    <label className="text-white opacity-80">{item.Apartments}</label>
                  </p>
                </div>
                <div className="absolute top-0 left-0 bg-[rgba(15,28,47,0.3)] rounded-lg z-10 w-[340px] h-[210px] mx-5 my-5"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
