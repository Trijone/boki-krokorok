import Image from "next/image";

const galleryImages = [
  {
    src: "/images/bend-krokodilosi.jpg",
    alt: "Bend Kroko-ROKodilosi na sceni",
    wide: true,
  },
  {
    src: "/images/bis-krokodilosi.jpg",
    alt: "Bis na predstavi",
    wide: true,
  },
  {
    src: "/images/mikrofon.jpg",
    alt: "Boki sa mikrofonom",
    wide: false,
  },
  {
    src: "/images/koza-jakna.jpg",
    alt: "Boki kao poslednji roker",
    wide: false,
  },
  {
    src: "/images/bubanj.jpg",
    alt: "Boki za bubnjem",
    wide: false,
  },
  {
    src: "/images/dresovi.jpg",
    alt: "Scena sa dresovima",
    wide: false,
  },
  {
    src: "/images/trio-sklekovi.jpg",
    alt: "Kroko-ROKodilosi na sceni",
    wide: true,
  },
  {
    src: "/images/gitara-klek.jpg",
    alt: "Gitarista na sceni",
    wide: false,
  },
  {
    src: "/images/boki-palac.jpg",
    alt: "Boki pozdravlja publiku",
    wide: false,
  },
  {
    src: "/images/deca-na-sceni.jpg",
    alt: "Deca na sceni",
    wide: true,
  },
  {
    src: "/images/publika.jpg",
    alt: "Publika i deca na sceni",
    wide: true,
  },
];

export default function LatPage() {
  return (
    <main className="min-h-screen bg-[#f8edcf] text-[#202020]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b-4 border-[#202020] bg-[#f8edcf]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-8 md:py-4">
          <a
            href="/lat"
            className="text-center text-lg font-black leading-tight md:text-left md:text-2xl"
          >
            Boki i <span className="text-[#0aa56a]">Kroko-ROKodilosi</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-2 text-xs font-extrabold md:gap-6 md:text-sm">
            <a
              href="#o-predstavi"
              className="rounded-full border-2 border-[#202020] bg-white px-3 py-1 hover:bg-[#ffe066]"
            >
              O predstavi
            </a>
            <a
              href="#rok-zakletva"
              className="rounded-full border-2 border-[#202020] bg-white px-3 py-1 hover:bg-[#ffe066]"
            >
              Rok zakletva
            </a>
            <a
              href="#prodavnica"
              className="rounded-full border-2 border-[#202020] bg-[#f04d38] px-3 py-1 text-white hover:bg-[#d63d2c]"
            >
              Prodavnica
            </a>
            <a
              href="#galerija"
              className="rounded-full border-2 border-[#202020] bg-white px-3 py-1 hover:bg-[#ffe066]"
            >
              Galerija
            </a>
            <a
              href="#gostovanja"
              className="rounded-full border-2 border-[#202020] bg-white px-3 py-1 hover:bg-[#ffe066]"
            >
              Gostovanja
            </a>
            <a
              href="/"
              className="rounded-full border-2 border-[#202020] bg-[#ffe066] px-3 py-1 font-black hover:bg-white"
            >
              Ћир
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-10 md:px-8 md:py-20">
        <div className="absolute left-4 top-8 rotate-[-20deg] text-4xl text-[#e54b39] md:text-7xl">
          ♪
        </div>
        <div className="absolute right-5 top-28 rotate-[18deg] text-4xl text-[#0aa56a] md:text-7xl">
          ♫
        </div>
        <div className="absolute bottom-10 left-1/2 rotate-[12deg] text-4xl text-[#e2b31d] md:text-7xl">
          ♬
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-block -rotate-2 rounded-full bg-[#28c7c0] px-6 py-3 text-xs font-black uppercase tracking-wide text-white shadow-[5px_5px_0_#202020] md:text-base">
              Mjuzikl za decu
            </div>

            <h1 className="text-4xl font-black leading-[0.95] sm:text-5xl md:text-7xl">
              <span className="block text-[#d63d2c]">Boki i</span>
              <span className="mt-2 block text-[#0aa56a]">
                Kroko-ROKodilosi
              </span>
            </h1>

            <div className="mt-6 inline-block rotate-1 rounded-full border-4 border-[#202020] bg-[#fff9ea] px-5 py-3 text-base font-black shadow-[5px_5px_0_#202020] md:text-2xl">
              poslednji roker na planeti
            </div>

            <p className="mt-7 max-w-2xl text-base font-bold leading-8 md:text-xl">
              Boki je poslednji roker na planeti. U potrazi za izgubljenim
              rokenrolom, zajedno sa Kroko-ROKodilosima stiže pred decu,
              pokreće svirku, priču i veliku rok avanturu.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 md:text-lg">
              Deca ne sede mirno i ne gledaju sa strane — ona pevaju, igraju,
              odgovaraju, polažu <strong>rok zakletvu</strong> i postaju pravi
              mali rokeri.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#gostovanja"
                className="rounded-full border-4 border-[#202020] bg-[#f04d38] px-7 py-4 text-center font-black text-white shadow-[6px_6px_0_#202020] transition hover:-translate-y-1"
              >
                Zakažite gostovanje
              </a>

              <a
                href="#prodavnica"
                className="rounded-full border-4 border-[#202020] bg-[#ffe066] px-7 py-4 text-center font-black shadow-[6px_6px_0_#202020] transition hover:-translate-y-1"
              >
                Prodavnica
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 h-20 w-20 rounded-full bg-[#28c7c0] md:h-32 md:w-32" />
            <div className="absolute -right-3 bottom-8 h-20 w-20 rounded-full bg-[#ffe066] md:h-28 md:w-28" />

            <div className="relative rotate-1 rounded-[2rem] border-4 border-[#202020] bg-white p-3 shadow-[10px_10px_0_#202020] md:p-4">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#d9f6f5]">
                <Image
                  src="/images/boki-kroko-rokodilosi.png"
                  alt="Boki Kroko-ROKodilos"
                  fill
                  priority
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO MAIN PHOTOS */}
      <section className="px-5 pb-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <WidePhotoCard
            src="/images/bend-krokodilosi.jpg"
            alt="Bend Kroko-ROKodilosi na sceni"
          />
          <WidePhotoCard
            src="/images/bis-krokodilosi.jpg"
            alt="Bis na predstavi"
          />
        </div>
      </section>

      {/* O PREDSTAVI */}
      <section
        id="o-predstavi"
        className="bg-[#0aa56a] px-5 py-16 text-white md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Rokenrol predstava u kojoj deca postaju deo benda
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 md:text-xl">
            „Boki i Kroko-ROKodilosi“ je muzičko-scenska i multimedijalna
            predstava za decu. To je koncert, pozorišna igra i avantura u kojoj
            se traži izgubljeni rokenrol.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Priča"
              text="Boki, poslednji roker na planeti, kreće u potragu za rokenrolom."
            />
            <InfoCard
              title="Svirka"
              text="Kroko-ROKodilosi donose živu energiju, ritam i koncertni duh."
            />
            <InfoCard
              title="Deca"
              text="Publika peva, igra, odgovara i postaje deo predstave."
            />
          </div>
        </div>
      </section>

      {/* ROK ZAKLETVA */}
      <section id="rok-zakletva" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-[#202020] bg-white p-3 shadow-[8px_8px_0_#202020]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-black">
              <Image
                src="/images/deca-na-sceni.jpg"
                alt="Deca na sceni sa Bokijem"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black md:text-5xl">Rok zakletva</h2>

            <p className="mt-6 text-base leading-8 md:text-xl">
              Na kraju avanture deca polažu rok zakletvu. To je trenutak kada
              publika više nije samo publika — deca postaju pravi rokeri,
              čuvari ritma, smeha i dobre energije.
            </p>

            <div className="mt-8 rounded-[1.5rem] border-4 border-[#202020] bg-[#ffe066] p-6 shadow-[6px_6px_0_#202020]">
              <p className="text-lg font-black md:text-xl">
                Ko položi rok zakletvu — ulazi u družinu Kroko-ROKodilosa!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODAVNICA */}
      <section
        id="prodavnica"
        className="bg-[#f04d38] px-5 py-16 text-white md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl">Boki prodavnica</h2>

          <p className="mt-5 max-w-3xl text-base leading-8 md:text-xl">
            Majice, igračke, nalepnice i pokloni za male rokere i članove
            Kroko-ROKodilos družine.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ShopCard
              title="Majice"
              text="Za decu koja su položila rok zakletvu."
            />
            <ShopCard
              title="Igračke"
              text="Kroko-ROKodilosi kao drugari za poneti kući."
            />
            <ShopCard
              title="Pokloni"
              text="Posteri, nalepnice i mali rok paketi."
            />
          </div>
        </div>
      </section>

      {/* NASTUPI */}
      <section className="bg-[#fff9ea] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black md:text-5xl">
              Za scenu, salu, festival i gradski trg
            </h2>

            <p className="mt-6 text-base leading-8 md:text-xl">
              Predstava je pogodna za kulturne centre, škole, vrtiće, dečje
              festivale, gradske manifestacije i porodične programe.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <StatCard number="60" label="minuta programa" />
              <StatCard number="3+" label="muzičara na sceni" />
              <StatCard number="100%" label="rok energija" />
            </div>
          </div>

          <PortraitPhotoCard
            src="/images/boki-palac.jpg"
            alt="Boki pozdravlja publiku"
          />
        </div>
      </section>

      {/* GALERIJA */}
      <section id="galerija" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl">Galerija</h2>

          <p className="mt-4 max-w-3xl text-base leading-8 md:text-lg">
            Scene iz predstave, koncertna atmosfera, Kroko-ROKodilosi i deca
            koja postaju deo rok družine.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {galleryImages.map((image) =>
              image.wide ? (
                <WideGalleryCard
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                />
              ) : (
                <PortraitGalleryCard
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* GOSTOVANJA */}
      <section
        id="gostovanja"
        className="bg-[#28c7c0] px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black md:text-5xl">
              Pozovite Bokija i Kroko-ROKodilose
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 md:text-xl">
              Zakažite gostovanje za školu, vrtić, festival, kulturni centar,
              opštinu ili porodični program. Boki dolazi u potragu za
              rokenrolom — a deca postaju deo priče.
            </p>
          </div>

          <div className="rounded-[2rem] border-4 border-[#202020] bg-white p-7 shadow-[8px_8px_0_#202020]">
            <h3 className="text-2xl font-black">Kontakt za gostovanja</h3>

            <div className="mt-5 space-y-3 text-base md:text-lg">
              <p>
                <span className="font-black">Telefon:</span> +381 XX XXX XXXX
              </p>
              <p>
                <span className="font-black">Imejl:</span>{" "}
                kontakt@bokikrokorok.rs
              </p>
              <p>
                <span className="font-black">Instagram:</span> @bokikrokorok
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="kontakt"
        className="border-t-4 border-[#202020] bg-[#202020] px-5 py-10 text-white md:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-black">Boki i Kroko-ROKodilosi</p>
            <p className="mt-2 text-sm opacity-80">
              Poslednji roker na planeti u potrazi za rokenrolom.
            </p>
          </div>

          <div className="text-sm md:text-right">
            <p>kontakt@bokikrokorok.rs</p>
            <p>www.bokikrokorok.rs</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function WidePhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border-4 border-[#202020] bg-white p-3 shadow-[8px_8px_0_#202020]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-black">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
}

function PortraitPhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border-4 border-[#202020] bg-white p-3 shadow-[8px_8px_0_#202020]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-black">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border-4 border-white bg-[#202020] p-6 shadow-[6px_6px_0_rgba(255,255,255,0.35)]">
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-3 text-lg leading-7">{text}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-[1.5rem] border-4 border-[#202020] bg-white p-6 text-center shadow-[6px_6px_0_#202020]">
      <div className="text-4xl font-black text-[#0aa56a]">{number}</div>
      <div className="mt-2 font-bold">{label}</div>
    </div>
  );
}

function WideGalleryCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border-4 border-[#202020] bg-white p-3 shadow-[8px_8px_0_#202020] md:col-span-2">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-black">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
}

function PortraitGalleryCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border-4 border-[#202020] bg-white p-3 shadow-[8px_8px_0_#202020]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-black">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
}

function ShopCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border-4 border-white bg-[#202020] p-6 shadow-[6px_6px_0_rgba(255,255,255,0.35)]">
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-3 text-lg leading-7">{text}</p>
    </div>
  );
}