import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, PenTool, Share2, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Marissa{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    Conter
                  </span>
                </h1>

                <div className="space-y-3">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                    Reporter
                  </h2>
                  <p className="text-xl text-gray-600 font-medium">
                    Crime, Courts, Public Safety & More
                  </p>
                  <div className="flex items-center gap-3 text-lg font-semibold text-blue-600">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                    <a href="https://www.kitsapsun.com/">Kitsap Sun</a>
                    <h2 className="text-gray-500 pl-2">|</h2>
                    <h2 className="text-gray-500 pl-2">A Gannett Newspaper</h2>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a
                    href="mailto:marissaconter@gmail.com"
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    marissaconter@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  <Link href="/work" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="h-120 w-94 relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/50">
                <Image
                  src="/kitsap-sun-headshot.jpg"
                  alt="Marissa Conter - Journalist"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />
              </div>

              {/* Floating location badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-xl border-4 border-white animate-in zoom-in duration-500 delay-700">
                <p className="text-sm font-bold flex items-center gap-2">
                  📍 Seattle, WA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}