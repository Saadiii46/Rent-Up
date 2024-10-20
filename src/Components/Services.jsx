export const Services = () => {
  const propertyData = [
    {
      icon: './src/assets/icons/house-icon-one.png',
      title: 'Family House',
      count: 122,
    },
    {
      icon: './src/assets/icons/house-icon-two.png',
      title: 'House & Villa',
      count: 155,
    },
    {
      icon: './src/assets/icons/house-icon-fthree.png',
      title: 'Apartment',
      count: 300,
    },
    {
      icon: './src/assets/icons/house-icon-four.png',
      title: 'Office & Studio',
      count: 80,
    },
    {
      icon: './src/assets/icons/house-icon-five.png',
      title: 'Villa & Condo',
      count: 80,
    },
  ];

  return (
    <>
      <div className="main bg-[#f7f8fa] mt-[20%] sm:mt-0">
        <div className=" container property-types-section text-center py-[40px] px-[20px]">
          <h2 className="section-title text-[28px] font-bold text-[#232323] mb-[10px]">
            Featured Property Types
          </h2>
          <p className="section-subtitle text-[16px] text-[#888] mb-[30px]">
            Find All Types of Property.
          </p>

          <div className="property-cards-container flex justify-center flex-wrap gap-[20px]">
            {propertyData.map((property, index) => (
              <div
                key={index}
                className="property-card bg-[#f7f8fa] p-[20px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-transform duration-200 ease-in-out text-center mb-[20px] w-full sm:w-[calc(50%_-_20px)] md:w-[calc(33.33%_-_20px)] lg:w-[calc(20%_-_20px)]"
              >
                {property.icon && (
                  <img
                    src={property.icon}
                    alt={property.title}
                    className="property-icon mb-[10px] w-[50px] h-[50px] sm:w-[45px] sm:h-[45px] xs:w-[35px] xs:h-[35px] xxs:w-[30px] xxs:h-[30px]"
                  />
                )}
                <h3 className="property-title text-[18px] font-bold text-[#232323]">
                  {property.title}
                </h3>
                <p className="property-count text-[14px] text-[#888]">
                  {property.count} Property
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
