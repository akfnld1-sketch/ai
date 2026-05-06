/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Quote, Mail, Phone, MapPin, Youtube, Instagram, MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "../constants";

const REVIEWS = [
  {
    name: "김*한",
    tag: "직장인",
    content: "반신반의하며 시작했는데, 퇴근 후 1시간만 투자해도 AI 음악 채널로 월 30만원 추가 수익이 나고 있습니다. 너무 신기해요!",
    rating: 5,
  },
  {
    name: "이*영",
    tag: "취준생",
    content: "AI 쇼츠 자동화 강의 덕분에 2주 만에 구독자 1만 명을 달성했습니다. 이제는 광고 협찬 제안까지 들어와요.",
    rating: 5,
  },
  {
    name: "박*수",
    tag: "창업가",
    content: "블로그 글쓰기가 항상 고역이었는데 AI 자동화 시스템 구축 후 1일 10포스팅이 가능해졌습니다. 방문자 수가 5배 늘었습니다.",
    rating: 5,
  },
];

export function ReviewSection() {
  return (
    <section id="reviews" className="py-24 bg-indigo-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-4">SUCCESS STORIES</h2>
          <h3 className="text-4xl font-black mb-6">성과로 증명하는 수강생 리얼 후기</h3>
          <p className="text-indigo-200/70 font-medium max-w-2xl mx-auto">
            망설이는 사이 누군가는 이미 AI를 통해 <br /> 경제적 자유를 향한 파이프라인을 구축하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-white/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-indigo-400 text-indigo-400" />
                ))}
              </div>
              <p className="text-indigo-50 font-medium mb-8 leading-relaxed">"{review.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-400/20 flex items-center justify-center font-bold text-indigo-300">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-sm font-black text-white">{review.name}</p>
                  <p className="text-xs font-bold text-indigo-400 uppercase">{review.tag}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={CONTACT_INFO.logoUrl} alt="Logo" className="h-8 w-auto" />
              <span className="text-xl font-black tracking-tighter text-indigo-900">AI 부업 마스터</span>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
              당신의 아이디어를 실현하는 AI 자동화 기술 교육 전문 기업입니다. 
              최신 기술 트렌드를 바탕으로 실질적인 수익 구조를 제안합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-indigo-600 transition-colors"><Youtube size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-indigo-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-indigo-600 transition-colors"><MessageSquare size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-indigo-950 uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-medium text-gray-500">
                <Mail className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-500">
                <Phone className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-500">
                <MapPin className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                서울특별시 강남구 테헤란로 123 (예시)
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-black text-indigo-950 uppercase tracking-widest mb-6">Company Info</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li>대표자: {CONTACT_INFO.ceo}</li>
                <li>사업자번호: (상업적 사용 시 입력)</li>
                <li>통신판매업신고: (상업적 사용 시 입력)</li>
                <li>개인정보보호책임자: {CONTACT_INFO.ceo}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black text-indigo-950 uppercase tracking-widest mb-6">Support</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li><a href="#" className="hover:text-indigo-600">이용약관</a></li>
                <li><a href="#" className="hover:text-indigo-600">개인정보처리방침</a></li>
                <li><a href="#" className="hover:text-indigo-600">환불정책</a></li>
                <li><a href="#" className="hover:text-indigo-600">고객센터</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-gray-400">© 2026 AI Side-Hustle Master. All rights reserved.</p>
          <p className="text-xs font-bold text-gray-300">Designed for Build & Automation</p>
        </div>
      </div>
    </footer>
  );
}
