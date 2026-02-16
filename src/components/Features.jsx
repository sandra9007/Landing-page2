import React from 'react';
import { 
  FaClipboardList, 
  FaImages, 
  FaEye, 
  FaSearch, 
  FaChartBar,
  FaLock,
  FaHandshake,
  FaCar,
 
  FaTags,
  FaExchangeAlt,
  FaShareAlt
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaClipboardList,
      title: "Vehicle Listing Management",
      description: "Add and maintain car listings with full details — model, variant, year, mileage, condition, and more.",
      tag: "Core"
    },
    {
      icon: FaImages,
      title: "Multi-Image Upload",
      description: "Upload multiple high-quality images for each vehicle to support better evaluation and buyer confidence.",
      tag: "Media"
    },
    {
      icon: FaEye,
      title: "Real-Time Inventory View",
      description: "View available stock (new & used) and unsold cars in real time. Always know what's on your lot.",
      tag: "Live"
    },
    {
      icon: FaSearch,
      title: "Advanced Search & Filters",
      description: "Find specific cars instantly by model, variant, year, condition, fuel type, transmission, and price range.",
      tag: "Browse"
    },
    {
      icon: FaChartBar,
      title: "Stock Status Tracking",
      description: "Track availability status in real time — available, sold, or unsold. Complete inventory control.",
      tag: "Monitor"
    },
    {
      icon: FaLock,
      title: "Vehicle Visibility Control",
      description: "Choose Public (visible to all dealers) or Private (internal only). Change visibility anytime.",
      tag: "Control"
    },
    {
      icon: FaHandshake,
      title: "Dealer-to-Dealer Requests",
      description: "Request specific vehicles from other dealers. Receive mobile contacts instantly when available.",
      tag: "Network"
    }
  ];

 

  return (
    <section className="py-0 md:py-0 bg-[#020202] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-[#a4b937]/10 rounded-full border border-[#a4b937]/30">
              <span className="text-[#a4b937] font-semibold text-xs uppercase tracking-wider">
                Complete Inventory Platform
              </span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Everything you need to <br className="hidden sm:block" />
            <span className="text-[#a4b937]">manage & move inventory</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            One platform for listing, tracking, visibility control, and dealer-to-dealer requests.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-[#0a0a0a] rounded-2xl p-6 transition-all duration-300 border border-[#a4b937]/30 shadow-xl hover:shadow-2xl hover:border-[#a4b937]/50 hover:bg-gradient-to-br hover:from-[#1a2a1a] hover:to-[#020202] ${
                index === features.length - 1 ? 'lg:col-span-1 xl:col-span-1' : ''
              }`}
            >
              {/* Icon and Tag */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#a4b937]/10 rounded-xl flex items-center justify-center group-hover:bg-[#a4b937]/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="text-2xl text-[#a4b937] group-hover:text-[#a4b937] transition-all duration-300" />
                </div>
                <span className="text-xs bg-gray-800 group-hover:bg-[#a4b937]/20 text-gray-400 group-hover:text-[#a4b937] px-2.5 py-1 rounded-full font-medium border border-gray-700 group-hover:border-[#a4b937]/30 transition-all duration-300">
                  {feature.tag}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#a4b937] transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>


            </div>
          ))}
        </div>

     
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-[#0a0a0a] px-8 py-4 rounded-2xl border border-gray-800">
            <div className="flex items-center gap-2">
              <FaCar className="text-[#a4b937] text-xl" />
              <span className="text-white font-semibold">500+ Dealers</span>
            </div>
            <div className="w-px h-6 bg-gray-800"></div>
            <div className="flex items-center gap-2">
              <FaTags className="text-[#a4b937] text-xl" />
              <span className="text-white font-semibold">15k+ Vehicles</span>
            </div>
            <div className="w-px h-6 bg-gray-800"></div>
            <div className="flex items-center gap-2">
              <FaExchangeAlt className="text-[#a4b937] text-xl" />
              <span className="text-white font-semibold">Real-time Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;