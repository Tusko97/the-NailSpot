import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component

function OurServices() {
  // Define your services array
  const services = [
    {
      title: 'Manicure',
      description: 'Description: Manicures involve the care and beautification of the hands and nails. This service includes nail shaping, cuticle care, and nail polish application.',
      imageSrc:"https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuaWN1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: 'Pedicure',
      description: 'Pedicures focus on the feet and toenails. It includes nail trimming, exfoliation, massage, and toenail polish application.',
      imageSrc:"https://images.unsplash.com/photo-1529982412356-901cc3a363cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
    },
    {
      title: 'Hair Styling',
      description: 'Hair styling services cover various options like haircuts, blowouts, hair coloring, and styling for special occasions.',
      imageSrc:"https://plus.unsplash.com/premium_photo-1661299290259-2cc2c08f64aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXIlMjBzdHlsaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: 'Hair Extensions',
      description: 'Hair extensions add length, volume, and versatility to your hair. They can be styled and colored to match your natural hair.',
      imageSrc:"https://images.unsplash.com/flagged/photo-1580820258381-20c91a156841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMGV4dGVuc2lvbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: 'Massage Therapy',
      description: 'Massage therapy provides relaxation, stress relief, and muscle tension reduction. Different types of massages are available, such as Swedish, deep tissue, and hot stone.',
      imageSrc:"https://images.unsplash.com/photo-1617952986600-802f965dcdbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hc3NhZ2UlMjB0aGVyYXB5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: 'Facials',
      description: 'Facials involve cleansing, exfoliation, and treatments to improve the skin appearance. They address issues like acne, aging, and hydration.',
      imageSrc:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: 'Waxing and Hair Removal',
      description: 'Waxing services remove unwanted hair from areas like the eyebrows, legs, and bikini line. It leaves the skin smooth and hair-free.',
      imageSrc:"https://plus.unsplash.com/premium_photo-1661431392914-e3fc8ff0e51a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F4aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: 'Eyelash Extensions',
      description: 'Special packages for brides and those attending special events, including bridal makeup, hair styling, and nail services.',
      imageSrc:"https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXllbGFzaCUyMGV4dGVuc2lvbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: 'Bridal and Special Occasion Services',
      description: 'Nail art includes creative and decorative designs painted on nails, offering a unique and personalized touch.',
      imageSrc:"https://images.unsplash.com/photo-1662833835232-07db8a7f1570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyaWRhbCUyMHNlcnZpY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: 'Nail Art',
      description: 'Description of Service 10',
      imageSrc:"https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    // Add more services as needed
  ];

  return (
    <div className="w-3/4 m-auto p-4 flex flex-col gap-4">
      <div className="flex gap-2 text-4xl items-center py-5 mx-auto">
        <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">
          OUR SERVICES
        </h1>
      </div>
      {/* Add your service components here */}
      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
