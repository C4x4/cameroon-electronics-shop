"use client";

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export function Navbar() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            {/* Cameroon Flag Color Accent Line */}
            <div className="flex h-1 w-full">
                <div className="h-full w-1/3 bg-cameroon-green"></div>
                <div className="h-full w-1/3 bg-cameroon-red"></div>
                <div className="h-full w-1/3 bg-cameroon-yellow"></div>
            </div>

            {/* Top Header: Logo, Search Bar, Cart/Account */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 gap-4">

                {/* Custom Footy Lounge Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-black shadow-md transition-transform group-hover:scale-105">
                        <span className="text-cameroon-green">F</span>
                        <span className="text-cameroon-yellow">L</span>
                    </div>
                    <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-gray-900 leading-none">
              FOOTY <span className="text-cameroon-red">LOUNGE</span>
            </span>
                        <span className="text-[9px] font-semibold uppercase tracking-widest text-gray-400 mt-1">
              Tech, Gaming & Gear
            </span>
                    </div>
                </Link>

                {/* Central Search Bar (Hidden on very small screens, responsive) */}
                <div className="hidden md:flex relative flex-1 max-w-md mx-4">
                    <input
                        type="text"
                        placeholder={language === 'en' ? "Search consoles, phones, gear..." : "Rechercher consoles, téléphones..."}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 pl-10 text-sm focus:border-cameroon-green focus:bg-white focus:outline-none"
                    />
                    <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Right Utility Links & Language Toggle */}
                <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <button className="hidden sm:flex items-center gap-1.5 hover:text-cameroon-green transition-colors">
                        🛒 <span className="text-xs">{language === 'en' ? 'Cart' : 'Panier'}</span>
                    </button>
                    <button className="hidden sm:flex items-center gap-1.5 hover:text-cameroon-green transition-colors">
                        👤 <span className="text-xs">{language === 'en' ? 'Account' : 'Compte'}</span>
                    </button>

                    {/* Language Switcher */}
                    <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
                        <button
                            onClick={() => toggleLanguage('en')}
                            className={`rounded px-2 py-0.5 text-xs font-bold transition-all ${
                                language === 'en' ? 'bg-cameroon-green text-white' : 'text-gray-600'
                            }`}
                        >
                            ENG
                        </button>
                        <button
                            onClick={() => toggleLanguage('fr')}
                            className={`rounded px-2 py-0.5 text-xs font-bold transition-all ${
                                language === 'fr' ? 'bg-cameroon-green text-white' : 'text-gray-600'
                            }`}
                        >
                            FR
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Strip */}
            <div className="bg-[#E2ECF5] border-t border-gray-200/60 overflow-x-auto">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                    <nav className="flex items-center gap-6">
                        <Link href="/" className="text-cameroon-green hover:underline">
                            {language === 'en' ? 'Home' : 'Accueil'}
                        </Link>
                        <Link href="#catalog" className="hover:text-cameroon-green transition-colors">
                            {language === 'en' ? 'Gaming' : 'Jeux'}
                        </Link>
                        <Link href="#catalog" className="hover:text-cameroon-green transition-colors">
                            {language === 'en' ? 'Smartphones' : 'Smartphones'}
                        </Link>
                        <Link href="#catalog" className="hover:text-cameroon-green transition-colors">
                            {language === 'en' ? 'Cameras' : 'Caméras'}
                        </Link>
                        <Link href="#catalog" className="hover:text-cameroon-green transition-colors">
                            {language === 'en' ? 'Accessories' : 'Accessoires'}
                        </Link>
                    </nav>

                    <div className="hidden lg:block text-xs font-medium text-gray-600">
                        📞 {language === 'en' ? 'Support: +237 ...' : 'Assistance: +237 ...'}
                    </div>
                </div>
            </div>
        </header>
    );
}