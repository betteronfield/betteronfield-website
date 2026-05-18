export default function PolkoloniePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-40 px-6 md:px-16 overflow-hidden">

        {/* GLOWS */}
        <div className="absolute top-[-300px] left-[-300px] w-[1200px] h-[1200px] bg-lime-400/20 blur-[220px] rounded-full"></div>

        <div className="absolute bottom-[-300px] right-[-300px] w-[1200px] h-[1200px] bg-lime-400/20 blur-[220px] rounded-full"></div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05]">

          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(163,230,53,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.25) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
            BetterOnField 2026
          </p>

          <h1 className="text-6xl md:text-[120px] font-black uppercase leading-[0.9]">

            Letnie
            <br />

            <span className="text-lime-400 drop-shadow-[0_0_50px_rgba(163,230,53,1)]">
              Półkolonie
            </span>

          </h1>

          <p className="mt-10 text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Wyjątkowe półkolonie piłkarsko-motoryczne dla dzieci i młodzieży.
            Przygotowujemy zawodników do nowego sezonu poprzez trening techniki,
            szybkości, motoryki i pewności siebie na boisku.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-6 mt-14">

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdWhnVY-SDOjvTqTVENRyjjxuKjHFaHFHTha7osuIiGio-w-Q/viewform"
              target="_blank"
              className="bg-lime-400 text-black px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition shadow-[0_0_80px_rgba(163,230,53,1)]"
            >
              ⚽ Zapisz dziecko
            </a>

            <a
              href="https://wa.me/48535678992"
              target="_blank"
              className="border border-lime-400 text-lime-400 px-12 py-6 rounded-full font-black text-xl hover:bg-lime-400 hover:text-black transition"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* PROGRAM */}
      <section className="relative py-32 px-6 md:px-16 bg-[#050505]">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-24">

            <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
              Co robimy?
            </p>

            <h2 className="text-5xl md:text-8xl font-black uppercase">

              Program
              <span className="text-lime-400">
                {" "}Półkolonii
              </span>

            </h2>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "⚽ Treningi piłkarskie",
              "🏃‍♂️ Treningi motoryczne",
              "🔥 Treningi na piasku",
              "🥅 Siatkonoga i gry sportowe",
              "🤸 Nauka przewrotek i wolei",
              "🌴 Park Moczydło i aktywny wypoczynek",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#0d0d0d]/90 border border-lime-400/20 rounded-[35px] p-10 hover:border-lime-400 transition hover:shadow-[0_0_60px_rgba(163,230,53,0.2)]"
              >

                <h3 className="text-2xl font-black leading-relaxed">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
{/* CAMPS */}
<section className="relative py-32 px-6 md:px-16">

  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-20">

      <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
        Turnusy 2026
      </p>

      <h2 className="text-5xl md:text-7xl font-black uppercase">

        Terminy
        <span className="text-lime-400">
          {" "}Półkolonii
        </span>

      </h2>

    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

      {[
        {
          title: "Turnus 1",
          date: "29.06 - 03.07",
        },

        {
          title: "Turnus 2",
          date: "06.07 - 10.07",
        },

        {
          title: "Turnus 3",
          date: "13.07 - 17.07",
        },

        {
          title: "Turnus 4",
          date: "20.07 - 24.07",
        },

        {
          title: "Turnus 5",
          date: "27.07 - 31.07",
        },
      ].map((camp, index) => (

        <div
          key={index}
          className="relative bg-[#0d0d0d]/90 border border-lime-400/20 rounded-[35px] p-10 text-center overflow-hidden hover:border-lime-400 transition hover:scale-105"
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-lime-400/5 blur-[80px]"></div>

          <div className="relative z-10">

            <div className="text-5xl mb-5">
              📅
            </div>

            <p className="text-lime-400 font-black uppercase tracking-[3px] mb-4">
              {camp.title}
            </p>

            <h3 className="text-4xl font-black leading-tight">
              {camp.date}
            </h3>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
{/* DAILY PLAN */}
<section className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-black via-[#071107] to-black">

  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-20">

      <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
        Organizacja
      </p>

      <h2 className="text-5xl md:text-7xl font-black uppercase">

        Plan
        <span className="text-lime-400">
          {" "}Półkolonii
        </span>

      </h2>

      <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">
        Każdy dzień został zaplanowany tak, aby połączyć rozwój piłkarski,
        motoryczny, regenerację oraz świetną zabawę.
      </p>

    </div>

    {/* IMAGE */}
    <div className="relative">

      {/* GLOW */}
      <div className="absolute inset-0 bg-lime-400/10 blur-[120px] rounded-[40px]"></div>

      <div className="relative bg-[#0d0d0d]/70 backdrop-blur-md border border-lime-400/20 rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(163,230,53,0.15)]">

        <img
          src="/Plan polkoloni.png"
          alt="Plan półkolonii BetterOnField"
          className="w-full h-auto"
        />

      </div>

    </div>

  </div>

</section>
      {/* FOOD */}
      <section className="relative py-32 px-6 md:px-16">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
              Codziennie zapewniamy
            </p>

            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-10">

              Posiłki
              <br />

              <span className="text-lime-400">
                i regenerację
              </span>

            </h2>

            <div className="space-y-6 text-xl text-gray-300">

              <div className="flex items-center gap-4">
                <span className="text-lime-400">✅</span>
                Mała przekąska po porannym treningu
              </div>

              <div className="flex items-center gap-4">
                <span className="text-lime-400">✅</span>
                Obiad w restauracji Relax na AWF Warszawa
              </div>

              <div className="flex items-center gap-4">
                <span className="text-lime-400">✅</span>
                Odpowiednia regeneracja zawodników
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute inset-0 bg-lime-400/20 blur-[120px] rounded-[40px]"></div>

            <div className="relative bg-[#0d0d0d] border border-lime-400/20 rounded-[40px] p-14">

              <p className="text-gray-400 uppercase tracking-[5px] mb-6">
                Cena za turnus
              </p>

              <h3 className="text-7xl font-black text-lime-400 mb-10">
                1100 zł
              </h3>

              <div className="space-y-5 text-lg text-gray-300">

                <div className="flex justify-between border-b border-lime-400/10 pb-4">
                  <span>Obowiązkowy strój BetterOnField</span>
                  <span className="text-lime-400">W cenie</span>
                </div>

                <div className="flex justify-between border-b border-lime-400/10 pb-4">
                  <span>Zadatek</span>
                  <span className="text-lime-400">300 zł</span>
                </div>

                <div className="flex justify-between">
                  <span>Liczba miejsc</span>
                  <span className="text-lime-400">Ograniczona</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* DISCOUNTS */}
      <section className="relative py-32 px-6 md:px-16 bg-[#050505]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
              Rabaty
            </p>

            <h2 className="text-5xl md:text-7xl font-black uppercase">

              Zniżki
              <span className="text-lime-400">
                {" "}BetterOnField
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#0d0d0d] border border-lime-400/20 rounded-[35px] p-10 text-center">

              <div className="text-6xl font-black text-lime-400 mb-5">
                -120 zł
              </div>

              <p className="text-gray-300 text-lg">
                Rabat dla rodzeństwa
              </p>

            </div>

            <div className="bg-[#0d0d0d] border border-lime-400/20 rounded-[35px] p-10 text-center">

              <div className="text-6xl font-black text-lime-400 mb-5">
                -50 zł
              </div>

              <p className="text-gray-300 text-lg">
                Za każdy kolejny turnus
              </p>

            </div>

            <div className="bg-[#0d0d0d] border border-lime-400/20 rounded-[35px] p-10 text-center">

              <div className="text-6xl font-black text-lime-400 mb-5">
                -100 zł
              </div>

              <p className="text-gray-300 text-lg">
                Za polecenie nowego uczestnika
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* IMPORTANT */}
      <section className="relative py-32 px-6 md:px-16">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
            Ważne informacje
          </p>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-14">

            Jak wygląda
            <br />

            <span className="text-lime-400">
              zapis?
            </span>

          </h2>

          <div className="bg-[#0d0d0d]/90 border border-lime-400/20 rounded-[40px] p-12 text-left space-y-8 text-gray-300 text-lg leading-relaxed">

            <p>
              📌 Zadatek 300 zł jest bezzwrotny i płatny do 24 czerwca.
            </p>

            <p>
              📲 BLIK: 535 678 992
            </p>

            <p>
              💵 Możliwa również płatność gotówką.
            </p>

            <p>
              📝 Tytuł przelewu:
              „Zadatek na obóz – imię i nazwisko zawodnika – numer turnusu”
            </p>

            <p>
              ❗ Samo wypełnienie formularza NIE gwarantuje miejsca —
              decyduje wpłata zadatku.
            </p>

            <p>
              📩 Po zapisaniu przez formularz rodzice automatycznie otrzymają:
            </p>

            <div className="space-y-3 pl-6">

              <div>✅ zgody na półkolonie</div>
              <div>✅ wszystkie informacje organizacyjne</div>

            </div>

          </div>

          {/* CTA */}
          <div className="mt-16">

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdWhnVY-SDOjvTqTVENRyjjxuKjHFaHFHTha7osuIiGio-w-Q/viewform"
              target="_blank"
              className="inline-flex items-center gap-4 bg-lime-400 text-black px-14 py-6 rounded-full font-black text-2xl hover:scale-105 transition shadow-[0_0_80px_rgba(163,230,53,1)]"
            >

              ⚽ Formularz zgłoszeniowy

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}