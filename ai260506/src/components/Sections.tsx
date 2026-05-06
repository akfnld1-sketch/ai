/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Youtube, BookOpen, ShoppingBag, Music, PenTool, CheckCircle2 } from "lucide-react";

const PROFIT_WAYS = [
  {
    icon: Youtube,
    title: "AI 유튜브 자동화",
    items: ["AI 음악 채널 만들기", "쇼츠 자동 제작 시스템", "조회수 올리는 AI 전략", "유튜브 대본/썸네일 자동화"],
    color: "bg-red-50 text-red-600",
  },
  {
    icon: PenTool,
    title: "AI 블로그/콘텐츠",
    items: ["네이버/티스토리 자동화", "SEO 최적화 AI 글쓰기", "쿠팡 파트너스 수익화", "이미지 자동 생성 전략"],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: ShoppingBag,
    title: "AI 쇼핑몰 자동화",
    items: ["해외구매대행 무인화", "상세페이지 원클릭 제작", "마케팅 소재 자동 생성", "고객 상담 AI 챗봇"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Music,
    title: "AI 음악/음원 수익",
    items: ["Suno AI 작곡/작사", "유튜브 BGM 라이브러리", "음원 유통 및 수익화", "저작권 걱정 없는 제작"],
    color: "bg-purple-50 text-purple-600",
  },
];

export function ProfitSections() {
  return (
    <section id="how-to-earn" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-500 mb-4">HOW TO PROFIT</h2>
          <h3 className="text-4xl font-black text-indigo-950 mb-6">AI로 돈 버는 4가지 핵심 전략</h3>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            막연한 미래 기술이 아닌, 지금 바로 통장에 꽂히는 <br /> 실천적인 수익 구조만 선별하여 교육합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROFIT_WAYS.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl ${way.color} flex items-center justify-center mb-6`}>
                <way.icon size={28} />
              </div>
              <h4 className="text-xl font-black text-indigo-950 mb-6">{way.title}</h4>
              <ul className="space-y-4">
                {way.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-gray-500">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoursePreview() {
  return (
    <section id="courses" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-500 mb-4">CURRICULUM</h2>
            <h3 className="text-4xl font-black text-indigo-950 mb-8">
              비전공자도 4주 만에 <br />
              <span className="text-indigo-600">수익화 시스템</span> 구축 완료
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black">1</div>
                <div>
                  <h4 className="text-lg font-black text-indigo-950 mb-2">입문 과정: AI 마인드셋 & 툴 세팅</h4>
                  <p className="text-gray-500 text-sm font-medium">ChatGPT 기초부터 실전 프롬프트 작성법, 돈 되는 AI 툴 10선 마스터</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black">2</div>
                <div>
                  <h4 className="text-lg font-black text-indigo-950 mb-2">실전 과정: 플랫폼별 수익화 전략</h4>
                  <p className="text-gray-500 text-sm font-medium">유튜브, 쇼츠, 블로그, 음악 채널 중 자신에게 맞는 채널 선택 및 구축</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black">3</div>
                <div>
                  <h4 className="text-lg font-black text-indigo-950 mb-2">전문가 과정: 무인 자동화 파이프라인</h4>
                  <p className="text-gray-500 text-sm font-medium">API 연동 및 워크플로우 자동화를 통해 내가 자는 동안에도 돌아가는 시스템 완성</p>
                </div>
              </div>
            </div>

            <button className="mt-12 group flex items-center gap-2 rounded-2xl bg-indigo-900 px-8 py-4 text-lg font-black text-white transition-all hover:bg-black">
              강의 커리큘럼 자세히 보기
              <BookOpen className="h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-[40px] rotate-3 -z-10" />
            <div className="bg-white rounded-[40px] shadow-2xl p-8 border border-indigo-50">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white">✨</div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Current Progress</p>
                    <p className="text-lg font-black text-indigo-950">AI 유튜브 자동화</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-600 text-xs font-black px-3 py-1 rounded-full">ACTIVE</span>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
                  <p className="text-xs font-bold text-indigo-400 mb-1">STEP 01</p>
                  <p className="text-sm font-bold text-indigo-950">ChatGPT를 활용한 인기 주제 분석</p>
                </div>
                <div className="p-4 rounded-2xl border border-dashed border-gray-200">
                  <p className="text-xs font-bold text-gray-400 mb-1">STEP 02</p>
                  <p className="text-sm font-bold text-gray-500">대본 및 고퀄리티 AI 이미지 생성</p>
                </div>
                <div className="p-4 rounded-2xl border border-dashed border-gray-200">
                  <p className="text-xs font-bold text-gray-400 mb-1">STEP 03</p>
                  <p className="text-sm font-bold text-gray-500">영상 편집 도구 자동화 워크플로우</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-400 mb-1">예상 수익 달성일</p>
                  <p className="text-xl font-black text-indigo-600">D-14 Days</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 mb-1">완성도</p>
                  <p className="text-xl font-black text-indigo-950">75%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
