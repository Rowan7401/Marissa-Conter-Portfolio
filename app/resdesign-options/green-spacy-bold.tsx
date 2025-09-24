import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MapPin } from "lucide-react"

export default function AlternateHeroDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-800 text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-600/10 to-emerald-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation placeholder */}
      <nav className="relative z-20 p-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            MC
          </div>
          <div className="hidden md:flex space-x-8 text-emerald-100">
            <a href="#" className="hover:text-emerald-300 transition-colors">Work</a>
            <a href="#" className="hover:text-emerald-300 transition-colors">About</a>
            <a href="#" className="hover:text-emerald-300 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative z-10 pt-8 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content - Now with more dramatic typography */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                {/* Name with huge, bold treatment */}
                <div className="relative">
                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent leading-none tracking-tight">
                    MARISSA
                  </h1>
                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-400 bg-clip-text text-transparent leading-none tracking-tight -mt-4">
                    CONTER
                  </h1>
                  {/* Decorative line */}
                  <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mt-6"></div>
                </div>

                {/* Specialty areas with bold treatment */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-xl font-bold">
                    <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30">
                      <span className="text-emerald-200">CRIME</span>
                    </div>
                    <div className="bg-gradient-to-r from-teal-600/30 to-emerald-600/30 backdrop-blur-sm rounded-2xl p-4 border border-teal-500/30">
                      <span className="text-teal-200">COURTS</span>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30">
                      <span className="text-emerald-200">PUBLIC SAFETY</span>
                    </div>
                    <div className="bg-gradient-to-r from-teal-600/30 to-emerald-600/30 backdrop-blur-sm rounded-2xl p-4 border border-teal-500/30">
                      <span className="text-teal-200">LOCAL FEATURES</span>
                    </div>
                  </div>
                </div>

                {/* Role with newspaper info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
                    <h2 className="text-3xl font-bold text-emerald-100">REPORTER</h2>
                  </div>
                  <div className="pl-8">
                    <a href="https://www.kitsapsun.com/" className="text-2xl font-semibold text-emerald-300 hover:text-emerald-200 transition-colors block">
                      Kitsap Sun
                    </a>
                    <p className="text-lg text-emerald-200/80">A Gannett Newspaper</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-3xl p-6 border border-emerald-500/30 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <a
                      href="mailto:marissaconter@gmail.com"
                      className="text-xl text-emerald-100 hover:text-emerald-300 transition-colors font-medium"
                    >
                      marissaconter@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Bold action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  asChild
                  className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xl font-bold h-16 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/work" className="flex items-center gap-3">
                    VIEW MY WORK
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-500/20 text-xl font-bold h-16 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/about">ABOUT ME</Link>
                </Button>
              </div>
            </div>

            {/* Photo with dramatic treatment */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                {/* Main photo container with bold geometric frame */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                  {/* Geometric background elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-20 blur-xl"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-emerald-400 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-3xl rotate-45"></div>
                  
                  {/* Photo container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-4 ring-emerald-400/50 group-hover:ring-emerald-400/80 transition-all duration-500 transform group-hover:scale-105">
                    <Image
                      src="/kitsap-sun-headshot.jpg"
                      alt="Marissa Conter - Journalist"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent opacity-80"></div>
                  </div>
                </div>

                {/* Floating location badge - repositioned for better balance */}
                <div className="absolute -bottom-4 -left-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                  <p className="text-lg font-bold flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Seattle, WA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}