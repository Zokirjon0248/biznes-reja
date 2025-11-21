export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black/40">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-linear(rgba(0,0,0,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] mask-[radial-linear(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MSS Startup 2025
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold  tracking-tight">
              <span className="block bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-linear bg-size-[200%_auto]">
                Biznesingiz uchun
              </span>
              <span className="block mt-2 text-white">
                Professional sayt — osonlik bilan
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Kichik bizneslar va tadbirkorlarga arzon narxda, yuqori sifatli, zamonaviy veb-saytlar yaratamiz. Landing page, sotuv sayti, vizitka va katalog — hammasi 3-7 kun ichida tayyor.
            </p>

            {/* Features list */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Arzon narx', '3-7 kun ichida tayyor', 'Yuqori sifat'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <a href="https://portfoliogoose.netlify.app/" target="_blank">Sayt buyurtma berish</a>
                  
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              <a href="https://portfoliogoose.netlify.app/" target="_blank">
                Namunalarni ko'rish
                </a>
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black/40 bg-linear-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-300 font-medium">3+ mijoz • 98% qoniqish</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative order-1 lg:order-2">
            {/* Main card */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-linear-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-purple-400 to-blue-400 rounded-2xl opacity-20 blur-xl" />
              
              {/* Main visual card */}
              <div className="relative bg-linear-to-br from-white to-blue-50/50 rounded-3xl border border-slate-200 shadow-2xl shadow-blue-500/10 p-8 sm:p-10 lg:p-12 backdrop-blur-sm">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      3+
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Faol mijozlar</p>
                  </div>
                  <div className="bg-linear-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      98%
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Qoniqish darajasi</p>
                  </div>
                </div>

                {/* Feature showcase */}
                <div className="space-y-4">
                  {[
                    { icon: '⚡', title: '2 hafta ichida "Instagram"', desc: '150 obunachi, 24k ko\'rish' },
                    { icon: '💎', title: 'Arzon narxlar', desc: 'Bozordan 2-3 barobar arzon' },
                    { icon: '🚀', title: 'Tez tayyorlanadi', desc: '3-7 kun ichida tayyor sayt' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-linear-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm animate-bounce">
                  ✨ Sifatli va tejamkor
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer animate-bounce">
            <span className="text-xs font-medium uppercase tracking-wider">Pastga suring</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  )
}