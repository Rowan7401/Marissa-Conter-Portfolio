import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Quote } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function EarthyHeroDesign() {
  return (
    //#1 OCEAN #016064
    //#2 BASIL GREEN: #32612D
    <div className="min-h-screen bg-[#016064] text-gray-900 relative overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-6 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            
            {/* Photo Section */}
            <div className="relative lg:col-span-2 order-2 lg:order-1 flex justify-center mt-20">
              <div className="relative group">
                {/* Frame elements */}
                <div className="absolute -inset-6 border-4 border-emerald-400/50 rounded-lg rotate-1"></div>
                <div className="absolute -inset-8 border-2 border-green-300/40 rounded-lg -rotate-2"></div>
                
                {/* Main photo container */}
                <div className="relative w-72 h-[440px] lg:w-80 lg:h-[480px]">
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-white-900"></div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-white-900"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-white-900"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-white-900"></div>
                  
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-4 ring-white/70 group-hover:ring-green-300 transition-all duration-500">
                    <Image
                      src="/kitsap-sun-headshot.jpg"
                      alt="Marissa Conter - Journalist"
                      fill
                      className="object-cover contrast-110 transition-all duration-700 group-hover:contrast-125"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-800/20"></div>
                  </div>
                </div>

                {/* Quote element */}
                <div className="absolute -bottom-8 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded rotate-3 shadow-xl border border-emerald-400/60">
                  <Quote className="h-6 w-6 inline mr-1" />
                  <span className="font-serif italic text-lg">Seattle, WA</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-3 order-1 lg:order-2 lg:col-span-3">
              
              {/* Name */}
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-200 via-teal-100 to-grey-300 bg-clip-text text-transparent w-[80rem] pt-16">
                Marissa Conter
              </h1>
          
              {/* Decorative flourish */}
              <div className="flex items-center gap-x-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              </div>
              
              {/* Expertise (no subtext) */}
              <div>
                <h3 className="font-serif text-2xl text-white mb-1 italic">Areas of Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm p-2 border-l-4 border-emerald-400 shadow-md">
                    <h4 className="font-serif text-lg text-white font-semibold">Crime Reporting</h4>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm p-2 border-l-4 border-emerald-400 shadow-md">
                    <h4 className="font-serif text-lg text-white font-semibold">Court Proceedings</h4>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm p-2 border-l-4 border-emerald-400 shadow-md">
                    <h4 className="font-serif text-lg text-white font-semibold">Public Safety</h4>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm p-2 border-l-4 border-emerald-400 shadow-md">
                    <h4 className="font-serif text-lg text-white font-semibold">Local Features</h4>
                  </div>
                </div>
              </div>

              {/* Current role */}
              <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm rounded-lg p-5 border border-amber-300/50 shadow-xl">
                <div className="text-center border-b border-emerald-400/60 pb-3 mb-3">
                  <a
                    href="https://www.kitsapsun.com/"
                    className="font-serif text-2xl font-bold text-white underline hover:text-emerald-200 transition-colors block"
                  >
                    The Kitsap Sun
                  </a>
                  <h2 className="font-serif text-md text-white font-bold">STAFF REPORTER</h2>
                   
                </div>
                <div className="text-center space-y-1">
               
                  <p className="font-serif italic text-white font-semibold text-md">A Gannett Publication • Established 1889</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-r from-emerald-600/30 to-teal-500/30 backdrop-blur-sm rounded-lg p-5 border border-emerald-400/50 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-gradient-to-r from-emerald-500 to-teal-500 rounded border-2 border-emerald-300 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-serif text-xs text-emerald-100 italic mb-1">For story tips & inquiries:</p>
                    <a
                      href="mailto:marissaconter@gmail.com"
                      className="font-serif text-lg text-white hover:text-emerald-200 transition-colors font-semibold"
                    >
                      marissaconter@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-x-6 pt-1">
                <Button
                  asChild
                  className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-green-400 hover:to-emerald-400 text-white font-serif text-lg font-semibold h-12 px-6 rounded border-2 border-emerald-300 shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/work" className="flex items-center gap-3">
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
          </div>
        </div>
      </section>
    </div>
  )
}
