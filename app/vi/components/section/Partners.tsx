import Image from "next/image";
import "./Partners.css"

const logos: string[] = Array.from(
  { length: 32 },
  (_, i) => `/images/thumnails/logo_partners/${i + 1}.png`
);

// Desktop: 4 rows
const logosPerRowDesktop = Math.ceil(logos.length / 4);
const row1 = logos.slice(0, logosPerRowDesktop);
const row2 = logos.slice(logosPerRowDesktop, logosPerRowDesktop * 2);
const row3 = logos.slice(logosPerRowDesktop * 2, logosPerRowDesktop * 3);
const row4 = logos.slice(logosPerRowDesktop * 3);

// Mobile: 2 rows
const logosPerRowMobile = Math.ceil(logos.length / 2);
const row1Mob = logos.slice(0, logosPerRowMobile);
const row2Mob = logos.slice(logosPerRowMobile);

type LogoRowProps = {
  items: string[];
  reverse?: boolean;
};

function LogoRow({ items, reverse = false }: LogoRowProps) {
  return (
    <div className="w-full overflow-hidden marquee-hover">
      <div
        className={`
          flex
          w-max
          ${reverse ? "animate-marquee-reverse" : "animate-marquee"}
        `}
      >
        {[...items, ...items].map((src, idx) => (
          <div
            key={idx}
            className="
              relative
              w-28
              h-20
              md:w-32
              md:h-24
              mx-4
              md:mx-6
              flex-shrink-0
              bg-white
              rounded-lg
              p-2
              md:p-3
              shadow-lg
              flex
              items-center
              justify-center
              transition-transform
              duration-300
              lg:hover:scale-105
            "
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt="Client Logo"
                fill
                className="object-contain"
                unoptimized
                sizes="(max-width: 768px) 112px, 128px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="clients" className="py-32 text-white  bg-[var(--blue-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        <h1
          className="
  text-center
  text-2xl md:text-3xl
  font-extrabold
  uppercase
  tracking-widest
  mb-10
  text-[var(--blue-darker)]
"
        >
          Đối tác của chúng tôi
        </h1>

        {/* DESKTOP VIEW: 4 ROWS */}
        <div className="hidden md:flex flex-col space-y-14">
          <LogoRow items={row1} />
          <LogoRow items={row2} reverse />
          <LogoRow items={row3} />
          <LogoRow items={row4} reverse />
        </div>

        {/* MOBILE VIEW: 2 ROWS */}
        <div className="flex md:hidden flex-col space-y-20">
          <LogoRow items={row1Mob} />
          <LogoRow items={row2Mob} reverse />
        </div>
      </div>
    </section>
  );
}
