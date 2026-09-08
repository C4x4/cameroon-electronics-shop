export function PromoBanners() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Pillar 1: Authenticity */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-md flex flex-col justify-between h-48 border-l-4 border-cameroon-green">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-cameroon-green">Quality Guarantee</span>
                        <h4 className="text-xl font-extrabold mt-1">100% Authentic Tech</h4>
                    </div>
                    <p className="text-xs text-slate-300">
                        Directly sourced premium devices with zero compromise on build quality.
                    </p>
                </div>

                {/* Pillar 2: Local Warranty */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-md flex flex-col justify-between h-48 border-l-4 border-cameroon-red">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-cameroon-red">Peace of Mind</span>
                        <h4 className="text-xl font-extrabold mt-1">Official Local Warranty</h4>
                    </div>
                    <p className="text-xs text-slate-300">
                        Backed by local repair support and manufacturer coverage in Cameroon.
                    </p>
                </div>

                {/* Pillar 3: Fast Delivery */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-md flex flex-col justify-between h-48 border-l-4 border-cameroon-yellow">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-cameroon-yellow">Direct Delivery</span>
                        <h4 className="text-xl font-extrabold mt-1">Douala & Yaoundé</h4>
                    </div>
                    <p className="text-xs text-slate-300">
                        Prompt, secure delivery right to your door or office location.
                    </p>
                </div>

            </div>
        </section>
    );
}