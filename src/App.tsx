/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ProfitSections, CoursePreview } from "./components/Sections";
import { ReviewSection, Footer } from "./components/FooterAndReviews";
import InquiryModal from "./components/InquiryModal";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar onOpenInquiry={() => setIsInquiryOpen(true)} />
      
      <main>
        <Hero onOpenInquiry={() => setIsInquiryOpen(true)} />
        
        <ProfitSections />
        
        <CoursePreview />
        
        <ReviewSection />

        {/* Lead Capture Banner */}
        <section className="py-20 bg-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              지금 바로 AI 파이프라인 <br className="md:hidden" /> 주인공이 되어보세요
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setIsInquiryOpen(true)}
                className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-xl shadow-xl hover:bg-gray-100 transition-all active:scale-95"
              >
                1:1 무료 상담 신청하기
              </button>
              <a 
                href="https://pf.kakao.com"
                className="w-full sm:w-auto px-10 py-5 bg-yellow-400 text-indigo-950 rounded-2xl font-black text-xl shadow-xl hover:bg-yellow-300 transition-all active:scale-95"
              >
                카톡으로 실시간 문의하기
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />
    </div>
  );
}
