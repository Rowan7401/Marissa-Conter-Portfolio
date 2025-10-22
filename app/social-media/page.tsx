import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { socialMediaSpecifics } from "./socialMediaData"

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-[#016064] text-gray-900 relative overflow-hidden">
      <Navigation />

      <div className="relative z-10 pt-24 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            
            {/* Back Button */}
            <Button
              asChild
              variant="ghost"
              className="font-serif text-white hover:text-emerald-200 flex items-center gap-2 mb-6 md:mb-0 w-fit"
            >
              <Link href="/work">
                <ArrowLeft className="h-5 w-5" />
                Back to My Work
              </Link>
            </Button>

            {/* Header Text */}
            <div className="md:text-right">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-green-200 via-teal-100 to-emerald-300 bg-clip-text text-transparent leading-tight mb-4">
                Social Media Content
              </h1>
              
              {/* Decorative flourish */}
              <div className="flex items-center md:justify-end gap-4 mb-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              </div>

              <p className="font-serif text-lg text-white leading-relaxed max-w-2xl md:ml-auto">
                As editor of my school newspaper, I was responsible for creating posts on Instagram, Twitter/X and Facebook for each article. I was also responsible for posting articles on our newspaper's website.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {socialMediaSpecifics.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm rounded-lg border border-emerald-400/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 contrast-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />

                  {/* Type Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-serif font-bold rounded shadow-md">
                      {project.type}
                    </span>
                  </div>

                  {/* Meta Info: Date & Duration */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-serif font-semibold text-gray-900">
                    <Calendar className="h-4 w-4" />
                    {new Date(project.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-serif font-semibold text-gray-900">
                    <Clock className="h-4 w-4" />
                    {project.duration}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col">
                  <h3 className="font-serif font-bold text-xl text-white mb-4 line-clamp-2 min-h-[3.5rem]">
                    {project.title}
                  </h3>
                  
                  <Button
                    asChild
                    className="mt-auto w-full font-serif text-lg font-semibold h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-green-400 hover:to-emerald-400 text-white border-2 border-emerald-300 shadow-lg rounded transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href={`/social-media/${project.id}`}>View Project</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}