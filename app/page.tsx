import Image from "next/image";

const galleryImages = [
  {
    src: "/images/bend-krokodilosi.jpg",
    alt: "Бенд Кроко-РОКодилоси на сцени",
    wide: true,
  },
  {
    src: "/images/bis-krokodilosi.jpg",
    alt: "Бис на представи",
    wide: true,
  },
  {
    src: "/images/mikrofon.jpg",
    alt: "Боки са микрофоном",
    wide: false,
  },
  {
    src: "/images/koza-jakna.jpg",
    alt: "Боки као последњи рокер",
    wide: false,
  },
  {
    src: "/images/bubanj.jpg",
    alt: "Боки за бубњем",
    wide: false,
  },
  {
    src: "/images/dresovi.jpg",
    alt: "Сцена са дресовима",
    wide: false,
  },
  {
    src: "/images/trio-sklekovi.jpg",
    alt: "Кроко-РОКодилоси на сцени",
    wide: true,
  },
  {
    src: "/images/gitara-klek.jpg",
    alt: "Гитариста на сцени",
    wide: false,
  },
  {
    src: "/images/boki-palac.jpg",
    alt: "Боки поздравља публику",
    wide: false,
  },
  {
    src: "/images/deca-na-sceni.jpg",
    alt: "Деца на сцени",
    wide: true,
  },
  {
    src: "/images/publika.jpg",
    alt: "Публика и деца на сцени",
    wide: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8edcf] text-[#202020]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b-4 border-[#202020] bg-[#f8edcf]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-8 md:py-4">
          <a
            href="/"
            className="text-center text-lg font-black leading-tight md:text-left md:text-2xl"
          >
            Боки и <span className="text-[#0aa56a]">Кроко-РОКодилоси</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-2 text-xs font-extrabold md:gap-6 md:text-sm">
            <a
              href="#o-predstavi"
              className="rounded-full border-2 border-[#202020] bg-white px-3 py-1 hover:bg-[#ffe066]"
            >
              О представи
            </a>
            <a
              href="#rok-zakletva"
              className="rounded-full border-2 border-[#202020] bg-white px-3 py-1 hover:bg-[#ffe066]"
            >
              Рок заклетва
            </a>
            <a
              href="#prodavnica"
              className="rounded-full border-2 border-[#202020] bg-[#f04d38] px-3 py-1 text-white hover:bg-[#d63d2c]"
            >
              Продавница
            </a>
            <a
              href="#galerija"
              className="rounded-full border-2 border-[#202020] bg-white px-3 py-1 hover:bg-[#ffe066]"
            >
              Галерија
            </a>
            <a
              href="#gostovanja"
              className="rounded-full border-2 border-[#202020] bg-white px-3 py-1 hover:bg-[#ffe066]"
            >
              Гостовања
            </a>
            <a
              href="/lat"
              className="rounded-full border-2 border-[#202020] bg-[#ffe066] px-3 py-1 font-black hover:bg-white"
            >
              Lat
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
              Музикл за децу
            </div>

            <h1 className="text-4xl font-black leading-[0.95] sm:text-5xl md:text-7xl">
              <span className="block text-[#d63d2c]">Боки и</span>
              <span className="mt-2 block text-[#0aa56a]">
                Кроко-РОКодилоси
              </span>
            </h1>

            <div className="mt-6 inline-block rotate-1 rounded-full border-4 border-[#202020] bg-[#fff9ea] px-5 py-3 text-base font-black shadow-[5px_5px_0_#202020] md:text-2xl">
              последњи рокер на планети
            </div>

            <p className="mt-7 max-w-2xl text-base font-bold leading-8 md:text-xl">
              Боки је последњи рокер на планети. У потрази за изгубљеним
              рокенролом, заједно са Кроко-РОКодилосима стиже пред децу,
              покреће свирку, причу и велику рок авантуру.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 md:text-lg">
              Деца не седе мирно и не гледају са стране — она певају, играју,
              одговарају, полажу <strong>рок заклетву</strong> и постају прави
              мали рокери.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#gostovanja"
                className="rounded-full border-4 border-[#202020] bg-[#f04d38] px-7 py-4 text-center font-black text-white shadow-[6px_6px_0_#202020] transition hover:-translate-y-1"
              >
                Закажите гостовање
              </a>

              <a
                href="#prodavnica"
                className="rounded-full border-4 border-[#202020] bg-[#ffe066] px-7 py-4 text-center font-black shadow-[6px_6px_0_#202020] transition hover:-translate-y-1"
              >
                Продавница
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
                  alt="Боки Кроко-РОКодилос"
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
            alt="Бенд Кроко-РОКодилоси на сцени"
          />
          <WidePhotoCard
            src="/images/bis-krokodilosi.jpg"
            alt="Бис на представи"
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
            Рокенрол представа у којој деца постају део бенда
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 md:text-xl">
            „Боки и Кроко-РОКодилоси“ је музичко-сценска и мултимедијална
            представа за децу. То је концерт, позоришна игра и авантура у којој
            се тражи изгубљени рокенрол.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Прича"
              text="Боки, последњи рокер на планети, креће у потрагу за рокенролом."
            />
            <InfoCard
              title="Свирка"
              text="Кроко-РОКодилоси доносе живу енергију, ритам и концертни дух."
            />
            <InfoCard
              title="Деца"
              text="Публика пева, игра, одговара и постаје део представе."
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
                alt="Деца на сцени са Бокијем"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black md:text-5xl">Рок заклетва</h2>

            <p className="mt-6 text-base leading-8 md:text-xl">
              На крају авантуре деца полажу рок заклетву. То је тренутак када
              публика више није само публика — деца постају прави рокери,
              чувари ритма, смеха и добре енергије.
            </p>

            <div className="mt-8 rounded-[1.5rem] border-4 border-[#202020] bg-[#ffe066] p-6 shadow-[6px_6px_0_#202020]">
              <p className="text-lg font-black md:text-xl">
                Ко положи рок заклетву — улази у дружину Кроко-РОКодилоса!
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
          <h2 className="text-3xl font-black md:text-5xl">Боки продавница</h2>

          <p className="mt-5 max-w-3xl text-base leading-8 md:text-xl">
            Мајице, играчке, налепнице и поклони за мале рокере и чланове
            Кроко-РОКодилос дружине.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ShopCard
              title="Мајице"
              text="За децу која су положила рок заклетву."
            />
            <ShopCard
              title="Играчке"
              text="Кроко-РОКодилоси као другари за понети кући."
            />
            <ShopCard
              title="Поклони"
              text="Постери, налепнице и мали рок пакети."
            />
          </div>
        </div>
      </section>

      {/* NASTUPI */}
      <section className="bg-[#fff9ea] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black md:text-5xl">
              За сцену, салу, фестивал и градски трг
            </h2>

            <p className="mt-6 text-base leading-8 md:text-xl">
              Представа је погодна за културне центре, школе, вртиће, дечје
              фестивале, градске манифестације и породичне програме.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <StatCard number="60" label="минута програма" />
              <StatCard number="3+" label="музичара на сцени" />
              <StatCard number="100%" label="рок енергија" />
            </div>
          </div>

          <PortraitPhotoCard
            src="/images/boki-palac.jpg"
            alt="Боки поздравља публику"
          />
        </div>
      </section>

      {/* GALERIJA */}
      <section id="galerija" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl">Галерија</h2>

          <p className="mt-4 max-w-3xl text-base leading-8 md:text-lg">
            Сцене из представе, концертна атмосфера, Кроко-РОКодилоси и деца
            која постају део рок дружине.
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
              Позовите Бокија и Кроко-РОКодилосе
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 md:text-xl">
              Закажите гостовање за школу, вртић, фестивал, културни центар,
              општину или породични програм. Боки долази у потрагу за
              рокенролом — а деца постају део приче.
            </p>
          </div>

          <div className="rounded-[2rem] border-4 border-[#202020] bg-white p-7 shadow-[8px_8px_0_#202020]">
            <h3 className="text-2xl font-black">Контакт за гостовања</h3>

            <div className="mt-5 space-y-3 text-base md:text-lg">
              <p>
                <span className="font-black">Телефон:</span> +381 XX XXX XXXX
              </p>
              <p>
                <span className="font-black">Имејл:</span>{" "}
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
            <p className="text-2xl font-black">Боки и Кроко-РОКодилоси</p>
            <p className="mt-2 text-sm opacity-80">
              Последњи рокер на планети у потрази за рокенролом.
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