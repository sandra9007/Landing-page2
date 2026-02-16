import React from 'react';
import { 
  FaCar, 
  FaFrown, 
  FaCheckCircle, 
  FaTimesCircle,
  FaBolt,
  FaClock,
  FaHandshake 
} from 'react-icons/fa';

const Problem = () => {
  return (
    <section className="py-5 md:py-5 bg-[#020202] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-[#a4b937]/10 rounded-full border border-[#a4b937]/30">
              <span className="text-[#a4b937] font-semibold text-xs uppercase tracking-wider">
                The Problem We Solve
              </span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Lost a sale today because <br className="hidden sm:block" />
            <span className="text-[#a4b937]">you didn't have the car?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            You could have saved it. MotoSells connects you to dealers across the city in under 30 seconds.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-10 border border-gray-800 shadow-xl hover:shadow-2xl transition group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center group-hover:bg-red-500/20 transition">
                <FaFrown className="text-3xl text-red-500" />
              </div>
              <span className="text-red-500/80 text-sm font-medium px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">
                Lost Deal
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Without Moto Selles</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 text-xl flex-shrink-0" />
                <span className="text-gray-400">Customer wants 2022 Fortuner — you have zero stock</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 text-xl flex-shrink-0" />
                <span className="text-gray-400">You call 10 dealers manually, no one picks up</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 text-xl flex-shrink-0" />
                <span className="text-gray-400">Customer walks out • Sale lost • Commission lost</span>
              </li>
            </ul>
            <div className="mt-auto pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-500 mb-1">Revenue from that lead</p>
              <span className="text-4xl font-bold text-white">₹0</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0a1a0a] to-[#020202] rounded-3xl p-8 md:p-10 border border-[#a4b937]/30 shadow-xl relative overflow-hidden group hover:border-[#a4b937]/50 transition">
            
         
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#a4b937]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#526103]/5 rounded-full blur-3xl"></div>
           
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#a4b937] to-[#526103] text-white px-4 py-1.5 text-sm font-bold rounded-bl-2xl shadow-lg z-10 flex items-center gap-1">
              <FaCheckCircle className="text-white" /> SAVED
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#a4b937]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#a4b937]/30 transition">
                <FaCheckCircle className="text-3xl text-[#a4b937]" />
              </div>
              <span className="text-[#a4b937] text-sm font-medium px-3 py-1 bg-[#a4b937]/10 rounded-full border border-[#a4b937]/30">
                Deal Saved
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">With Moto Mall</h3>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#a4b937] text-xl flex-shrink-0" />
                <span className="text-gray-300">Customer wants 2022 Fortuner — request sent to 12 dealers</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#a4b937] text-xl flex-shrink-0" />
                <span className="text-gray-300">3 dealers have exact match • Mobile contacts shared</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#a4b937] text-xl flex-shrink-0" />
                <span className="text-gray-300 font-semibold">Customer gets car • You get commission • Deal closed</span>
              </li>
            </ul>
            
            <div className="mt-auto pt-6 border-t border-[#a4b937]/30">
              <p className="text-sm text-[#a4b937]/70 mb-1">Commission saved</p>
              <span className="text-4xl font-bold text-white">₹45,000</span>
            </div>
          </div>
        </div>

        
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <span className="inline-flex items-center gap-2  bg-[#0a0a0a] text-gray-400 px-6 py-3 rounded-full text-sm font-medium border border-[#a4b937]/30">
            <FaBolt className="text-[#a4b937]" /> 92% request fulfillment rate
          </span>
          <span className="inline-flex items-center gap-2 bg-[#0a0a0a] text-gray-400 px-6 py-3 rounded-full text-sm font-medium border border-[#a4b937]/30">
            <FaClock className="text-gray-400" /> Avg. response: 30 mins
          </span>
          <span className="inline-flex items-center gap-2 bg-[#0a0a0a] text-gray-400 px-6 py-3 rounded-full text-sm font-medium border border-[#a4b937]/30">
            <FaHandshake className="text-gray-400" /> 500+ active dealers
          </span>
        </div>
      </div>
    </section>
  );
};

export default Problem;