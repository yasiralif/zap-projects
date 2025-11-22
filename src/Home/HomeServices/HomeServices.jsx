import React from 'react';
import livetracking from '../../assets/live-tracking.png'
import safe from '../../assets/safe-delivery.png'

const features = [
    {
        title: 'Live Parcel Tracking',
        desc: `Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.`,
        img: livetracking,
    },
    {
        title: '100% Safe Delivery',
        desc: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
        img: safe,
    },
    {
        title: '24/7 Call Center Support',
        desc: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
        img: safe,
    }
]
const HomeServices = () => {
    return (
        <div>
            <div className="w-full max-w-4xl mx-auto space-y-6">
                {features.map((f, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-8 flex items-center gap-6 shadow-sm">
                        {/* Left Image */}
                        <div className="w-40 shrink-0">
                            <img src={f.img} alt={f.title} className="w-full object-contain" />
                        </div>


                        {/* Divider */}
                        <div className="h-24 w-px border-r-2 border-dashed border-gray-300"></div>


                        {/* Text */}
                        <div>
                            <h2 className="text-xl font-semibold text-teal-900 mb-2">{f.title}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default HomeServices;