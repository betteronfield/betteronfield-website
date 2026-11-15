
export default function WinterCampPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050805] text-white">
      <style>{`
        @keyframes bof-snow {
          0% {
            transform: translate3d(0, -10vh, 0);
            opacity: 0;
          }
          15% { opacity: .75; }
          85% { opacity: .65; }
          100% {
            transform: translate3d(35px, 110vh, 0);
            opacity: 0;
          }
        }

        .bof-snow {
          position: absolute;
          top: -20px;
          border-radius: 50%;
          background: #d9f99d;
          box-shadow: 0 0 10px rgba(163,230,53,.65);
          animation: bof-snow linear infinite;
        }

        .bof-winter-background {
          background:
            radial-gradient(ellipse at 15% 15%, rgba(101,163,13,.10), transparent 40%),
            radial-gradient(ellipse at 85% 55%, rgba(16,185,129,.07), transparent 45%),
            #050805;
        }
      `}</style>

      <div
        className="bof-winter-background fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-50"
        aria-hidden="true"
      >
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            key={i}
            className="bof-snow"
            style={{
              left: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 9) * -1.7}s`,
              animationDuration: `${9 + (i % 7) * 2}s`,
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Tutaj dodamy zawartość strony Winter Camp 2027 */}
        <section className="mx-auto max-w-6xl px-5 py-20 text-center">
          <p className="mb-4 font-bold uppercase tracking-[0.3em] text-lime-400">
            BetterOnField przedstawia
          </p>

          <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
            Winter Camp
            <span className="block text-lime-400">2027</span>
          </h1>

          <p className="mt-6 text-xl font-bold md:text-2xl">
            MAŁA GRUPA. WIELKIE EFEKTY.
          </p>

          <p className="mt-4 text-gray-300">
            Zimowy camp piłkarski BetterOnField
          </p>
        </section>
      </div>
    </main>
  );
}
