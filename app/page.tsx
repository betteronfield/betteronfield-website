export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-[#081208] to-black text-white">

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-black via-[#071107] to-black">

        {/* GLOWS */}
        <div className="absolute top-[-400px] left-[-300px] w-[1200px] h-[1200px] bg-lime-400/20 blur-[250px] rounded-full"></div>

        <div className="absolute bottom-[-400px] right-[-300px] w-[1200px] h-[1200px] bg-lime-400/20 blur-[250px] rounded-full"></div>

        {/* SHAPES */}
        <div className="absolute left-[-250px] top-[200px] w-[600px] h-[600px] border border-lime-400/40 rotate-45 shadow-[0_0_120px_rgba(163,230,53,0.8)]"></div>

        <div className="absolute right-[-250px] top-[200px] w-[600px] h-[600px] border border-lime-400/40 rotate-45 shadow-[0_0_120px_rgba(163,230,53,0.8)]"></div>

        {/* NAVBAR */}
        <header className="relative z-50 flex items-center justify-between px-5 sm:px-6 md:px-16 py-5 md:py-6 border-b border-lime-400/10">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="logo"
              className="w-16 h-16 object-contain"
            />

            <div>

              <h1 className="text-3xl font-black uppercase">
                Better
                <span className="text-lime-400">
                  OnField
                </span>
              </h1>

              <p className="text-xs uppercase tracking-[4px] text-gray-300">
                Treningi piłkarsko-motoryczne
              </p>

            </div>

          </div>

          {/* MENU */}
          <nav className="hidden lg:flex gap-10 uppercase text-sm font-bold">

            <a
              href="#"
              className="text-lime-400 border-b border-lime-400 pb-2"
            >
              Strona główna
            </a>

            <a
              href="#oferta"
              className="hover:text-lime-400 transition"
            >
              Oferta
            </a>

            <a
              href="#omnie"
              className="hover:text-lime-400 transition"
            >
              O mnie
            </a>

            <a
              href="/polkolonie"
              className="hover:text-lime-400 transition"
            >
              Półkolonie
            </a>

            <a
              href="#kontakt"
              className="hover:text-lime-400 transition"
            >
              Kontakt
            </a>

          </nav>

          {/* BUTTON */}
          

        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-16">

          <div  className="grid md:grid-cols-2 gap-10 items-center min-h-screen pt-10">

            {/* LEFT */}
            <div>

              <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
                Treningi piłkarsko-motoryczne
              </p>

              <h1 className="text-7xl md:text-[150px] font-black uppercase leading-[0.9]">

                <span className="text-white">
                  Better
                </span>

                <br />

                <span className="text-lime-400 drop-shadow-[0_0_50px_rgba(163,230,53,1)]">
                  OnField
                </span>

              </h1>

              <p className="mt-8 text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Profesjonalne treningi dla dzieci i młodzieży w Warszawie.
                Rozwijamy szybkość, motorykę i pewność siebie zawodników.
              </p>

              {/* BUTTONS */}
              <div className="relative z-[999] flex flex-col sm:flex-row gap-5 mt-12">

                <a
  href="#kontakt"
  className="relative z-[999] w-full sm:w-auto text-center bg-lime-400 text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition shadow-[0_0_60px_rgba(163,230,53,1)] inline-block"
>

  Umów trening

</a>

                

              </div>

            </div>

{/* RIGHT PLAYER */}
<div
  className="
    pointer-events-none
    relative
    flex
    justify-center
    items-end
    z-0
    w-full
  "
>

  {/* GLOW */}
  <div className="absolute w-[700px] h-[700px] lg:w-[1700px] lg:h-[1700px] bg-lime-400/30 rounded-full blur-[180px] lg:blur-[250px]"></div>

  {/* PLAYER */}
  <img
    src="/player.png"
    alt="player"
    className="
      relative
      z-10
      w-[90%]
      max-w-[320px]
      sm:max-w-[420px]
      md:max-w-[520px]
      lg:max-w-[700px]
      object-contain
      mx-auto
      mt-10
      scale-100
      lg:scale-110
      drop-shadow-[0_0_120px_rgba(163,230,53,1)]
    "
  />

</div>

          </div>

        </div>

      </section>

      {/* OFFER SECTION */}
      <section
        id="oferta"
        className="relative py-40 px-6 md:px-16 overflow-hidden bg-[#050505]"
      >

        {/* BACKGROUND GLOWS */}
        <div className="absolute top-[-400px] left-[-300px] w-[1200px] h-[1200px] bg-lime-400/20 blur-[220px] rounded-full"></div>

        <div className="absolute bottom-[-500px] right-[-300px] w-[1200px] h-[1200px] bg-lime-400/20 blur-[220px] rounded-full"></div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.06]">

          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(163,230,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-24">

            <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
              Nasza oferta
            </p>

            <h2 className="text-4xl md:text-8xl font-black uppercase leading-none">

              Better
              <span className="text-lime-400 drop-shadow-[0_0_30px_rgba(163,230,53,1)]">
                {" "}OnField
              </span>

            </h2>

          </div>

      {/* CARDS */}
<div className="grid lg:grid-cols-3 gap-12 items-stretch">

  {/* CARD 1 */}
  <div className="relative bg-[#0c0c0c]/95 border border-lime-400/30 rounded-[40px] p-12 overflow-hidden hover:border-lime-400 transition duration-500 hover:shadow-[0_0_80px_rgba(163,230,53,0.25)]">

    <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-lime-400/20 blur-[120px] rounded-full"></div>

    <div className="relative z-10">

      <div className="flex items-center gap-6 mb-10">

        <div className="text-7xl">
          ⚽
        </div>

        <div>

          <p className="uppercase tracking-[4px] text-lime-400 text-sm font-black">
            Oferta główna
          </p>

          <h3 className="text-3xl md:text-5xl font-black leading-none break-words">
            Trening
            <br />
            <span className="text-lime-400">
              Piłkarsko-Motoryczny
            </span>
          </h3>

        </div>

      </div>

      {/* PRICES */}
      <div className="space-y-5 mb-10">

        <div className="flex justify-between items-center border-b border-lime-400/10 pb-4">
          <span className="text-xl text-gray-300">
            1 osoba
          </span>

          <span className="text-3xl font-black text-lime-400">
            150 zł
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-lime-400/10 pb-4">
          <span className="text-xl text-gray-300">
            2 osoby
          </span>

          <span className="text-3xl font-black text-lime-400">
            120 zł / os
          </span>
        </div>

        <div className="flex justify-between items-center pb-2">
          <span className="text-xl text-gray-300">
            3–6 osób
          </span>

          <span className="text-3xl font-black text-lime-400">
            100 zł / os
          </span>
        </div>

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-200 text-lg leading-relaxed mb-10">
        Trening dostosowany indywidualnie do każdego zawodnika.
        Rozwijamy technikę piłkarską, szybkość, dynamikę,
        motorykę oraz pewność siebie zawodnika.
      </p>

      {/* FEATURES */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-black/40 border border-lime-400/10 rounded-2xl p-4">
          ⚡ Sprint i szybkość
        </div>

        <div className="bg-black/40 border border-lime-400/10 rounded-2xl p-4">
          🎯 Strzał i podanie
        </div>

        <div className="bg-black/40 border border-lime-400/10 rounded-2xl p-4">
          🧠 Technika ogólna
        </div>

        <div className="bg-black/40 border border-lime-400/10 rounded-2xl p-4">
          💪 Motoryka i dynamika
        </div>

      </div>

    </div>

  </div>


  {/* CARD 2 - PROMOCJA */}
  <div className="relative bg-[#0c0c0c]/95 border border-lime-400/30 rounded-[40px] p-12 overflow-hidden hover:border-lime-400 transition duration-500 hover:shadow-[0_0_80px_rgba(163,230,53,0.25)]">

    <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-lime-400/20 blur-[120px] rounded-full"></div>

    <div className="relative z-10">

      <div className="flex items-center gap-6 mb-10">

        <div className="text-7xl">
          🔥
        </div>

        <div>

          <p className="uppercase tracking-[4px] text-lime-400 text-sm font-black">
            Oferta specjalna
          </p>

          <h3 className="text-3xl md:text-5xl font-black leading-none">
            Promocja
          </h3>

          <p className="text-gray-300 text-lg mt-2 font-bold uppercase">
            Dla nowych zawodników
          </p>

        </div>

      </div>

      <div className="rounded-2xl border border-lime-400/30 bg-black/40 p-5 text-center mb-8">

        <p className="text-lime-400 text-2xl font-black uppercase">
          2 pierwsze treningi
        </p>

        <p className="text-gray-400 mt-2">
          w specjalnej cenie
        </p>

      </div>

      {/* PROMO PRICES */}
      <div className="space-y-5 mb-8">

        <div className="flex justify-between items-center border-b border-lime-400/10 pb-4">
          <span className="text-xl text-gray-300">
            1 osoba
          </span>

          <span className="text-3xl font-black text-lime-400">
            120 zł
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-lime-400/10 pb-4">
          <span className="text-xl text-gray-300">
            2 osoby
          </span>

          <span className="text-3xl font-black text-lime-400">
            100 zł / os
          </span>
        </div>

        <div className="flex justify-between items-center pb-2">
          <span className="text-xl text-gray-300">
            3–6 osób
          </span>

          <span className="text-3xl font-black text-lime-400">
            80 zł / os
          </span>
        </div>

      </div>

      <p className="text-gray-400 text-sm leading-relaxed">
        Od 3. treningu obowiązuje standardowy cennik.
      </p>

    </div>

  </div>


  {/* CARD 3 - BONUS */}
  <div className="relative bg-[#0c0c0c]/95 border border-lime-400/30 rounded-[40px] p-12 overflow-hidden hover:border-lime-400 transition duration-500 hover:shadow-[0_0_80px_rgba(163,230,53,0.25)]">

    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-lime-400/20 blur-[120px] rounded-full"></div>

    <div className="relative z-10">

      <div className="flex items-center gap-6 mb-10">

        <div className="text-7xl">
          🏆
        </div>

        <div>

          <p className="uppercase tracking-[4px] text-lime-400 text-sm font-black">
            Dla stałych klientów
          </p>

          <h3 className="text-3xl md:text-5xl font-black leading-none">
            Bonus
            <br />
            <span className="text-lime-400">
              za regularność
            </span>
          </h3>

        </div>

      </div>

      <div className="rounded-2xl border border-lime-400/30 bg-black/40 p-8 text-center mb-8">

        <p className="text-gray-300 text-lg uppercase tracking-[3px] font-bold">
          Po
        </p>

        <p className="text-5xl font-black text-lime-400 mt-2">
          5 TRENINGACH
        </p>

        <p className="text-3xl font-black text-white mt-3">
          -50 zł
        </p>

        <p className="text-gray-300 mt-3">
          na kolejny trening
        </p>

      </div>

      <div className="space-y-4">

        <div className="flex items-center gap-4">
          <span className="text-lime-400 text-xl">✅</span>
          <span className="text-gray-200">
            Trenuj regularnie
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-lime-400 text-xl">✅</span>
          <span className="text-gray-200">
            Zbieraj treningi
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-lime-400 text-xl">✅</span>
          <span className="text-gray-200">
            Odbierz -50 zł
          </span>
        </div>

      </div>

      <p className="text-gray-400 text-sm leading-relaxed mt-8">
        Bonus obowiązuje dla stałych klientów po odbyciu 5 treningów.
      </p>

    </div>

  </div>

</div>

      </section>
{/* ABOUT SECTION */}
<section
  id="omnie"
  className="relative py-40 px-6 md:px-16 overflow-hidden bg-[#070707]"
>

  {/* GLOW BACKGROUNDS */}
  <div className="absolute top-[-300px] left-[-200px] w-[1200px] h-[1200px] bg-lime-400/20 blur-[220px] rounded-full"></div>

  <div className="absolute bottom-[-300px] right-[-200px] w-[1200px] h-[1200px] bg-lime-400/20 blur-[220px] rounded-full"></div>

  {/* GRID BACKGROUND */}
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

  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-24 items-center">

      {/* LEFT SIDE */}
      <div className="relative">

        {/* MAIN IMAGE */}
        <div className="relative rounded-[40px] overflow-hidden border border-lime-400/20 shadow-[0_0_100px_rgba(163,230,53,0.3)]">

          <img
            src="/trener.JPG"
            alt="Michael Kukulski"
            className="w-full h-auto object-contain"
          />

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div>

        <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
          O mnie
        </p>

        <h2 className="text-4xl md:text-8xl font-black uppercase leading-none mb-12">

          Michael
          <br />

          <span className="text-lime-400 drop-shadow-[0_0_30px_rgba(163,230,53,1)]">
            Kukulski
          </span>

        </h2>

        <div className="space-y-8 text-gray-200 text-lg leading-relaxed">

          <p>
            ⚽ Piłka nożna towarzyszy mi od najmłodszych lat.
            Zaczynałem w UKS Jedynka Krasnystaw,
            następnie rozwijałem się w Motorze Lublin,
            przechodząc szczeble centralne, wojewódzkie i makroregionalne.
          </p>

          <p>
            🏃‍♂️ Występowałem również w pierwszej drużynie Motoru Lublin
            na poziomie II ligi seniorów oraz reprezentowałem Ursus Warszawa.
            Obecnie gram w Gromie Warszawa.
          </p>

          <p>
            💪 BetterOnField stworzyłem z myślą o indywidualnym rozwoju zawodników.
            Skupiam się na poprawie motoryki, szybkości,
            dynamiki oraz przygotowania piłkarskiego.
          </p>

          <p>
            🎓 Ukończyłem AWF w Warszawie jako instruktor piłki nożnej
            i menedżer sportu. Aktualnie rozwijam się jako trener
            przygotowania motorycznego z dietetyką i psychologią sportu.
          </p>

          <p>
            🌍 Doświadczenie zdobywałem m.in. podczas staży
            w PAOK Academy w Grecji oraz Rayo Vallecano w Madrycie.
          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">

          <div className="bg-[#111111]/80 border border-lime-400/20 rounded-3xl p-8 text-center backdrop-blur-xl">

            <h3 className="text-5xl font-black text-lime-400">
              10+
            </h3>

            <p className="text-gray-300 mt-3 text-sm uppercase">
              Lat doświadczenia
            </p>

          </div>

          <div className="bg-[#111111]/80 border border-lime-400/20 rounded-3xl p-8 text-center backdrop-blur-xl">

            <h3 className="text-5xl font-black text-lime-400">
              100+
            </h3>

            <p className="text-gray-300 mt-3 text-sm uppercase">
              Treningów
            </p>

          </div>

          <div className="bg-[#111111]/80 border border-lime-400/20 rounded-3xl p-8 text-center backdrop-blur-xl">

            <h3 className="text-5xl font-black text-lime-400">
              PRO
            </h3>

            <p className="text-gray-300 mt-3 text-sm uppercase">
              Podejście
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* CONTACT SECTION */}
<section
  id="kontakt"
  className="relative py-40 px-6 md:px-16 overflow-hidden bg-black"
>

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

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-24">

      <p className="text-lime-400 uppercase tracking-[8px] font-black mb-6">
        Kontakt
      </p>

      <h2 className="text-6xl md:text-8xl font-black uppercase leading-none">

        Gotowy
        <br />

        <span className="text-lime-400 drop-shadow-[0_0_30px_rgba(163,230,53,1)]">
          wejść level wyżej?
        </span>

      </h2>

      <p className="mt-8 text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
        Napisz, zadzwoń lub odezwij się na WhatsApp.
        Razem rozwiniemy Twoją motorykę, szybkość i pewność siebie na boisku.
      </p>

    </div>

    {/* CONTACT BOXES */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* PHONE */}
      <div className="bg-[#0d0d0d]/90 border border-lime-400/20 rounded-[35px] p-10 text-center hover:border-lime-400 transition hover:shadow-[0_0_60px_rgba(163,230,53,0.25)]">

        <div className="text-6xl mb-6">
          📞
        </div>

        <h3 className="text-3xl font-black mb-4">
          Telefon
        </h3>

        <p className="text-gray-300 text-lg">
          +48 535 678 992
        </p>

      </div>

      {/* WHATSAPP */}
      <div className="bg-[#0d0d0d]/90 border border-lime-400/20 rounded-[35px] p-10 text-center hover:border-lime-400 transition hover:shadow-[0_0_60px_rgba(163,230,53,0.25)]">

        <div className="text-6xl mb-6">
          💬
        </div>

        <h3 className="text-3xl font-black mb-4">
          WhatsApp
        </h3>

        <a
          href="https://wa.me/48535678992"
          target="_blank"
          className="text-lime-400 text-lg hover:underline"
        >
          Napisz wiadomość
        </a>

      </div>

      {/* INSTAGRAM */}
      <div className="bg-[#0d0d0d]/90 border border-lime-400/20 rounded-[35px] p-10 text-center hover:border-lime-400 transition hover:shadow-[0_0_60px_rgba(163,230,53,0.25)]">

        <div className="text-6xl mb-6">
          📸
        </div>

        <h3 className="text-3xl font-black mb-4">
          Instagram
        </h3>

        <a
          href="https://www.instagram.com/betteronfield/"
          target="_blank"
          className="text-lime-400 text-lg hover:underline"
        >
          @betteronfield
        </a>

      </div>

      {/* FACEBOOK */}
      <div className="bg-[#0d0d0d]/90 border border-lime-400/20 rounded-[35px] p-10 text-center hover:border-lime-400 transition hover:shadow-[0_0_60px_rgba(163,230,53,0.25)]">

        <div className="text-6xl mb-6">
          👍
        </div>

        <h3 className="text-3xl font-black mb-4">
          Facebook
        </h3>

        <a
          href="https://www.facebook.com/BetterOnField/?locale=pl_PL"
          target="_blank"
          className="text-lime-400 text-lg hover:underline"
        >
          BetterOnField
        </a>

      </div>

    </div>

  {/* CTA */}
<div className="mt-24 text-center flex justify-center gap-3">

  <a
    href="https://wa.me/48535678992"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-40 sm:w-64 justify-center items-center gap-2 bg-lime-400 text-black px-4 sm:px-14 py-4 sm:py-6 rounded-full font-black text-base sm:text-2xl hover:scale-105 transition shadow-[0_0_30px_rgba(163,230,53,0.6)]"
  >
    🟢 Umów trening już dziś
  </a>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSc2SUqBX-jB5XUR0vQAktioumc216KvL-7uW_mXH3FqWxZqlg/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-40 sm:w-64 justify-center items-center gap-2 bg-lime-400 text-black px-4 sm:px-14 py-4 sm:py-6 rounded-full font-black text-base sm:text-2xl hover:scale-105 transition shadow-[0_0_30px_rgba(163,230,53,0.6)]"
  >
    📝 Wypełnij formularz
  </a>

</div>

  </div>

</section>
</main>
  );
}
