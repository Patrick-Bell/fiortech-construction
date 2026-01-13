import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, ChevronRight, FileUser } from 'lucide-react';
import logo from '../assets/logo.png';
import img from '../assets/img.svg';
import { DiPostgresql, DiReact, DiRuby } from 'react-icons/di';
import { SiMui, SiRubyonrails } from 'react-icons/si';
import GalleryModal from './GalleryModal';
import cv from '../assets/cv.pdf'

const Page = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);


    const handleDownload = () => {
      const pdfUrl = "cv.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


  return (
    // Changed max-h-full to h-screen and added h-dvh for mobile browsers
    <div className="h-screen w-full bg-[#080808] flex flex-col md:flex-row overflow-hidden font-sans text-zinc-100">
      
      {/* Resume/CV Quick Link - Top Right */}
      <div className="absolute top-2 right-2 lg:top-10 lg:right-10 z-50">
        <motion.a
          href={cv}
          target='_blank'
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-zinc-600 transition-colors"
        >
          <FileUser className="w-3 h-3 text-[#408663]" />
          Download CV
        </motion.a>
      </div>

      {/* LEFT SIDE: Content */}
      <div className="w-full h-1/2 md:h-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 z-10 relative border-b md:border-b-0 md:border-r border-zinc-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} alt="Fiortech Logo" className="w-16 md:w-50 rounded-md mb-8 md:mb-12 opacity-90" />

          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-4 md:mb-6 leading-[0.85]">
            Fiortech Recruitment Group
          </h1>

          <p className="text-zinc-400 text-xs md:text-sm font-medium leading-relaxed max-w-sm mb-3">
            This project is currently a work in progress and will be deployed soon. To see how it currently looks, please view the gallery.
          </p>

          <p className="text-zinc-400 text-xs md:text-sm font-medium leading-relaxed max-w-sm mb-8 md:mb-10">
            To see other projects, please visit my <a target='_blank' href="https://patrick-web-portfolio.netlify.app/" className="text-[#408663] underline hover:text-[#306a4d]">portfolio</a>.
          </p>
         

          <div className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-12">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://patrick-web-portfolio.netlify.app/"
              target='_blank'
              className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-zinc-100 text-black text-[10px] font-black uppercase tracking-widest rounded-sm"
            >
              Portfolio <ChevronRight className="w-3 h-3" />
            </motion.a>
            <motion.div
            onClick={() => setIsGalleryOpen(true)} // Trigger the modal
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-transparent text-white text-[10px] font-black uppercase tracking-widest rounded-sm border border-zinc-800"
            >
              Gallery <ChevronRight className="w-3 h-3" />
            </motion.div>
          </div>

          <div className="flex gap-4 md:gap-6 opacity-40">
            <div className="flex items-center gap-2"><DiRuby className="w-3 h-3 md:w-4 md:h-4" /><span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Ruby</span></div>
            <div className="flex items-center gap-2"><SiRubyonrails className="w-3 h-3 md:w-4 md:h-4" /><span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Rails</span></div>
            <div className="flex items-center gap-2"><DiPostgresql className="w-3 h-3 md:w-4 md:h-4" /><span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Postgres</span></div>
            <div className="flex items-center gap-2"><DiReact className="w-3 h-3 md:w-4 md:h-4" /><span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">React</span></div>
            <div className="flex items-center gap-2"><SiMui className="w-3 h-3 md:w-4 md:h-4" /><span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Material UI</span></div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Visual */}
      <div className="w-full h-1/2 md:h-full md:w-1/2 relative flex items-center justify-center bg-[#050505] p-12">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative z-10 w-full h-full max-w-md max-h-[60%] md:max-h-full flex items-center justify-center"
        >
          <img 
            src={img} 
            alt="Technical Architecture" 
            className="w-full h-full object-contain" 
          />
          
          <div className="absolute top-0 left-0 font-mono text-[8px] text-zinc-700 uppercase p-2 border-l border-t border-zinc-800">
            Node_Ref: 25.01.26
          </div>
          <div className="absolute bottom-0 right-0 font-mono text-[8px] text-zinc-700 uppercase p-2 border-r border-b border-zinc-800">
            Dev_Status: Stable
          </div>
        </motion.div>
      </div>

      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />

      {/* Vertical Credit - Bottom Right */}
      <div className="hidden lg:block absolute bottom-12 right-0 p-8 origin-bottom-right rotate-90 translate-y-full">
        <p className="text-[8px] font-black text-zinc-800 uppercase tracking-[0.5em]">
          Engineered by YourName // 2026
        </p>
      </div>
    </div>
  );
};

export default Page;