

export default function PreWinterCampPage() {
  return (
    <main className="relative min-h-screen bg-[#050805] text-white overflow-hidden">

      <style>{`
        @keyframes bof-snow {
          0% {
            transform: translate3d(0,-10vh,0);
            opacity: 0;
          }
          15% { opacity: .75; }
          85% { opacity: .65; }
          100% {
            transform: translate3d(35px,110vh,0);
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

      {/* WSPÓLNE ZIMOWE TŁO */}
      <div
        className="bof-winter-background fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* ŚNIEG NA CAŁEJ STRONIE */}
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

    

      {/* HERO – WINTER EDITION */}
      <section className="relative py-24 md:py-36 px-5 sm:px-6 md:px-16 overflow-hidden bg-gradient-to-b from-[#07100a] via-[#050805] to-black">

        <style>{`
          @keyframes bof-snow {
            0% { transform: translate3d(0,-10vh,0); opacity: 0; }
            15% { opacity: .8; }
            85% { opacity: .7; }
            100% { transform: translate3d(35px,110vh,0); opacity: 0; }
          }
          .bof-snow {
            position: absolute;
            top: -20px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #d9f99d;
            box-shadow: 0 0 10px rgba(163,230,53,.8);
            animation: bof-snow linear infinite;
          }
        `}</style>

        {/* ZIMOWE ŚWIATŁA */}
        <div className="absolute top-[-250px] left-[-200px] w-[700px] h-[700px] bg-lime-400/15 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-emerald-500/10 blur-[180px] rounded-full" />

        {/* ŚNIEG */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {Array.from({ length: 35 }).map((_, i) => (
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

        {/* TREŚĆ HERO */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <a href="/" className="text-gray-400 hover:text-lime-400 transition">
            ← Powrót na stronę główną
          </a>

          <div className="mt-14 mb-6 flex items-center justify-center gap-3">
            <span className="text-lime-400 text-xl">✦</span>
            <p className="text-lime-400 uppercase tracking-[6px] font-black">
              BetterOnField • Winter Edition 2027
            </p>
            <span className="text-lime-400 text-xl">✦</span>
          </div>

          <p className="text-gray-400 uppercase tracking-[5px] text-xs sm:text-sm font-bold mb-5">
            Zimowa przygoda zaczyna się tutaj
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.95]">
            PRE-WINTER
            <br />
            <span className="text-lime-400 drop-shadow-[0_0_35px_rgba(163,230,53,0.8)]">
              CAMP 2027
            </span>
          </h1>

          <div className="w-24 h-1 bg-lime-400 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(163,230,53,0.8)]" />

          <p className="mt-8 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dwa dni pełne piłki nożnej, aktywności i zimowych atrakcji.
            Sport, ruch i świetna zabawa z BetterOnField!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <span className="border border-lime-400/30 bg-lime-400/10 backdrop-blur-sm rounded-full px-6 py-3 font-bold shadow-[0_0_20px_rgba(163,230,53,0.08)]">
              📅 4–5 stycznia 2027
            </span>
            <span className="border border-lime-400/30 bg-lime-400/10 backdrop-blur-sm rounded-full px-6 py-3 font-bold shadow-[0_0_20px_rgba(163,230,53,0.08)]">
              🕘 9:00–16:00
            </span>
            <span className="border border-lime-400/30 bg-lime-400/10 backdrop-blur-sm rounded-full px-6 py-3 font-bold shadow-[0_0_20px_rgba(163,230,53,0.08)]">
              👥 Maks. 16 dzieci
            </span>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeeiq0wtvXixYe828eswYu1j8t02dzv8__DALGnLVsoXrFtfw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-12 bg-lime-400 text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition shadow-[0_0_50px_rgba(163,230,53,0.6)]"
          >
            ⚽ ZAPISZ DZIECKO
          </a>

          <p className="text-gray-500 text-xs uppercase tracking-[3px] mt-8">
            BetterOnField • Football • Performance • Development
          </p>
        </div>
      </section>


     
      {/* DETAILS – WINTER EDITION */}
      <section className="relative px-5 sm:px-6 md:px-16 py-20 bg-gradient-to-b from-black via-[#081208] to-[#050805] overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-lime-400/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            ["📍", "Miejsce zbiórki", "CRS Syrenka – Park Olszyna, Warszawa"],
            ["💰", "Cena", "499 zł za dwa dni"],
            ["🥪", "Wyżywienie", "Obiad, przekąski i napoje"],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="group relative bg-[#0b100b]/90 backdrop-blur-md border border-lime-400/25 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/70 hover:shadow-[0_0_40px_rgba(163,230,53,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 blur-[55px] rounded-full opacity-60 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                <div className="text-4xl mb-5 group-hover:scale-110 transition duration-300">
                  {icon}
                </div>

                <h2 className="text-lg md:text-xl font-black text-lime-400 uppercase mb-4 tracking-wide">
                  {title}
                </h2>

                <div className="w-12 h-1 bg-lime-400/70 rounded-full mx-auto mb-5 group-hover:w-20 transition-all duration-300" />

                <p className="text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      
      {/* ATTRACTIONS – WINTER EDITION */}
      <section className="relative px-5 sm:px-6 md:px-16 py-24 bg-gradient-to-b from-[#050805] via-[#081208] to-[#050805] overflow-hidden">

        <div className="absolute top-0 left-[-150px] w-[450px] h-[450px] bg-lime-400/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-[-150px] w-[450px] h-[450px] bg-emerald-400/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-lime-400 uppercase tracking-[5px] font-black mb-4">
              Dwa dni, dwie przygody
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Co nas <span className="text-lime-400">czeka?</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Zimowy camp, sportowe emocje i atrakcje, których nie da się zapomnieć.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="group relative rounded-3xl overflow-hidden border border-lime-400/20 bg-[#0b100b] p-8 md:p-10 transition-all duration-500 hover:border-lime-400/70 hover:shadow-[0_0_45px_rgba(163,230,53,0.15)] hover:-translate-y-2">

              <div className="absolute top-0 right-0 w-48 h-48 bg-lime-400/10 blur-[70px] rounded-full group-hover:bg-lime-400/20 transition" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lime-400 font-black tracking-widest text-sm">
                    DZIEŃ 1 • 4 STYCZNIA
                  </span>
                  <span className="text-3xl">❄️</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase mb-5 group-hover:text-lime-400 transition">
                  Hangar 646
                </h3>

                <div className="w-16 h-1 bg-lime-400 rounded-full mb-6 shadow-[0_0_15px_rgba(163,230,53,0.7)]" />

                <p className="text-gray-300 leading-relaxed text-lg">
                  Trening piłkarski, wspólny wyjazd i aktywność na
                  trampolinach. Na zakończenie dnia wracamy do sportowej
                  rywalizacji na boisku.
                </p>

                <p className="text-lime-400 font-bold mt-8 uppercase tracking-wider text-sm">
                  Trampoliny • Sport • Energia
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-lime-400/20 bg-[#0b100b] p-8 md:p-10 transition-all duration-500 hover:border-lime-400/70 hover:shadow-[0_0_45px_rgba(163,230,53,0.15)] hover:-translate-y-2">

              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/10 blur-[70px] rounded-full group-hover:bg-lime-400/20 transition" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lime-400 font-black tracking-widest text-sm">
                    DZIEŃ 2 • 5 STYCZNIA
                  </span>
                  <span className="text-3xl">🎯</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase mb-5 group-hover:text-lime-400 transition">
                  Fort Żerań
                </h3>

                <div className="w-16 h-1 bg-lime-400 rounded-full mb-6 shadow-[0_0_15px_rgba(163,230,53,0.7)]" />

                <p className="text-gray-300 leading-relaxed text-lg">
                  Trening piłkarski, wspólny posiłek i emocjonująca
                  rozgrywka Laser Tag. Na koniec podsumowanie campu
                  i sportowe zakończenie.
                </p>

                <p className="text-lime-400 font-bold mt-8 uppercase tracking-wider text-sm">
                  Laser Tag • Rywalizacja • Emocje
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


     
      {/* PLAN ZAJĘĆ – GRAFIKA */}
      <section className="px-5 sm:px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lime-400 uppercase tracking-[5px] font-black mb-4">
              Organizacja
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Plan <span className="text-lime-400">campu</span>
            </h2>
            <p className="text-gray-400 mt-5 text-base md:text-lg">
              Szczegółowy harmonogram dwóch dni Pre-Winter Camp 2027.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-lime-400/20 shadow-[0_0_60px_rgba(163,230,53,0.12)] bg-[#0d0d0d]">
            <img
              src="/Szczeg%C3%B3%C5%82owy%20plan%20campu%20sportowego%202027.png"
              alt="Szczegółowy plan zajęć Pre-Winter Camp 2027"
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-gray-500 text-sm text-center mt-6">
            Harmonogram może ulec niewielkim zmianom organizacyjnym.
          </p>
        </div>
      </section>


      {/* PAYMENT */}
      <section className="px-5 sm:px-6 md:px-16 py-20 bg-[#050805]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lime-400 uppercase tracking-[5px] font-black mb-4">
            Rezerwacja miejsca
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-lime-400 mb-8">
            499 zł
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Cena obejmuje udział w obu dniach campu, atrakcje,
            obiad, przekąski i napoje.
          </p>

          <div className="bg-[#0d0d0d] border border-lime-400/20 rounded-3xl p-8 text-left space-y-4 mb-10">
            <div className="flex justify-between gap-4">
              <span className="text-gray-300">Zaliczka rezerwacyjna</span>
              <strong className="text-lime-400">150 zł</strong>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-300">Pozostała kwota</span>
              <strong className="text-lime-400">349 zł</strong>
            </div>
            <p className="text-gray-400 text-sm pt-3 border-t border-white/10">
              Pozostała kwota płatna 4 stycznia 2027 r.,
              w pierwszym dniu campu.
            </p>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeeiq0wtvXixYe828eswYu1j8t02dzv8__DALGnLVsoXrFtfw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-lime-400 text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition"
          >
            📝 FORMULARZ ZGŁOSZENIOWY
          </a>

          <p className="text-gray-500 text-sm mt-8">
            Liczba miejsc ograniczona do 16 uczestników.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-lime-400/10 py-10 px-5 text-center">
        <p className="font-black text-2xl uppercase">
          Better<span className="text-lime-400">OnField</span>
        </p>
        <p className="text-gray-500 text-sm mt-3">
          Treningi piłkarsko-motoryczne • Warszawa
        </p>
        <a
          href="https://wa.me/48535678992"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lime-400 mt-5 hover:underline"
        >
          Kontakt przez WhatsApp
        </a>
      </footer>
    </main>
  );
}
