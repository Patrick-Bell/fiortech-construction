import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { fiortechSlider } from '../api/fiortech';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const GalleryModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col"
        >
          {/* 1. TOP NAVIGATION BAR */}
          <div className="absolute top-0 inset-x-0 z-[110] p-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="h-10 w-1 bg-[#408663] rounded-full" />
              <div>
                <h3 className="text-[10px] font-black text-[#408663] uppercase tracking-[0.3em]">Project Gallery</h3>
                <p className="text-sm font-bold text-white uppercase tracking-tighter italic">Fiortech Recruitment</p>
              </div>
            </div>

            {/* NAVIGATION ARROWS MOVED HERE */}
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <button className="cursor-pointer s-prev w-10 h-10 rounded-full flex items-center justify-center border border-zinc-800 bg-zinc-900/50 text-white hover:bg-white hover:text-black transition-all group">
                  <ChevronLeft className="w-5 h-5 group-active:scale-90 transition-transform" />
                </button>
                <button className="cursor-pointer s-next w-10 h-10 rounded-full flex items-center justify-center border border-zinc-800 bg-zinc-900/50 text-white hover:bg-white hover:text-black transition-all group">
                  <ChevronRight className="w-5 h-5 group-active:scale-90 transition-transform" />
                </button>
              </div>

              <button 
                onClick={onClose}
                className="cursor-pointer group flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-white transition-all transition-colors"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-black">Exit Preview</span>
                <X className="w-4 h-4 text-zinc-400 group-hover:text-black" />
              </button>
            </div>
          </div>
          

          {/* 2. THE MAIN VIEWPORT */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full h-full relative"
          >
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              effect="fade"
              speed={800}
              navigation={{ nextEl: '.s-next', prevEl: '.s-prev' }}
              pagination={{ clickable: true, type: 'progressbar' }}
              className="h-full w-full"
            >
              {fiortechSlider.map((item, index) => (
                <SwiperSlide key={index} className="flex flex-col h-full bg-[#050505]">
                  <div className="flex flex-col h-full pt-32 pb-12 px-6 md:px-20">

                  <div className="max-w-4xl mb-8 space-y-3">
                      <motion.div 
                         initial={{ y: 20, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         className="flex items-center gap-2"
                      >
                         <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-none">
                          {item.title}
                        </h2>
                      </motion.div>
                      <p className="text-sm md:text-base text-zinc-400 font-medium max-w-2xl leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  
                    {/* MASSIVE IMAGE BELOW */}
                    <div className="flex-1 relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-contain md:object-cover md:object-top"
                      />
                      
                      {/* Vignette overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Progress Bar Override */}
          <style jsx global>{`
            .swiper-pagination-progressbar {
              background: rgba(255, 255, 255, 0.05) !important;
              height: 2px !important;
              top: 0 !important;
            }
            .swiper-pagination-progressbar-fill {
              background: #2563eb !important;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;