export function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-slate-300 mt-20">
            {/* Cameroon Flag Color Accent Line */}
            <div className="flex h-1.5 w-full">
                <div className="h-full w-1/3 bg-cameroon-green"></div>
                <div className="h-full w-1/3 bg-cameroon-red"></div>
                <div className="h-full w-1/3 bg-cameroon-yellow"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
          <span className="text-xl font-black tracking-tight text-white flex items-center gap-2">
            FOOTY <span className="text-cameroon-red">LOUNGE</span>
          </span>
                    <p className="mt-4 text-xs text-slate-400">
                        Your destination for authentic electronics, gaming gear, consoles, and trusted local warranties in Cameroon.
                    </p>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
                    <ul className="mt-4 space-y-2 text-xs">
                        <li><a href="#catalog" className="hover:text-cameroon-yellow transition-colors">Gaming & Consoles</a></li>
                        <li><a href="#catalog" className="hover:text-cameroon-yellow transition-colors">Smartphones & Laptops</a></li>
                        <li><a href="#catalog" className="hover:text-cameroon-yellow transition-colors">Cameras & Optics</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">Customer Support</h4>
                    <ul className="mt-4 space-y-2 text-xs">
                        <li><a href="#" className="hover:text-cameroon-yellow transition-colors">Warranty Claims</a></li>
                        <li><a href="#" className="hover:text-cameroon-yellow transition-colors">Douala & Yaoundé Delivery</a></li>
                        <li><a href="#" className="hover:text-cameroon-yellow transition-colors">Contact Support</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">Store Location</h4>
                    <p className="mt-4 text-xs text-slate-400">
                        Douala & Yaoundé <br />
                        Cameroon
                    </p>
                </div>
            </div>

            <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
                &copy; {new Date().getFullYear()} Footy Lounge Cameroon. All rights reserved.
            </div>
        </footer>
    );
}