import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-gray-50 text-gray-900" suppressHydrationWarning={true}>
        <LanguageProvider>
            <div className="flex min-h-screen flex-col justify-between">
                <div>
                    <Navbar />
                    {children}
                </div>
                <Footer />
            </div>
        </LanguageProvider>
        </body>
        </html>
    );
}