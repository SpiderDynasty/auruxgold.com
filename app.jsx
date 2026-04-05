export default function AuctionSite() {
  const featuredItems = [
    {
      id: 1,
      title: "Vintage hodinky",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
      currentBid: 320,
      buyNow: 590,
      timeLeft: "02h 14m",
      bids: 18,
      category: "Luxus",
    },
    {
      id: 2,
      title: "Retro fotoaparát",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
      currentBid: 145,
      buyNow: 260,
      timeLeft: "05h 49m",
      bids: 11,
      category: "Elektronika",
    },
    {
      id: 3,
      title: "Zberateľská gitara",
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80",
      currentBid: 870,
      buyNow: 1450,
      timeLeft: "01d 03h",
      bids: 27,
      category: "Hudba",
    },
    {
      id: 4,
      title: "Dizajnová stolička",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      currentBid: 210,
      buyNow: 390,
      timeLeft: "08h 22m",
      bids: 9,
      category: "Nábytok",
    },
  ];

  const categories = [
    "Všetko",
    "Elektronika",
    "Umenie",
    "Luxus",
    "Hudba",
    "Nábytok",
    "Šport",
  ];

  const steps = [
    {
      title: "Vyber si položku",
      text: "Prehliadaj aktívne aukcie, filtruj kategórie a nájdi to, čo chceš vydražiť.",
    },
    {
      title: "Prihoď alebo kúp hneď",
      text: "Zadaj svoju ponuku, sleduj aktuálnu cenu alebo využij okamžitý nákup.",
    },
    {
      title: "Vyhraj a dokonči platbu",
      text: "Po skončení dražby systém potvrdí víťaza a odošle ďalšie pokyny.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400 font-black text-slate-950 shadow-lg shadow-amber-400/20">
              D
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">DražbaX</p>
              <p className="text-xs text-slate-400">Moderná aukčná platforma</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#aukcie" className="text-sm text-slate-300 transition hover:text-white">
              Aukcie
            </a>
            <a href="#ako-to-funguje" className="text-sm text-slate-300 transition hover:text-white">
              Ako to funguje
            </a>
            <a href="#predaj" className="text-sm text-slate-300 transition hover:text-white">
              Predaj
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5">
              Prihlásiť sa
            </button>
            <button className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
              Začať dražiť
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1 text-sm font-medium text-amber-300">
                Živé aukcie každý deň
              </span>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
                Draž veci jednoducho, rýchlo a s prehľadom.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Platforma pre online dražbu zberateľských kúskov, elektroniky, umenia aj vybavenia do domácnosti.
                Sleduj aukcie v reálnom čase a prihadzuj bez chaosu.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-amber-400 px-6 py-3 text-base font-bold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:scale-[1.02]">
                  Prezrieť aukcie
                </button>
                <button className="rounded-2xl border border-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/5">
                  Pridať položku
                </button>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                <StatCard value="12 400+" label="registrovaných používateľov" />
                <StatCard value="1 850+" label="aktívnych aukcií" />
                <StatCard value="98%" label="úspešných predajov" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 top-8 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="absolute left-0 top-24 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80"
                  alt="Hlavná aukčná položka"
                  className="h-[380px] w-full rounded-[24px] object-cover"
                />
                <div className="mt-4 rounded-[24px] border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Top položka dňa</p>
                      <h2 className="mt-1 text-2xl font-bold">Limitovaná sneaker edícia</h2>
                    </div>
                    <span className="rounded-full bg-red-500/15 px-3 py-1 text-sm font-semibold text-red-300">
                      končí o 19m
                    </span>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <MiniStat label="Aktuálna cena" value="€740" />
                    <MiniStat label="Prihodení" value="34" />
                    <MiniStat label="Sleduje" value="128" />
                  </div>
                  <button className="mt-5 w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.01]">
                    Prihodiť teraz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="aukcie" className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Vyhľadávanie</p>
              <h3 className="mt-2 text-2xl font-bold">Nájdi správnu dražbu</h3>
            </div>
            <div className="grid w-full gap-3 md:max-w-3xl md:grid-cols-[1.2fr_0.8fr_0.6fr]">
              <input
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-amber-400/40"
                placeholder="Hľadať predmet, značku alebo kategóriu..."
              />
              <select className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-300 outline-none focus:border-amber-400/40">
                <option>Všetky kategórie</option>
                <option>Elektronika</option>
                <option>Luxus</option>
                <option>Nábytok</option>
                <option>Hudba</option>
              </select>
              <button className="rounded-2xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950">
                Filtrovať
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Aktívne dražby</p>
              <h2 className="mt-2 text-3xl font-bold">Odporúčané položky</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    category === "Všetko"
                      ? "bg-amber-400 text-slate-950"
                      : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredItems.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-lg transition hover:-translate-y-1 hover:border-amber-400/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="rounded-full bg-red-500/15 px-2.5 py-1 text-xs font-semibold text-red-300">
                      {item.timeLeft}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <InfoBox label="Aktuálna cena" value={`€${item.currentBid}`} />
                    <InfoBox label="Kúpiť hneď" value={`€${item.buyNow}`} />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                    <span>{item.bids} prihodení</span>
                    <span>Live dražba</span>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <button className="flex-1 rounded-2xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.02]">
                      Prihodiť
                    </button>
                    <button className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                      Detail
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="ako-to-funguje" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Ako to funguje</p>
              <h2 className="mt-3 text-3xl font-bold">Tri kroky k úspešnej dražbe</h2>
              <p className="mt-4 text-slate-300">
                Web je navrhnutý tak, aby sa v ňom rýchlo zorientoval kupujúci aj predávajúci.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 font-black text-slate-950">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="predaj" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-amber-400 to-yellow-300 p-8 text-slate-950">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">Pre predávajúcich</p>
              <h2 className="mt-3 text-3xl font-black">Pridaj predmet do aukcie za pár minút</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-900/80">
                Nahraj fotky, nastav minimálnu cenu, trvanie dražby a nechaj kupujúcich súťažiť o tvoju položku.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]">
                  Vytvoriť aukciu
                </button>
                <button className="rounded-2xl border border-slate-950/15 px-6 py-3 text-sm font-semibold text-slate-950">
                  Zistiť viac
                </button>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Dôvera a bezpečnosť</p>
              <ul className="mt-5 space-y-4 text-slate-300">
                <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">Overené účty a história prihodení</li>
                <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">Transparentné pravidlá aukcie a časovače</li>
                <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">Bezpečné dokončenie predaja a komunikácie</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-2 text-lg font-bold text-white">{value}</div>
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-bold text-white">{value}</div>
    </div>
  );
}
