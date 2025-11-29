import React from 'react';
import Container from '../../../Comeponents/Shared/Container';

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    highlight: false,
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true,
  },
  {
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    highlight: false,
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    highlight: false,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
    highlight: false,
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    highlight: false,
  },
];


const OurService = () => {
     return (
  <Container className='rounded-2xl py-2'>
      <div className="rounded-2xl bg-[#003b46] px-6 md:px-16 py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Services
        </h2>
        <p className="text-gray-200 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      

      {/* Services Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((item, index) => (
          <div
            key={index}
            className={`p-8 rounded-3xl shadow-lg text-center transition-all border bg-white border-gray-200 hover:bg-[#c7ea46] hover:pointer-coarse: hover:text-gray-800 hover:border-transparent `}
          >
            {/* Fake Icon Circle (replace with image if needed) */}
            <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-5 flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Container>
  );
}
export default OurService;