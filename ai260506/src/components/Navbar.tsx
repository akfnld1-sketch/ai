/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Phone, MessageSquare, Menu, X } from "lucide-react";
import { CONTACT_INFO, NAV_MENU } from "../constants";

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center gap-3">
            <img 
              src={CONTACT_INFO.logoUrl} 
              alt="AI부업마스터 로고" 
              className="h-10 w-auto" 
              onError={(e) => {
                // Fallback if logo fails
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/40?text=AI";
              }}
            />
            <span className="text-xl font-black tracking-tighter text-indigo-900 hidden sm:block">
              AI 부업 마스터
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {NAV_MENU.map((item) => (
              <div 
                key={item.title} 
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-indigo-600 transition-colors py-8"
                >
                  {item.title}
                  {item.children && <ChevronDown className="h-4 w-4 opacity-50" />}
                </a>

                <AnimatePresence>
                  {activeMenu === item.title && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[800px] bg-white shadow-2xl rounded-2xl p-8 border border-gray-100 grid grid-cols-4 gap-8"
                    >
                      {item.children.map((childGroup) => (
                        <div key={childGroup.title}>
                          <h4 className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-4">{childGroup.title}</h4>
                          <ul className="space-y-3">
                            {childGroup.items.map((subItem) => (
                              <li key={subItem}>
                                <a href="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="hidden md:flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
            >
              <Phone className="h-4 w-4" />
              무료상담
            </a>
            <button
              onClick={onOpenInquiry}
              className="group relative flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-black text-white shadow-indigo-200 shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
            >
              강연문의
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
            </button>
            <button 
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_MENU.map((item) => (
                <div key={item.title} className="space-y-2">
                  <h3 className="font-bold text-indigo-900">{item.title}</h3>
                  <div className="pl-4 grid grid-cols-2 gap-4">
                    {item.children?.map(child => (
                      <div key={child.title} className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-gray-400">{child.title}</p>
                        {child.items.slice(0, 3).map(sub => (
                          <p key={sub} className="text-sm text-gray-600">{sub}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex-1 text-center py-3 bg-gray-50 rounded-xl font-bold flex items-center justify-center gap-2">
                  <Phone size={18} /> 전화상담
                </a>
                <a href="https://pf.kakao.com" className="flex-1 text-center py-3 bg-yellow-400 rounded-xl font-bold flex items-center justify-center gap-2">
                  <MessageSquare size={18} /> 카카오톡
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
