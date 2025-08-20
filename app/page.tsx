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
                    Kitsap Sun
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

      {/* Featured Work Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50 via-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stories that impact communities across the Pacific Northwest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Multimedia Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-l-4 border-orange-500 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-200 bg-white">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/multimedia-journalism-video-setup.png"
                  alt="Multimedia Journalism Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-orange-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                    Multimedia
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Video Storytelling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compelling visual narratives that bring complex stories to life through video and photography.
                </p>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-l-4 border-purple-500 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-400 bg-white">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/social-media-workspace.png"
                  alt="Social Media Strategy Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-purple-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                    <Share2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                    Social Media
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Digital Engagement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic social media campaigns that amplify important stories and engage communities.
                </p>
              </CardContent>
            </Card>

            {/* Written Work Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-l-4 border-emerald-500 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-600 bg-white">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/journalist-laptop-notebook-coffee.png"
                  alt="Written Journalism Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-emerald-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                    <PenTool className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
                    Written Work
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">In-Depth Reporting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Investigative pieces and feature stories that dive deep into the issues that matter.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom duration-700 delay-800">
            <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl text-lg px-8 py-4">
              <Link href="/work" className="flex items-center gap-2">
                Explore All Work 
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom duration-700">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-blue-100 shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Let's <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">Connect</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Have a story tip or interested in collaborating? I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg">
                  <Link href="mailto:marissaconter@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Me
                  </Link>
                </Button>
                <div className="text-lg text-gray-600 font-medium">
                  marissaconter@gmail.com
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}