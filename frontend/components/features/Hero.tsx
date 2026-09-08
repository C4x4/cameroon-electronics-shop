export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white border-b border-gray-100 py-12 lg:py-20">
            {/* Background Decorative Glows */}
            <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-cameroon-green/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cameroon-yellow/10 blur-3xl pointer-events-none"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 rounded-full bg-cameroon-yellow/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 border border-cameroon-yellow/30 shadow-sm">
                            ✨ Cameroon's #1 Trusted Tech Marketplace
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
                            Best Electronic <br />
                            Product Online Shop <br />
                            <span className="bg-gradient-to-r from-amber-500 to-cameroon-yellow bg-clip-text text-transparent">
                in The World
              </span>
                        </h1>

                        <p className="text-base text-gray-600 max-w-lg leading-relaxed mx-auto lg:mx-0">
                            Our shop provides top-tier quality electronics with verified local warranties, transparent XAF pricing, and fast delivery across Douala & Yaoundé.
                        </p>

                        <div className="pt-2">
                            <a
                                href="#catalog"
                                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-cameroon-green hover:shadow-cameroon-green/20 active:scale-95"
                            >
                                Shop Collection &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Right Visual Card */}
                    <div className="lg:col-span-5 relative">
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cameroon-green via-cameroon-yellow to-cameroon-red opacity-30 blur-lg"></div>
                        <div className="relative bg-slate-900 rounded-3xl p-8 text-white shadow-2xl border border-slate-800 flex flex-col justify-between min-h-[320px] overflow-hidden">

                            <div className="flex justify-between items-start">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cameroon-yellow bg-cameroon-yellow/10 px-3 py-1 rounded-full border border-cameroon-yellow/20">
                  Featured Release
                </span>
                                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span> In Stock
                </span>
                            </div>

                            <div className="my-6">
                                <h3 className="text-3xl font-black tracking-tight">Next-Gen Flagships</h3>
                                <p className="mt-2 text-sm text-slate-300">
                                    Experience elite performance, professional camera systems, and extended battery life.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
                                <span>Verified Authentic</span>
                                <span className="text-cameroon-yellow">Official Warranty</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}