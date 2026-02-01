"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Camera, Share2, PenTool } from "lucide-react"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#016064] text-gray-900 relative overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl lg:text-7xl font-black bg-gradient-to-r from-green-200 via-teal-100 to-emerald-300 bg-clip-text text-transparent leading-tight mb-6">
            My Work
          </h1>
          
          {/* Decorative flourish */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Multimedia Card */}
          <Link href="/multimedia" className="block group">
            <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm rounded-lg border border-emerald-400/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/multimedia/multimediaCardIcon.webp"
                  alt="Multimedia Journalism Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded border-2 border-emerald-300">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-serif text-xl text-white font-bold">
                    MULTIMEDIA
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white mb-2">
                  Video Storytelling & More
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mt-3"></div>
              </div>
            </div>
          </Link> 

          {/* Written Work Card */}
          <Link href="/written-work" className="block group">
            <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm rounded-lg border border-emerald-400/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/written-work/writtenWorkCardIcon.png"
                  alt="Written Journalism Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded border-2 border-emerald-300">
                    <PenTool className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-serif text-xl text-white font-bold">
                    WRITTEN WORK
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white mb-2">
                  In-Depth Reporting
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mt-3"></div>
              </div>
            </div>
          </Link>
          
          {/* Social Media Card */}
          <Link href="/social-media" className="block group">
            <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm rounded-lg border border-emerald-400/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/social-media/socialMediaCardIcon.png"
                  alt="Social Media Strategy Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded border-2 border-emerald-300">
                    <Share2 className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-serif text-xl text-white font-bold">
                    SOCIAL MEDIA
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white mb-2">
                  Digital Engagement
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mt-3"></div>
              </div>
            </div>
          </Link>

        </div>
      </section>
    </div>
  )
}