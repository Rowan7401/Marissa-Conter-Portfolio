"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Camera, Share2, PenTool } from "lucide-react"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1724] via-[#0f1d2e] to-[#0a1724] text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-6 text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-extrabold leading-tight mb-6 ">
            My Work
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore stories told through multiple mediums—crafted to inform, engage, and inspire.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[0.5rem] bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-8 opacity-60"></div>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Multimedia Card */}
          <Link href="/multimedia" className="block">
            <Card className="group bg-[#111827] border border-gray-700 hover:shadow-2xl hover:border-purple-500 transition-all duration-500 rounded-2xl overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/multimedia-journalism-video-setup.png"
                  alt="Multimedia Journalism Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/40 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-purple-500 font-bold uppercase tracking-wider">
                    Multimedia
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Video Storytelling & More</h3>
                <p className="text-gray-400 leading-relaxed">
                  Compelling visual narratives that bring complex stories to life through video and photography.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Social Media Card */}
          <Link href="/social-media" className="block">
            <Card className="group bg-[#111827] border border-gray-700 hover:shadow-2xl hover:border-pink-500 transition-all duration-500 rounded-2xl overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/gonzaga-bulletin-logo.jpg"
                  alt="Social Media Strategy Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-700/40 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl">
                    <Share2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-pink-400 uppercase tracking-wider">
                    Social Media
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Digital Engagement</h3>
                <p className="text-gray-400 leading-relaxed">
                  Strategic social media campaigns that amplify important stories and engage communities.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Written Work Card */}
          <Link href="/written-work" className="block">
            <Card className="group bg-[#111827] border border-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-500 rounded-2xl overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/journalist-laptop-notebook-coffee.png"
                  alt="Written Journalism Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700/40 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <PenTool className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-blue-400 font-bold uppercase tracking-wider">
                    Written Work
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">In-Depth Reporting</h3>
                <p className="text-gray-400 leading-relaxed">
                  Investigative pieces and feature stories that dive deep into the issues that matter.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
