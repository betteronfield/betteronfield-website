
const signupUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfG_3KogVKXAmS6fdKyMSZzjTHCcKcdsVw1u2i_jKRK04CItA/viewform?usp=publish-editor";

const turns = [
  {
    number: "01",
    date: "1–5 lutego 2027",
    label: "I TURNUS",
  },
  {
    number: "02",
    date: "8–12 lutego 2027",
    label: "II TURNUS",
  },
];

export default function WinterCampPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050805] text-white">
      <style>{`
        @keyframes bof-snow {
          0% { transform: translate3d(0,-10vh,0); opacity: 0; }
          15% { opacity: .75; }
          85% { opacity: .65; }
          100% { transform: translate3d(35px,110vh,0); opacity: 0; }
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
        html { scroll-behavior: smooth; }
      `}</style>

      {/* TŁO */}
      <div className="bof-winter-background fixed inset-0 pointer-events-none z-0" />

      {/* ŚNIEG */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50" aria-hidden="true">
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

        {/* POWRÓT NA STRONĘ GŁÓWNĄ */}
        <div className="mx-auto max-w-6xl px-5 pt-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 transition hover:text-lime-400"
          >
            ← POWRÓT NA STRONĘ GŁÓWNĄ
          </a>
        </div>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 text-center md:pb-24 md:pt-24">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-lime-400">
            BETTERONFIELD • ZIMA 2027
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-8xl">
            WINTER
            <span className="block text-lime-400">CAMP 2027</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl font-black uppercase tracking-wide md:text-3xl">
            MAŁA GRUPA.
            <span className="text-lime-400"> WIELKIE EFEKTY.</span>
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
            Zimowy camp piłkarski, podczas którego stawiamy na jakość,
            indywidualne podejście i rozwój każdego zawodnika.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={signupUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-lime-400 px-8 py-4 font-black uppercase tracking-wide text-black transition hover:bg-lime-300"
            >
              Zapisz dziecko
            </a>
            <a
              href="#oferta"
              className="rounded-xl border border-white/20 px-8 py-4 font-bold transition hover:border-lime-400 hover:text-lime-400"
            >
              Poznaj ofertę
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["10", "uczestników maks."],
              ["5 DNI", "aktywnego campu"],
              ["9:15–16:00", "godziny"],
              ["1390 zł", "za turnus"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xl font-black text-lime-400 md:text-2xl">{value}</p>
                <p className="mt-1 text-xs text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MAŁA GRUPA */}
        <section id="oferta" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-lime-400">
                DLACZEGO WINTER CAMP?
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
                Tylko 10 miejsc
                <span className="block text-lime-400">w każdym turnusie.</span>
              </h2>
            </div>

            <div className="space-y-3 text-gray-300">
              <p>✓ Więcej uwagi dla każdego zawodnika.</p>
              <p>✓ Indywidualne wskazówki i informacja zwrotna.</p>
              <p>✓ Trening piłkarski i przygotowanie motoryczne.</p>
              <p>✓ Kameralna atmosfera i aktywnie spędzony czas.</p>
            </div>
          </div>
        </section>

        {/* TERMINY */}
        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-lime-400">
              FERIE ZIMOWE 2027
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
              Wybierz swój turnus
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {turns.map((turn) => (
              <div
                key={turn.number}
                className="rounded-2xl border border-lime-400/30 bg-lime-400/[0.04] p-7"
              >
                <p className="text-sm font-black tracking-widest text-lime-400">
                  {turn.label}
                </p>
                <p className="mt-3 text-3xl font-black md:text-4xl">
                  {turn.date}
                </p>
                <p className="mt-3 text-sm text-gray-400">
                  Poniedziałek – piątek • 9:15–16:00
                </p>
                <a
                  href={signupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block font-black text-lime-400 transition hover:text-lime-300"
                >
                  ZAPISZ SIĘ →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* PLAN ZAJĘĆ - GRAFIKA */}
        <section id="plan" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-widest text-lime-400">
                WINTER CAMP 2027
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
                Plan zajęć
              </h2>
              <p className="mt-3 text-gray-400">
                Pięć dni treningów, aktywności i sportowych wyzwań.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-lime-400/5">
              <img
                src="/winter-camp-plan-2027.png"
                alt="Plan zajęć Winter Camp BetterOnField 2027"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

       
{/* CENA I PŁATNOŚĆ */}
<section className="mx-auto max-w-6xl px-5 py-12">
  <div className="mx-auto max-w-3xl rounded-3xl border border-lime-400/30 bg-lime-400/[0.05] p-7 text-center md:p-10">
    <p className="text-sm font-black uppercase tracking-widest text-lime-400">
      INWESTYCJA W ROZWÓJ
    </p>

    <p className="mt-4 text-5xl font-black md:text-7xl">
      1390 <span className="text-2xl text-lime-400">PLN</span>
    </p>

    <p className="mt-3 text-gray-300">
      za jeden pięciodniowy turnus
    </p>

    {/* PŁATNOŚĆ */}
    <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-black/30 p-6 text-left">
      <h3 className="text-center text-lg font-black uppercase text-lime-400">
        Rezerwacja miejsca i płatność
      </h3>

      <div className="mt-5 text-center">
        <p className="text-sm font-bold uppercase text-gray-400">
          Zadatek rezerwacyjny
        </p>
        <p className="mt-1 text-5xl font-black text-lime-400">
          300 zł
        </p>
      </div>

      <div className="mt-6 space-y-3 text-sm leading-relaxed text-gray-300">
        <p>
          <strong className="text-white">BLIK na telefon:</strong>{" "}
          <span className="font-bold text-lime-400">535 678 992</span>
        </p>

        <p>
          W tytule płatności wpisz:{" "}
          <strong className="text-white">
            Zadatek – imię i nazwisko dziecka
          </strong>.
        </p>

        <p>
          Pozostałe <strong className="text-white">1090 zł</strong>{" "}
          regulowane jest na miejscu w pierwszym dniu turnusu.
        </p>

        <p>
          Istnieje również możliwość opłacenia całej kwoty
          <strong className="text-white"> 1390 zł </strong>
          na miejscu.
        </p>

        <p>
          Inna forma płatności możliwa po wcześniejszym uzgodnieniu
          z organizatorem.
        </p>
      </div>
    </div>

    {/* POLEĆ I ZYSKAJ */}
    <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-lime-400/30 bg-lime-400/[0.06] p-5">
      <p className="font-black uppercase tracking-wider text-lime-400">
        🤝 POLEĆ I ZYSKAJ!
      </p>
      <p className="my-2 text-4xl font-black text-lime-400">
        -50 zł
      </p>
      <p className="text-sm text-gray-300">
        Znajomy zapisuje się na camp? Ty otrzymujesz 50 zł rabatu!
      </p>
    </div>
  </div>
</section>


        {/* KOŃCOWE ZAPISY */}
        <section className="border-t border-white/10 px-5 py-14 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-lime-400">
            BETTERONFIELD
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black uppercase md:text-5xl">
            Zadbaj o rozwój swojego zawodnika tej zimy.
          </h2>

          <p className="mt-4 text-gray-400">
            Liczba miejsc ograniczona – maksymalnie 10 osób na turnus.
          </p>

          <a
            href={signupUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-xl bg-lime-400 px-9 py-4 font-black uppercase text-black transition hover:bg-lime-300"
          >
            Zapisz dziecko na Winter Camp
          </a>
        </section>

      </div>
    </main>
  );
}
