import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Instagram, Music2, MessageCircle } from 'lucide-react';

// Using actual image paths available in the project
import modelRImg from '@/assets/model-r.png';
import modelFImg from '@/assets/model-f.png';
import luminaImg from '@/assets/revuelto.jpg';
import cyberImg from '@/assets/temerario.jpg';

const MODELS = [
  {
    id: 'MODEL R',
    name: 'THE MODEL R',
    letter: 'R',
    logoImage: '/logo-r.png',
    slug: 'urus', // using urus as a placeholder for the routing
    desc: 'Designed for premium leisure and commercial use, compliant with CE standards for global operation.',
    image: modelRImg,
    activeColor: '#F6C974',
    stats: { length: '5.22 m', width: '2.06 m', depth: '1.82 m', seating: '4–5 persons', brand: 'Yamaha', engine: '1900 cc', cert: 'CE Certified' }
  },
  {
    id: 'MODEL F',
    name: 'THE MODEL F',
    letter: 'F',
    logoImage: '/logo-f.png',
    slug: 'huracan',
    desc: 'Focused on high speeds and unmatched track performance, equipped with advanced aerodynamics.',
    image: modelFImg,
    activeColor: '#FFFFFF',
    stats: { length: '5.05 m', width: '2.00 m', depth: '1.75 m', seating: '2 persons', brand: 'Lamborghini', engine: 'V12 6.5L', cert: 'Track Only' }
  },
  {
    id: 'LUMINA',
    name: 'THE LUMINA',
    letter: 'L',
    slug: 'revuelto',
    desc: 'Pure elegance and smooth cruising, boasting luxury interiors and an incredibly quiet electric engine.',
    image: luminaImg,
    activeColor: '#FFFFFF',
    stats: { length: '5.50 m', width: '2.10 m', depth: '1.90 m', seating: '4 persons', brand: 'Lumina EV', engine: 'Dual Motor', cert: 'Global' }
  },
  {
    id: 'CYBERMARINE',
    name: 'THE CYBERMARINE',
    letter: 'C',
    slug: 'temerario',
    desc: 'Futuristic design with marine-grade materials, ready to conquer both road and water expanses.',
    image: cyberImg,
    activeColor: '#FFFFFF',
    stats: { length: '6.00 m', width: '2.20 m', depth: '2.00 m', seating: '6 persons', brand: 'CyberD', engine: 'Quad Motor', cert: 'Amphibious' }
  }
];

const ConfiguratorPageV2 = () => {
  const [activeTab, setActiveTab] = useState(MODELS[0]);

  return (
    <section id="models" className="w-full h-screen min-h-[700px] bg-[#1B1B1B] relative flex flex-col justify-between overflow-hidden">
      
      {/* Background ambient glow behind car */}
      <div className="absolute right-0 bottom-1/4 w-[50vw] h-[20vh] bg-[#0A0A0A] blur-[40px] rounded-full mix-blend-screen pointer-events-none z-0 hidden lg:block"></div>

      {/* Top Models Tab Navigation */}
      <div className="w-full pt-[8vh] flex justify-center gap-[4vw] z-20">
        {MODELS.map((model) => (
          <div 
            key={model.id}
            onClick={() => setActiveTab(model)}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className={`font-light text-base md:text-lg lg:text-xl transition-colors ${activeTab.id === model.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
                  style={{ color: activeTab.id === model.id ? model.activeColor : '' }}>
              {model.id}
            </span>
            <div className={`h-[3px] w-full transition-colors ${activeTab.id === model.id ? 'bg-current' : 'bg-transparent group-hover:bg-gray-600'}`}
                 style={{ backgroundColor: activeTab.id === model.id ? model.activeColor : undefined }}></div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-[5vw] lg:px-[8vw] z-10 w-full max-w-[1920px] mx-auto mt-4 md:mt-0">
        
        {/* Left Side: Typography & Buttons */}
        <div className="flex flex-col items-start w-full md:w-[50%] lg:w-[45%] mt-6 md:mt-0">
          
          {/* Logo Letter / Image */}
          {activeTab.logoImage ? (
            <img 
              src={activeTab.logoImage} 
              alt={`${activeTab.name} Logo`} 
              className="h-[80px] md:h-[120px] lg:h-[150px] object-contain object-left mb-[3vh] ml-[-10px]" 
            />
          ) : (
            <div className="flex flex-col items-start leading-none gap-0 whitespace-nowrap font-serif italic font-bold mb-[3vh]" style={{ color: activeTab.activeColor }}>
              <span className="text-sm md:text-base lg:text-[20px] tracking-[0.3em] font-sans font-normal not-italic ml-1 lg:ml-2 mb-1 text-white">MODEL</span>
              <span className="text-[80px] md:text-[100px] lg:text-[130px] leading-[0.8] tracking-tighter">{activeTab.letter}</span>
            </div>
          )}

          {/* Title Area */}
          <div className="font-light text-xl md:text-2xl sm:text-[32px] leading-tight text-white mb-2">
            CONFIGURE YOUR
          </div>
          <div className="font-bold text-3xl md:text-4xl sm:text-[64px] leading-tight text-white mb-6">
            {activeTab.name}
          </div>

          {/* Description */}
          <div className="font-extralight text-lg lg:text-[20px] leading-snug text-gray-200 mb-[5vh] max-w-xl">
            {activeTab.desc}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-[1.5vw] mt-[2vh]">
            <Link to="/configurator" className="h-[50px] lg:h-[60px] px-6 lg:px-[25px] bg-[#81D8D0] rounded-[6px] hover:bg-[#6ec2ba] transition-colors flex items-center justify-between group min-w-[200px] lg:min-w-[250px]">
              <span className="font-normal text-xs sm:text-sm text-black whitespace-nowrap mr-3">
                START CONFIGURATION
              </span>
              <div className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center group-hover:scale-110 transition-transform relative">
                <div className="absolute border border-black w-3 h-3 lg:w-4 lg:h-4"></div>
                <div className="absolute border flex items-center justify-center border-black w-2 h-2 lg:w-3 lg:h-3 translate-x-1 -translate-y-1 bg-[#81D8D0]"></div>
              </div>
            </Link>

            <Link to={`/models/${activeTab.slug}`} className="h-[50px] lg:h-[60px] px-6 lg:px-[30px] border border-white rounded-[6px] hover:bg-white/10 transition-colors flex items-center justify-between group cursor-pointer pointer-events-auto min-w-[200px] lg:min-w-[250px]">
              <span className="font-normal text-sm lg:text-[15px] text-[#E3E3E3] whitespace-nowrap mr-3">
                EXPLORE THE MODEL
              </span>
              <div className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] relative overflow-hidden group-hover:translate-x-1 transition-transform">
                <div className="absolute top-[6px] lg:top-[8px] right-[2px] w-[10px] lg:w-[14px] h-[2px] bg-[#F5F5F5]"></div>
                <div className="absolute top-[2px] lg:top-[3px] right-[2px] w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] border-t-2 border-r-2 border-[#F5F5F5] transform rotate-45"></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side: Car Image */}
        <div className="w-full md:w-[45%] lg:w-[50%] h-[30vh] md:h-[50vh] flex items-center justify-center md:justify-end mt-10 md:mt-0 relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1B1B1B] to-transparent z-10 pointer-events-none block md:hidden"></div>
            <img key={activeTab.id} src={activeTab.image} alt={activeTab.name} className="object-contain object-center md:object-right w-full h-full max-h-[400px] xl:max-h-[500px] opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" />
        </div>
      </div>

      {/* Specifications Footer */}
      <div className="w-full px-4 sm:px-[5vw] lg:px-0 lg:max-w-[1620px] mx-auto pb-4 lg:pb-[20px] grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row items-center justify-center lg:justify-between z-20 text-[11px] sm:text-[12px] lg:text-[15px] text-[#8E8E8E] font-light gap-2 sm:gap-3 lg:gap-0">
        <div className="whitespace-nowrap text-center">Length: {activeTab.stats.length}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center">Width: {activeTab.stats.width}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center">Depth: {activeTab.stats.depth}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center">Seating: {activeTab.stats.seating}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center">Engine: {activeTab.stats.brand}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>
        
        <div className="whitespace-nowrap text-center">{activeTab.stats.engine}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center col-span-2 sm:col-span-1">Cert: {activeTab.stats.cert}</div>
      </div>

      {/* Social Icons Sidebar */}
      {/* <div className="hidden lg:flex absolute right-[20px] xl:right-[40px] top-1/2 -translate-y-1/2 flex-col gap-6 items-center z-50">
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Facebook className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Instagram className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Linkedin className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Youtube className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Music2 className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <MessageCircle className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
      </div> */}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateX(20px); }
          to { opacity: 1; transform: scale(1.05) translateX(0); }
        }
      `}} />

    </section>
  );
};

export default ConfiguratorPageV2;
