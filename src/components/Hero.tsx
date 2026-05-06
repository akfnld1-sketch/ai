/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, ArrowRight, TrendingUp, Users, Award } from "lucide-react";

interface HeroProps {
  onOpenInquiry: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-600 mb-6"
          >
            <Sparkles className="h-4 w-4" />
            현업 AI 전문가가 전수하는 실전 수익화 노하우
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-indigo-950 mb-8 leading-[1.1]"
          >
            AI로 잠자는 동안에도 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
              수익이 발생하는 자동화 시스템
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg md:text-xl text-gray-500 mb-10 font-medium leading-relaxed"
          >
            유튜브, 블로그, 쇼핑몰까지. 당신의 시간을 10배로 늘려줄 <br className="hidden md:block" />
            국내 유일의 실전형 AI 수익화 강의를 만나보세요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => document.getElementById('how-to-earn')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 py-5 text-lg font-black text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
            >
              수강 신청하고 바로 시작하기
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onOpenInquiry}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white border-2 border-indigo-100 px-8 py-5 text-lg font-black text-indigo-900 transition-all hover:border-indigo-200 hover:bg-indigo-50 w-full sm:w-auto"
            >
              강연 및 교육 문의하기
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-indigo-50 pt-12"
          >
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-2xl bg-indigo-50 p-4 text-indigo-600">
                <Users className="h-6 w-6" />
              </div>
              <span className="text-xl font-black text-indigo-950">5,000+</span>
              <span className="text-sm font-medium text-gray-400">누적 수강생</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-2xl bg-indigo-50 p-4 text-indigo-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <span className="text-xl font-black text-indigo-950">98%</span>
              <span className="text-sm font-medium text-gray-400">수익 인증 성공률</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-2xl bg-indigo-50 p-4 text-indigo-600">
                <Award className="h-6 w-6" />
              </div>
              <span className="text-xl font-black text-indigo-950">150+</span>
              <span className="text-sm font-medium text-gray-400">기업/기관 교육</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-2xl bg-indigo-50 p-4 text-indigo-600">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="text-xl font-black text-indigo-950">4.9/5.0</span>
              <span className="text-sm font-medium text-gray-400">수강 만족도</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
