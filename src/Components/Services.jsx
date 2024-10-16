import './Services.css';

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

export const Services = () => {
  return (
    <>
      <div className='main'>
        <div className="property-types-section container">
          <h2 className="section-title">Featured Property Types</h2>
          <p className="section-subtitle">Find All Types of Property.</p>

          <div className="property-cards-container">
            {propertyData.map((property, index) => (
              <div key={index} className="property-card">
                {property.icon && (
                  <img
                    src={property.icon}
                    alt={property.title}
                    className="property-icon"
                  />
                )}
                <h3 className="property-title">{property.title}</h3>
                <p className="property-count">{property.count} Property</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
