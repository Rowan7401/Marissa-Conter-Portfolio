import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, Quote } from "lucide-react"

export default function EarthyHeroDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-stone-900 to-red-950 text-amber-50 relative overflow-hidden">
      {/* Textured background elements */}
      <div className="absolute inset-0">
        {/* Organic shapes */}
        <div className="absolute top-32 -left-20 w-96 h-96 bg-gradient-to-r from-amber-800/20 to-red-900/20 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text rounded-full blur-3xl transform -rotate-45"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 p-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-serif italic text-red-800 border-2 border-red-800 px-4 py-2 rounded">
            MC
          </div>
          <div className="hidden md:flex space-x-8 text-amber-100 font-serif">
            <a href="#" className="hover:text-red-300 transition-colors text-lg">Portfolio</a>
            <a href="#" className="hover:text-red-300 transition-colors text-lg">Biography</a>
            <a href="#" className="hover:text-red-300 transition-colors text-lg">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative z-10 pt-12 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Photo Section - Now on left, taking 2 columns */}
            <div className="relative lg:col-span-2 order-2 lg:order-1 flex justify-center">
              <div className="relative group">
                {/* Vintage-style frame elements */}
                <div className="absolute -inset-6 border-4 border-amber-700/30 rounded-lg transform rotate-1"></div>
                <div className="absolute -inset-8 border-2 border-red-900/20 rounded-lg transform -rotate-2"></div>
                
                {/* Main photo container */}
                <div className="relative w-80 h-[480px] lg:w-96 lg:h-[520px]">
                  {/* Ornate corner decorations */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-red-800"></div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-red-800"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-red-800"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-red-800"></div>
                  
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-amber-700/50 group-hover:ring-amber-600/70 transition-all duration-500">
                    <Image
                      src="/kitsap-sun-headshot.jpg"
                      alt="Marissa Conter - Journalist"
                      fill
                      className="object-cover sepia-[0.2] contrast-110 transition-all duration-700 group-hover:sepia-0"
                      priority
                    />
                    {/* Vintage overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-950/20"></div>
                  </div>
                </div>

                {/* Vintage quote element */}
                <div className="absolute -bottom-8 -right-6 bg-gradient-to-r from-red-900 to-red-800 text-amber-50 px-4 py-2 rounded transform rotate-3 shadow-xl border border-amber-700/50">
                  <Quote className="h-4 w-4 inline mr-1" />
                  <span className="font-serif italic text-sm">Seattle, WA</span>
                </div>
              </div>
            </div>

            {/* Text Content - Taking 3 columns */}
            <div className="space-y-8 order-1 lg:order-2 lg:col-span-3">
              
              {/* Name with classic serif treatment */}
              <div className="space-y-2">
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal text-amber-100 leading-tight">
                  Marissa
                </h1>
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal text-red-300 leading-tight">
                  Conter
                </h1>
                {/* Decorative flourish */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-800 to-amber-700"></div>
                  <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-amber-700 to-red-800"></div>
                </div>
              </div>

              {/* Specialty areas with vintage newspaper style */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-amber-200 mb-4 italic">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-stone-800/60 to-red-950/40 backdrop-blur-sm p-5 border-l-4 border-red-700 shadow-lg">
                    <h4 className="font-serif text-xl text-red-300 font-semibold">Crime Reporting</h4>
                    <p className="text-amber-200/80 text-sm mt-1 font-serif">In-depth criminal justice coverage</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-900/40 to-stone-800/60 backdrop-blur-sm p-5 border-l-4 border-amber-700 shadow-lg">
                    <h4 className="font-serif text-xl text-amber-300 font-semibold">Court Proceedings</h4>
                    <p className="text-amber-200/80 text-sm mt-1 font-serif">Legal system analysis & reporting</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-950/40 to-amber-900/40 backdrop-blur-sm p-5 border-l-4 border-red-700 shadow-lg">
                    <h4 className="font-serif text-xl text-red-300 font-semibold">Public Safety</h4>
                    <p className="text-amber-200/80 text-sm mt-1 font-serif">Community safety & emergency response</p>
                  </div>
                  <div className="bg-gradient-to-r from-stone-800/60 to-red-950/40 backdrop-blur-sm p-5 border-l-4 border-amber-700 shadow-lg">
                    <h4 className="font-serif text-xl text-amber-300 font-semibold">Local Features</h4>
                    <p className="text-amber-200/80 text-sm mt-1 font-serif">Human interest & community stories</p>
                  </div>
                </div>
              </div>

              {/* Current role with newspaper masthead style */}
              <div className="bg-gradient-to-r from-stone-900/80 to-red-950/60 backdrop-blur-sm rounded-lg p-6 border border-amber-700/30 shadow-2xl">
                <div className="text-center border-b border-amber-700/50 pb-4 mb-4">
                  <h2 className="font-serif text-3xl text-amber-100 font-bold">STAFF REPORTER</h2>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-8 h-0.5 bg-red-800"></div>
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <div className="w-8 h-0.5 bg-red-800"></div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <a href="https://www.kitsapsun.com/" className="font-serif text-2xl font-bold text-red-300 hover:text-red-200 transition-colors block">
                    The Kitsap Sun
                  </a>
                  <p className="font-serif italic text-amber-200/80">A Gannett Publication • Established 1889</p>
                </div>
              </div>

              {/* Contact with vintage styling */}
              <div className="bg-gradient-to-r from-amber-900/30 to-red-900/30 backdrop-blur-sm rounded-lg p-6 border border-red-700/40 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-800 to-red-700 rounded border-2 border-amber-700 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-amber-100" />
                  </div>
                  <div>
                    <p className="font-serif text-sm text-amber-300 italic mb-1">For story tips & inquiries:</p>
                    <a
                      href="mailto:marissaconter@gmail.com"
                      className="font-serif text-xl text-amber-100 hover:text-red-300 transition-colors font-semibold"
                    >
                      marissaconter@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons with vintage newspaper style */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  asChild
                  className="group bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-amber-50 font-serif text-lg font-semibold h-14 px-8 rounded border-2 border-amber-700/50 shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/work" className="flex items-center gap-3">
                    View Portfolio
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-amber-700 text-amber-200 hover:bg-amber-800/30 hover:text-amber-100 font-serif text-lg font-semibold h-14 px-8 rounded shadow-xl transform hover:scale-105 transition-all duration-300"
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