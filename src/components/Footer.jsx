import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaLock
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#" },
    ];

    const companyLinks = [
        { name: "About Us", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" }
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
    ];

    const socialLinks = [
        { icon: FaFacebook, name: "Facebook", href: "#" },
        { icon: FaTwitter, name: "Twitter", href: "#" },
        { icon: FaInstagram, name: "Instagram", href: "#" },
        { icon: FaLinkedin, name: "LinkedIn", href: "#" },
        { icon: FaYoutube, name: "YouTube", href: "#" }
    ];

    const contactInfo = [
        { icon: FaPhone, text: "+91 98765 43210" },
        { icon: FaEnvelope, text: "support@motomall.com" },
        { icon: FaMapMarkerAlt, text: "Mumbai, India" }
    ];

    return (
        <footer className="bg-[#020202] border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
                    
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                            MOTO<span className="text-[#a4b937]">SELLS</span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            India's largest dealer-to-dealer vehicle network. Connect with 500+ dealers,
                            request vehicles instantly, and never lose a sale due to empty stock.
                        </p>

                       
                        <div className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-400 hover:text-[#a4b937] transition group">
                                    <item.icon className="text-lg" />
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>

                       
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 bg-[#0a0a0a] border border-gray-800 rounded-full flex items-center justify-center hover:border-[#a4b937]/50 hover:bg-[#a4b937]/10 transition group"
                                    aria-label={social.name}
                                >
                                    <social.icon className="text-lg text-gray-400 group-hover:text-[#a4b937] transition" />
                                </a>
                            ))}
                        </div>
                    </div>

                  
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#a4b937] text-sm transition flex items-center gap-2"
                                    >
                                        <FaChevronRight className="text-[#a4b937] text-xs" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                 
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#a4b937] text-sm transition flex items-center gap-2"
                                    >
                                        <FaChevronRight className="text-[#a4b937] text-xs" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">Legal</h4>
                        <ul className="space-y-3">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#a4b937] text-sm transition flex items-center gap-2"
                                    >
                                        <FaChevronRight className="text-[#a4b937] text-xs" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

               
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {currentYear} Moto Sells. All rights reserved.</p>

                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-[#a4b937] rounded-full"></span>
                            500+ Dealers
                        </span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-[#a4b937] rounded-full"></span>
                            15k+ Vehicles
                        </span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-[#a4b937] rounded-full"></span>
                            20+ Cities
                        </span>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#a4b937] transition">Privacy</a>
                        <a href="#" className="hover:text-[#a4b937] transition">Terms</a>
                        <a href="#" className="hover:text-[#a4b937] transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;