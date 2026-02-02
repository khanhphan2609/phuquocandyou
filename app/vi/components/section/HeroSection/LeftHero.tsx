"use client";

export default function LeftHero() {
  return (
    <div className="w-full max-w-md lg:max-w-none lg:w-[500px] xl:w-[580px] flex-shrink-0 lg:mr-auto z-20 mb-8 lg:mb-0">
      <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,21,36,0.5)] bg-white/10 backdrop-blur-2xl border border-white/20 aspect-[4/5.2] flex flex-col hover:border-white/40 transition-all group">
        {/* Image */}
        <div className="relative w-full h-[48%] shrink-0 overflow-hidden">
          <img
            id="content-image"
            src="https://images.unsplash.com/photo-1589394815804-964ed9be2eb3?q=80&w=1000&auto=format&fit=crop"
            className="w-full h-full object-cover transition-all duration-1000 animate-in fade-in zoom-in-105"
            alt="Phú Quốc"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#001524]/80 via-transparent to-transparent" />

          <div
            id="content-tag"
            className="absolute top-8 left-8 px-5 py-2 rounded-full backdrop-blur-xl border border-white/30 text-[11px] font-black uppercase tracking-[0.3em] text-white"
          />
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col flex-1">
          <h2
            id="content-title"
            className="text-4xl lg:text-2xl xl:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl italic"
          />

          <div className="relative mb-8 flex-1">
            <p
              id="content-description"
              className="text-blue-50/90 text-xl xl:text-2xl leading-relaxed font-medium drop-shadow-md border-l-2 border-cyan-400 pl-6"
            />
          </div>

          <div className="mt-auto space-y-4">
            <button
              id="explore-btn"
              className="group w-full py-5 text-white font-black text-[11px] lg:text-xs uppercase tracking-[0.4em] rounded-[1.5rem] shadow-2xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-all"
            >
              <i
                data-lucide="sparkles"
                className="w-4.5 h-4.5 animate-pulse"
              />
              <span id="btn-text">Bắt đầu hành trình</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
