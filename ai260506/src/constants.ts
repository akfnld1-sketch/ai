/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactInfo {
  ceo: string;
  email: string;
  phone: string;
  logoUrl: string;
}

export const CONTACT_INFO: ContactInfo = {
  ceo: "황현우",
  email: "akfnld@naver.com",
  phone: "010-2201-4524",
  logoUrl: "https://akfnld1-sketch.github.io/ai/images/logo.png",
};

export interface MenuItem {
  title: string;
  href: string;
  isCTA?: boolean;
  children?: {
    title: string;
    items: string[];
  }[];
}

export const NAV_MENU: MenuItem[] = [
  {
    title: "AI로 돈버는 방법",
    href: "#how-to-earn",
    children: [
      {
        title: "AI 부업 시작하기",
        items: ["초보자 가능 부업", "직장인 부업", "스마트폰 부업", "월 10만원 시작법", "AI 자동화 수익 구조"],
      },
      {
        title: "AI 유튜브 자동화",
        items: ["AI 음악 채널 만들기", "쇼츠 자동 제작", "조회수 올리는 방법", "썸네일 자동화", "대본 자동 생성", "수익화 방법"],
      },
      {
        title: "AI 블로그 자동화",
        items: ["네이버 블로그 자동화", "SEO 글쓰기", "자동 이미지 생성", "쿠팡파트너스 수익화", "애드센스 수익 구조"],
      },
      {
        title: "AI 쇼핑몰 자동화",
        items: ["구매대행 자동화", "상품 상세페이지 제작", "상품 설명 AI 작성", "쇼츠 광고 제작", "마케팅 자동화"],
      },
      {
        title: "AI 음악 제작",
        items: ["Suno 사용법", "AI 작사 방법", "감성 음악 제작", "유튜브 BGM 만들기", "저작권 이해하기", "음원 수익화"],
      },
    ],
  },
  {
    title: "강의 소개",
    href: "#courses",
    children: [
      {
        title: "강의 한눈에 보기",
        items: ["강의 목표", "배우는 결과물", "추천 대상", "학습 기간"],
      },
      {
        title: "입문 과정",
        items: ["ChatGPT 기초", "AI 툴 사용법", "프롬프트 작성법", "초보자 세팅"],
      },
      {
        title: "실전 과정",
        items: ["AI 유튜브 제작", "쇼츠 자동화", "AI 음악 제작", "블로그 자동화", "수익화 전략"],
      },
      {
        title: "전문가 과정",
        items: ["AI 자동화 구축", "GPT 활용법", "API 연결", "업무 자동화", "AI 사업화"],
      },
    ],
  },
  {
    title: "수강생 후기",
    href: "#reviews",
    children: [
      {
        title: "실제 후기 모음",
        items: ["영상 후기", "수익 인증", "유튜브 성장 사례", "블로그 성장 사례"],
      },
      {
        title: "사례별 보기",
        items: ["AI 음악 채널 사례", "쇼핑몰 자동화 사례", "전/후 비교", "초보자 성공 사례", "인터뷰 콘텐츠"],
      },
    ],
  },
  {
    title: "무료 자료실",
    href: "#free-resources",
    children: [
      {
        title: "무료 프롬프트",
        items: ["ChatGPT 프롬프트", "Suno 프롬프트", "쇼츠 대본 프롬프트", "블로그 작성 프롬프트"],
      },
      {
        title: "무료 전자책",
        items: ["AI부업 가이드", "AI 유튜브 가이드", "쇼츠 제작법", "블로그 수익화"],
      },
    ],
  },
];
