import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Camera, Share2, PenTool } from "lucide-react"

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of stories told through three different mediums, each chosen to best serve the narrative and
              connect with audiences in meaningful ways.
            </p>
          </div>

          {/* Featured Work Section */}
          <section className="py-8 px-6 bg-gradient-to-r from-orange-50 via-pink-50 to-rose-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  View My <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">Projects</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Multimedia Card */}
                <Link href="/multimedia" className="block">
                  <Card className="cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-l-4 border-purple-500 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-200 bg-white">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src="/multimedia-journalism-video-setup.png"
                        alt="Multimedia Journalism Work"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-transparent" />
                    </div>
                    <CardContent className="p-6 bg-gradient-to-br from-white to-purple-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-r from-purple-500 to-red-500 rounded-xl shadow-lg">
                          <Camera className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                          Multimedia
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Video Storytelling & More</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Compelling visual narratives that bring complex stories to life through video and photography.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* Social Media Card */}
                <Link href="/social-media" className="block">
                  <Card className="cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-l-4 border-red-500 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-400 bg-white">
                    <div className="relative w-full h-[24.5vh] overflow-hidden">


                      <Image
                        src="/gonzaga-bulletin-logo.jpg"
                        alt="Social Media Strategy Work"
                        fill
                        className="object-fill group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-transparent to-transparent" />
                    </div>
                    <CardContent className="p-6 bg-gradient-to-br from-white to-red-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-xl shadow-lg">
                          <Share2 className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-red-600 uppercase tracking-wider">
                          Social Media
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Digital Engagement</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Strategic social media campaigns that amplify important stories and engage communities.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* Written Work Card */}
                <Link href="/written-work" className="block">
                  <Card className="cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-l-4 border-blue-500 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-600 bg-white">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src="/journalist-laptop-notebook-coffee.png"
                        alt="Written Journalism Work"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent" />
                    </div>
                    <CardContent className="p-6 bg-gradient-to-br from-white to-blue-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg">
                          <PenTool className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                          Written Work
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">In-Depth Reporting</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Investigative pieces and feature stories that dive deep into the issues that matter.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}