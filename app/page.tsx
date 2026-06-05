"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/images/bend-krokodilosi.jpg", wide: true },
  { src: "/images/bis-krokodilosi.jpg", wide: true },
  { src: "/images/trio-sklekovi.jpg", wide: true },
  { src: "/images/deca-na-sceni.jpg", wide: true },
  { src: "/images/publika.jpg", wide: true },
  { src: "/images/mikrofon.jpg", wide: false },
  { src: "/images/koza-jakna.jpg", wide: false },
  { src: "/images/bubanj.jpg", wide: false },
  { src: "/images/gitara-klek.jpg", wide: false },
  { src: "/images/boki-palac.jpg", wide: false },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8edcf] text-[#202020]">
      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b-4 border-[#202020] bg-[#ffe066] shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* MOBILE MENU */}
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl font-black leading-none"
              aria-label="Отвори мени"
            >
              ☰
            </button>

            {menuOpen && (
              <div className="absolute left-0 top-11 w-52 rounded-2xl border-4 border-[#202020] bg-[#f8edcf] p-4 shadow-[6px_6px_0_#202020]">
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 font-black"
                  href="#predstava"
                >
                  О представи
                </a>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 font-black"
                  href="#prodavnica"
                >
                  Продавница
                </a>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 font-black"
                  href="#galerija"
                >
                  Галерија
                </a>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 font-black"
                  href="#gostovanja"
                >
                  Гостовања
                </a>
              </div>
            )}
          </div>

          <a
            href="/"
            className="text-center text-base font-black leading-tight md:text-left md:text-2xl"
          >
            Боки и <span className="text-[#0aa56a]">Кроко-РОКодилоси</span>
          </a>

          <a
            href="/lat"
            className="rounded-full border-2 border-[#202020] bg-[#28c7c0] px-3 py-1.5 text-sm font-black md:hidden"
          >
            Lat
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-3 text-sm font-black md:flex">
            <a
              href="#predstava"
              className="rounded-full border-2 border-[#202020] bg-white px-4 py-2 hover:bg-[#28c7c0]"
            >
              О представи
            </a>
            <a
              href="#prodavnica"
              className="rounded-full border-2 border-[#202020] bg-[#f04d38] px-4 py-2 text-white hover:bg-[#d63d2c]"
            >
              Продавница
            </a>
            <a
              href="#galerija"
              className="rounded-full border-2 border-[#202020] bg-white px-4 py-2 hover:bg-[#28c7c0]"
            >
              Галерија
            </a>
            <a
              href="#gostovanja"
              className="rounded-full border-2 border-[#202020] bg-white px-4 py-2 hover:bg-[#28c7c0]"
            >
              Гостовања
            </a>
            <a
              href="/lat"
              className="rounded-full border-2 border-[#202020] bg-[#28c7c0] px-4 py-2"
            >
              Lat
            </a>
          </nav>
        </div>
      </header>

      {/* HERO POSTER */}
      <section className="px-4 pt-24 md:px-8 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-[#202020] bg-white p-3 shadow-[8px_8px_0_#202020]">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] bg-black md:aspect-[16/8]">
              <Image
                src="/images/bend-krokodilosi.jpg"
                alt="Боки и Кроко-РОКодилоси на сцени"
                fill
                priority
                className="object-contain md:object-cover"
                sizes="100vw"
              />
            </div>

            <div className="absolute bottom-6 left-6 rounded-full border-2 border-[#202020] bg-[#28c7c0] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_#202020]">
              уживо на сцени
            </div>

            <div className="pointer-events-none absolute right-6 top-6 hidden h-24 w-24 rotate-3 rounded-2xl border-4 border-[#202020] bg-white p-2 shadow-[5px_5px_0_#202020] md:block">
              <Image
                src="/images/boki-kroko-rokodilosi.png"
                alt="Маскота Боки и Кроко-РОКодилоси"
                fill
                className="object-contain p-2"
                sizes="96px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TITLE */}
      <section id="predstava" className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#0aa56a] md:text-sm">
            Боки и Кроко-РОКодилоси
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[0.95] md:text-8xl">
            Последњи рокер на планети у потрази за рокенролом.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 md:text-2xl md:leading-10">
            Боки и Кроко-РОКодилоси воде децу кроз концерт, игру и рок
            заклетву. Деца певају, играју и постају прави мали рокери.
          </p>

          <div className="mt-9">
            <a
              href="#gostovanja"
              className="block rounded-full border-4 border-[#202020] bg-[#f04d38] px-8 py-4 text-center text-lg font-black text-white shadow-[6px_6px_0_#202020] md:inline-block"
            >
              Закажите гостовање
            </a>

            <div className="mt-5 flex justify-center gap-6 text-sm font-black text-[#0aa56a] md:justify-start">
              <a href="#prodavnica">Продавница</a>
              <a href="#galerija">Галерија</a>
            </div>
          </div>
        </div>
      </section>

      {/* THREE POINTS */}
      <section className="bg-[#28c7c0] px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <Card
            number="01"
            title="Потрага за рокенролом"
            text="Боки је последњи рокер на планети и креће у потрагу за изгубљеним рокенролом."
          />
          <Card
            number="02"
            title="Концерт и представа"
            text="Жива свирка, сценска игра, хумор, костими и енергија правог рок наступа."
          />
          <Card
            number="03"
            title="Рок заклетва"
            text="Деца не гледају само са стране — она постају део бенда и полажу рок заклетву."
          />
        </div>
      </section>

      {/* ROK ZAKLETVA */}
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-[#202020] bg-white p-3 shadow-[8px_8px_0_#202020]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-black md:aspect-[16/10]">
              <Image
                src="/images/deca-na-sceni.jpg"
                alt="Деца на сцени"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#f04d38]">
              рок заклетва
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Публика постаје део приче.
            </h2>
            <p className="mt-6 text-base leading-8 md:text-xl md:leading-9">
              На крају авантуре деца постају чувари ритма, смеха, игре и добре
              енергије. То је тренутак који носе кући.
            </p>
          </div>
        </div>
      </section>

      {/* PRODAVNICA */}
      <section
        id="prodavnica"
        className="bg-[#f04d38] px-5 py-14 text-white md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#202020]">
            продавница
          </p>
          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Опрема за мале рокере
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 md:text-xl md:leading-9">
            Мајице, играчке, налепнице, постери и поклони за децу која су
            положила рок заклетву.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ShopCard title="Мајице" text="За чланове Кроко-РОКодилос дружине." />
            <ShopCard title="Играчке" text="Кроко-РОКодилоси као другари за понети кући." />
            <ShopCard title="Поклон пакети" text="Постери, налепнице и мали рок пакети." />
          </div>
        </div>
      </section>

      {/* GALERIJA */}
      <section id="galerija" className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#0aa56a]">
            галерија
          </p>
          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Сцена, публика, рок авантура
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {galleryImages.map((image) => (
              <GalleryCard key={image.src} src={image.src} wide={image.wide} />
            ))}
          </div>
        </div>
      </section>

      {/* GOSTOVANJA */}
      <section id="gostovanja" className="bg-[#ffe066] px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#f04d38]">
              гостовања
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Позовите Бокија у свој град
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 md:text-xl md:leading-9">
              За школе, вртиће, фестивале, културне центре, општине, градске
              манифестације и породичне програме.
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

      <footer className="border-t-4 border-[#202020] bg-[#202020] px-5 py-8 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-black">
            Боки и <span className="text-[#28c7c0]">Кроко-РОКодилоси</span>
          </p>
          <p>www.bokikrokorok.rs</p>
        </div>
      </footer>
    </main>
  );
}

function Card({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.5rem] border-4 border-[#202020] bg-white p-6 shadow-[6px_6px_0_#202020] md:rounded-[2rem] md:p-7">
      <p className="text-sm font-black text-[#f04d38]">{number}</p>
      <h3 className="mt-4 text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-8">{text}</p>
    </div>
  );
}

function ShopCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border-4 border-[#202020] bg-white p-6 text-[#202020] shadow-[6px_6px_0_#202020] md:rounded-[2rem] md:p-7">
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-8">{text}</p>
    </div>
  );
}

function GalleryCard({ src, wide }: { src: string; wide: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border-4 border-[#202020] bg-white p-2 shadow-[6px_6px_0_#202020] ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-[1rem] bg-black ${
          wide ? "aspect-[16/10]" : "aspect-[3/4]"
        }`}
      >
        <Image
          src={src}
          alt="Боки и Кроко-РОКодилоси"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>
    </div>
  );
}