import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"
import { Playfair_Display, Inter } from "next/font/google"

// Fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" })
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] })

export default function HomePage() {
  return (
    <div className={`${inter.className} min-h-screen bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white`}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-40 pb-16">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-20 pointer-events-none"></div>

        <div className="flex flex-row justify-center mx-auto relative z-2">
          <div className="grid md:grid-cols-2 ml-5 mr-5 md:mr-0 md:ml-54 gap-x-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 md:space-y-8 max-w-[98%] animate-in fade-in slide-in-from-left duration-700">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent space-y-2 md:space-y-3">
                <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold leading-tight`}>
                  Marissa Conter
                </h1>

                <div className="space-y-3">
                  <h2 className="text-center md:text-left text-md md:text-2xl font-semibold text-emerald-100 italic">
                    Crime • Courts • Public Safety • Local Features
                  </h2>
                  <p className="text-md md:text-xl text-gray-300 font-medium">
                    Breaking stories, uncovering truth, and bringing clarity to complex issues.
                  </p>
                  <div className="flex items-center gap-0 md:gap-3 text-lg font-semibold text-emerald-400">
                    <span className="md:w-3 md:h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></span>
                    <a href="https://www.kitsapsun.com/" className="hover:underline w-[15rem]">
                      Reporter-Kitsap Sun
                    </a>
                    <h2 className="hidden md:flex text-gray-400 pl-2">|</h2>
                    <h2 className="text-gray-400 md:pl-2">A Gannett Newspaper</h2>
                  </div>
                </div>

                <div className="w-[20rem] md:w-[33rem] flex items-center gap-3 p-2 mt-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-emerald-500/20 shadow-lg">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <a
                    href="mailto:marissaconter@gmail.com"
                    className="text-sm md:text-lg text-white hover:text-emerald-300 transition-colors font-medium"
                  >
                    marissaconter@gmail.com
                  </a>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-300 hover:to-teal-300 text-white text-lg md:text-xl shadow-lg w-42 md:w-54 h-12"
                >
                  <Link href="/work" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-500/70 text-lg md:text-xl shadow-lg w-34 md:w-54 h-12"
                >
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
            </div>

            {/* Photo */}
            <div className="w-[20rem] ml-4 mt-12 md:mt-0 relative animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="h-[32rem] w-[20rem] relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-emerald-400/20 hover:ring-emerald-400/40 transition-all duration-500">
                <Image
                  src="/kitsap-sun-headshot.jpg"
                  alt="Marissa Conter - Journalist"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 via-transparent to-transparent" />
              </div>


            </div>
            {/* Floating location badge */}
            <div className="absolute mt-134 ml-234 w-[12%] bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 mr-20 rounded-2xl shadow-xl border-4 border-white animate-in zoom-in duration-500 delay-700">
              <p className="text-lg font-bold flex items-center gap-2">
                📍 Seattle, WA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
