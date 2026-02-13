import React, { useState, useEffect } from 'react';

const Screenshots = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const screenshots = [
        {
            id: 1,
            image: "./src/assets/image1.png",
            title: "Complete Vehicle Details",
            description: "View comprehensive vehicle information including price, ownership history, kilometers driven, fuel type, and registration year. Contact sellers directly via call or email.",
        },
        {
            id: 2,
            image: "./src/assets/merchants-screenshot.png",
            title: "Dealer & Merchant Directory",
            description: "Browse through verified dealers and showrooms. Search merchants by location, view contact persons, and find the nearest showroom for your next vehicle purchase.",
        },
        {
            id: 3,
            image: "./src/assets/search-screenshot.png",
            title: "Smart Search & Browse",
            description: "Search cars by model, brand, or location. Browse by category — All, Cruiser, Hatchback. Find your perfect vehicle with real-time availability and pricing.",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [screenshots.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    };

    return (
        <section className="py-0 md:py-0 bg-[#020202] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">


                <div className="text-center max-w-3xl mx-auto mb-12 mt-0">
                    <div className="flex justify-center mb-4">
                        <span className="inline-block px-4 py-1.5 bg-[#a4b937]/10 rounded-full border border-[#a4b937]/30">
                            <span className="text-[#a4b937] font-semibold text-xs uppercase tracking-wider">
                                App Preview
                            </span>
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                        See Moto SELLS in <span className="text-[#a4b937]">Action</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Real screens from the app. Vehicle details, dealer directory, and smart search.
                    </p>
                </div>


                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    <div className="relative w-full lg:w-1/2 flex justify-center">

                        <div className="relative w-[300px] sm:w-[350px] md:w-[380px] lg:w-[400px]">

                            <div className="relative bg-[#111] rounded-[48px] p-3 shadow-2xl border border-gray-800">

                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-[#0a0a0a] rounded-b-2xl z-20 flex items-center justify-center">
                                    <div className="w-16 h-2 bg-gray-800 rounded-full"></div>
                                </div>


                                <div className="relative bg-black rounded-[40px] overflow-hidden aspect-[9/19]">

                                    <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-6 py-2 text-white text-xs">

                                    </div>


                                    <div className="w-full h-full animate-fadeIn">
                                        <img
                                            src={screenshots[currentIndex].image}
                                            alt={`Moto Mall screenshot - ${screenshots[currentIndex].title}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -inset-1 bg-gradient-to-r from-[#a4b937]/20 to-[#526103]/20 rounded-[56px] blur-xl -z-10 animate-pulse"></div>
                        </div>


                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                            {screenshots.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`transition-all duration-300 rounded-full ${currentIndex === index
                                        ? 'w-8 h-2 bg-gradient-to-r from-[#a4b937] to-[#526103]'
                                        : 'w-2 h-2 bg-gray-700 hover:bg-gray-600'
                                        }`}
                                    aria-label={`Go to screenshot ${index + 1}`}
                                />
                            ))}
                        </div>


                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 hidden lg:flex items-center justify-center w-10 h-10 bg-[#0a0a0a] border border-gray-800 rounded-full hover:border-[#a4b937]/50 transition group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-[#a4b937] transition">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 hidden lg:flex items-center justify-center w-10 h-10 bg-[#0a0a0a] border border-gray-800 rounded-full hover:border-[#a4b937]/50 transition group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-[#a4b937] transition">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>


                    <div className="w-full lg:w-1/2 space-y-6 animate-slideIn">

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#a4b937]/10 rounded-xl flex items-center justify-center">
                                <span className="text-xl">
                                    {currentIndex === 0 ? '🚗' : currentIndex === 1 ? '🏢' : '🔍'}
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                {screenshots[currentIndex].title}
                            </h3>
                        </div>


                        <p className="text-gray-400 text-lg leading-relaxed">
                            {screenshots[currentIndex].description}
                        </p>


                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">
                                {String(currentIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
                            </span>
                            <div className="w-12 h-1 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#a4b937] to-[#526103] rounded-full transition-all duration-500"
                                    style={{ width: `${((currentIndex + 1) / screenshots.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex lg:hidden items-center justify-center gap-4 pt-4">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 bg-[#0a0a0a] border border-gray-800 rounded-full hover:border-[#a4b937]/50 transition flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 bg-[#0a0a0a] border border-gray-800 rounded-full hover:border-[#a4b937]/50 transition flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
                
                .animate-slideIn {
                    animation: slideIn 0.5s ease-out;
                }
            `}</style>
        </section>
    );
};

export default Screenshots;