import "./Phu_Quoc_map.css";
import { Button } from "../ui/Button";
import Image from "next/image";

export default function PhuQuocMap() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-16">
          Điểm đến theo khu vực
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-20">
          <div className="bg-gray-100 rounded-full px-8 py-4 flex gap-8 shadow-md flex-wrap md:flex-nowrap">
            <button className="pb-2 font-semibold text-gray-700 border-b-4 border-transparent hover:text-[var(--primary)] hover:border-[var(--primary)] whitespace-nowrap transition-colors duration-300">
              North
            </button>
            <button className="pb-2 font-semibold text-gray-700 border-b-4 border-transparent hover:text-[var(--primary)] hover:border-[var(--primary)] whitespace-nowrap transition-colors duration-300">
              Central
            </button>
            <button className="pb-2 font-semibold text-gray-700 border-b-4 border-transparent hover:text-[var(--primary)] hover:border-[var(--primary)] whitespace-nowrap transition-colors duration-300">
              South
            </button>
            <button className="pb-2 font-semibold text-gray-700 border-b-4 border-transparent hover:text-[var(--primary)] hover:border-[var(--primary)] whitespace-nowrap transition-colors duration-300">
              East
            </button>
            <button className="pb-2 font-semibold text-gray-700 border-b-4 border-transparent hover:text-[var(--primary)] hover:border-[var(--primary)] whitespace-nowrap transition-colors duration-300">
              North East
            </button>
            <button className="pb-2 font-semibold text-gray-700 border-b-4 border-transparent hover:text-[var(--primary)] hover:border-[var(--primary)] whitespace-nowrap transition-colors duration-300">
              West
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Map Image */}
          <div className="flex justify-center">
            <div className="bg-gray-200 rounded-lg p-8 w-full aspect-square flex items-center justify-center">
              <p className="text-gray-500 text-center font-semibold">
                [Map Image]
              </p>
            </div>
          </div>

          {/* Right: Description */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-yellow-500">
              South
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The South contains many beautiful beaches and islands in the Gulf of Thailand and the Andaman Sea. Well-known tourist destinations are Phuket Province, Ko Samui, Ko Phi Phi, Ko Lipe, and Ko Tao.
            </p>

            {/* Image Cards Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-80 rounded-lg overflow-hidden bg-gray-300 flex items-end justify-center group cursor-pointer">
                <Image
                  src="/images/region/ko-samui.jpg"
                  alt="Ko Samui"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-4">
                  <h3 className="text-white font-bold text-lg">Ko Samui</h3>
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden bg-gray-300 flex items-end justify-center group cursor-pointer">
                <Image
                  src="/images/region/krabi.jpg"
                  alt="Krabi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-4">
                  <h3 className="text-white font-bold text-lg">Krabi</h3>
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden bg-gray-300 flex items-end justify-center group cursor-pointer">
                <Image
                  src="/images/region/phuket.jpg"
                  alt="Phuket"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-4">
                  <h3 className="text-white font-bold text-lg">Phuket</h3>
                </div>
              </div>
            </div>

            <Button variant="primary" size="lg">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}