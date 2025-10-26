import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Quote } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function EarthyHeroDesign() {
  return (
    <div className="min-h-screen bg-[#016064] text-gray-900 relative overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-6 pb-10 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Text Content */}
            <div className="order-1 lg:order-1 lg:col-span-3 space-y-4">
              {/* Name */}
              <h1 className="font-serif text-4xl md:text-4xl lg:text-6xl font-black bg-gradient-to-r from-green-200 via-teal-100 to-gray-300 bg-clip-text text-transparent pt-10 md:pt-16 leading-tight text-center lg:text-left">
                Marissa Conter
              </h1>

              {/* Photo under name (mobile only) */}
              <div className="flex justify-center lg:hidden mt-6">
                <div className="relative group w-[75%] sm:w-64 md:w-72 max-w-xs sm:max-w-sm">
                  {/* Frame elements */}
                  <div className="absolute -inset-4 sm:-inset-6 border-4 border-emerald-400/50 rounded-lg rotate-1"></div>
                  <div className="absolute -inset-6 sm:-inset-8 border-2 border-green-300/40 rounded-lg -rotate-2"></div>

                  {/* Main photo */}
                  <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ring-4 ring-white/70 group-hover:ring-green-300 transition-all duration-500">
                    <Image
                      src="/kitsap-sun-headshot.jpg"
                      alt="Marissa Conter - Journalist"
                      fill
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 400px"
                      className="object-cover contrast-110 transition-all duration-700 group-hover:contrast-125"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-800/20"></div>
                  </div>

                  {/* Quote */}
                  <div className="absolute -bottom-6 sm:-bottom-8 -right-3 sm:-right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded rotate-3 shadow-xl border border-emerald-400/60 text-sm sm:text-base">
                    <Quote className="h-4 w-4 sm:h-6 sm:w-6 inline mr-1" />
                    <span className="font-serif italic">Seattle, WA</span>
                  </div>
                </div>
              </div>

              {/* Decorative flourish */}
              <div className="flex justify-center lg:justify-start items-center gap-x-4 sm:gap-x-6">
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
                <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              </div>

              {/* Areas of Expertise */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 italic text-center lg:text-left">
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Crime Reporting", "Court Proceedings", "Public Safety", "Local Features"].map((area) => (
                    <div
                      key={area}
                      className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm p-2 border-l-4 border-emerald-400 shadow-md"
                    >
                      <h4 className="font-serif text-base sm:text-lg text-white font-semibold">{area}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current role */}
              <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-amber-300/50 shadow-xl text-center">
                <a
                  href="https://www.kitsapsun.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl sm:text-2xl font-bold text-white underline hover:text-emerald-200 transition-colors block"
                >
                  The Kitsap Sun
                </a>
                <h2 className="font-serif text-sm sm:text-md text-white font-bold">
                  STAFF REPORTER
                </h2>
                <p className="font-serif italic text-white font-semibold text-sm sm:text-md mt-1">
                  A Gannett Publication • Established 1889
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-r from-emerald-600/30 to-teal-500/30 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-emerald-400/50 shadow-md">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-r from-emerald-500 to-teal-500 rounded border-2 border-emerald-300 flex items-center justify-center">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-serif text-xs text-emerald-100 italic mb-1">
                      For story tips & inquiries:
                    </p>
                    <a
                      href="mailto:marissaconter@gmail.com"
                      className="font-serif text-base sm:text-lg text-white hover:text-emerald-200 transition-colors font-semibold break-all"
                    >
                      marissaconter@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-6 pt-1">
                <Button
                  asChild
                  className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-green-400 hover:to-emerald-400 text-white font-serif text-lg font-semibold h-12 px-6 rounded border-2 border-emerald-300 shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/work" className="flex items-center gap-2 sm:gap-3">
                    View Portfolio
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-emerald-300 bg-gradient-to-r from-emerald-400 to-teal-500 text-white hover:bg-emerald-300/30 hover:text-white font-serif text-lg font-semibold h-12 px-6 rounded shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/about">About Marissa</Link>
                </Button>
              </div>
            </div>

            {/* Photo Section (desktop only) */}
            <div className="hidden lg:flex relative lg:col-span-2 justify-center mt-10">
              <div className="relative group w-72 lg:w-80">
                <div className="absolute -inset-6 border-4 border-emerald-400/50 rounded-lg rotate-1"></div>
                <div className="absolute -inset-8 border-2 border-green-300/40 rounded-lg -rotate-2"></div>

                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ring-4 ring-white/70 group-hover:ring-green-300 transition-all duration-500">
                  <Image
                    src="/kitsap-sun-headshot.jpg"
                    alt="Marissa Conter - Journalist"
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 400px"
                    className="object-cover contrast-110 transition-all duration-700 group-hover:contrast-125"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-800/20"></div>
                </div>

                <div className="absolute -bottom-8 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded rotate-3 shadow-xl border border-emerald-400/60">
                  <Quote className="h-6 w-6 inline mr-1" />
                  <span className="font-serif italic text-lg">Seattle, WA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
