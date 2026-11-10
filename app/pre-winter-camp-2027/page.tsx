
export default function PreWinterCampPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#081208] to-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative py-24 md:py-36 px-5 sm:px-6 md:px-16 overflow-hidden">
        <div className="absolute top-[-250px] left-[-200px] w-[800px] h-[800px] bg-lime-400/20 blur-[200px] rounded-full" />
        <div className="absolute bottom-[-250px] right-[-200px] w-[800px] h-[800px] bg-lime-400/20 blur-[200px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <a href="/" className="text-gray-400 hover:text-lime-400 transition">
            ← Powrót na stronę główną
          </a>

          <p className="text-lime-400 uppercase tracking-[6px] font-black mt-14 mb-6">
            BetterOnField • Zima 2027
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.95]">
            PRE-WINTER
            <br />
            <span className="text-lime-400 drop-shadow-[0_0_35px_rgba(163,230,53,0.8)]">
              CAMP 2027
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Dwa dni pełne piłki nożnej, aktywności i zimowych atrakcji.
            Sport, ruch i świetna zabawa z BetterOnField!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <span className="border border-lime-400/30 bg-lime-400/10 rounded-full px-6 py-3 font-bold">
              📅 4–5 stycznia 2027
            </span>
            <span className="border border-lime-400/30 bg-lime-400/10 rounded-full px-6 py-3 font-bold">
              🕘 9:00–16:00
            </span>
            <span className="border border-lime-400/30 bg-lime-400/10 rounded-full px-6 py-3 font-bold">
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
        </div>
      </section>

      {/* DETAILS */}
      <section className="px-5 sm:px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["📍", "Miejsce zbiórki", "CRS Syrenka – Park Olszyna, Warszawa"],
            ["💰", "Cena", "499 zł za dwa dni"],
            ["🥪", "Wyżywienie", "Obiad, przekąski i napoje"],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="bg-[#0d0d0d] border border-lime-400/20 rounded-3xl p-8 text-center"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h2 className="text-xl font-black text-lime-400 uppercase mb-3">
                {title}
              </h2>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="px-5 sm:px-6 md:px-16 py-20 bg-[#050805]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-lime-400 uppercase tracking-[5px] font-black mb-4">
              Dwa dni, dwie przygody
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Co nas czeka?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden border border-lime-400/20 bg-[#0d0d0d] p-8 md:p-10">
              <p className="text-lime-400 font-black tracking-widest mb-4">
                DZIEŃ 1 • 4 STYCZNIA
              </p>
              <h3 className="text-3xl font-black uppercase mb-4">
                Hangar 646
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Trening piłkarski, wspólny wyjazd i aktywność na
                trampolinach. Na zakończenie dnia wracamy do sportowej
                rywalizacji na boisku.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-lime-400/20 bg-[#0d0d0d] p-8 md:p-10">
              <p className="text-lime-400 font-black tracking-widest mb-4">
                DZIEŃ 2 • 5 STYCZNIA
              </p>
              <h3 className="text-3xl font-black uppercase mb-4">
                Fort Żerań
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Trening piłkarski, wspólny posiłek i emocjonująca
                rozgrywka Laser Tag. Na koniec podsumowanie campu
                i sportowe zakończenie.
              </p>
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
