import React from 'react';

const Navbar = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#020202] font-sans overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <img
          src="./src/assets/handshake.png"
          alt="Dealer handshake"
          className="w-full h-full object-cover object-center scale-100 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020202]/90 via-[#020202]/70 to-[#020202]/60" />
      </div>


      <div className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-5 md:py-6 flex justify-between items-center border-b border-gray-800 bg-[#020202]/20 backdrop-blur-sm">


        <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
          MOTO<span className="text-[#a4b937]">SELLS</span>
          <p className="text-xs text-gray-400 -mt-1">Vehicle Inventory Management</p>
        </div>

        <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 text-gray-300 font-medium">
            <a href="" className="hover:text-[#a4b937] transition text-sm xl:text-base px-2 py-1">Features</a>

            
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5">

            <button className="bg-gradient-to-r from-[#a4b937] to-[#526103] text-white px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-xs md:text-sm font-medium hover:opacity-90 transition shadow-lg whitespace-nowrap">
              GetApp
            </button>
           
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">


          <div className="inline-block">
            <span className="inline-block px-3 py-1.5 bg-[#a4b937]/10 rounded-full border border-[#a4b937]/30">
              <span className="text-[#a4b937] text-[7px] xs:text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold">
                Customer Ready. Stock Empty?
              </span>
            </span>
          </div>

          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2]">
            Never Lose a Sale.
            <br className="hidden xs:block" />
            <span className="block xs:inline">Find the Exact Car Your Customer Wants — </span>
            <span className="text-[#a4b937] block xs:inline">Instantly.</span>
          </h1>

          <p className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl font-light leading-relaxed">
            Request vehicles from 500+ dealers. Connect via mobile. Close deals — even when your lot is empty.
          </p>

        </div>
      </div>

    </section>
  );
};

export default Navbar;