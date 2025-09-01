import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { socialMediaSpecifics } from "./socialMediaData"

export default function SocialMediaPage() {
  return ( 
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      <Navigation />


      <div className="max-w-6xl mx-auto px-6 pt-28 pb-12">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          <Link href="/work">
            <ArrowLeft className="h-4 w-4" />
            Back to My Work
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Social Media <span className="text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text">Content</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-white">
            As editor of my school newspaper, I crafted and managed social media strategies, creating engaging posts across Instagram, Twitter/X, and Facebook, while publishing articles on our newspaper's website.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {socialMediaSpecifics.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Type Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/60 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-md shadow-sm">
                    {project.type}
                  </span>
                </div>

                {/* Meta Info: Date & Duration */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-gray-800">
                  <Calendar className="h-4 w-4" />
                  {new Date(project.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-white/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-gray-800">
                  <Clock className="h-4 w-4" />
                  {project.duration}
                </div>
              </div>

              {/* Card Content */}
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                <Button
                  asChild
                  className="mt-auto w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:shadow-lg transition-shadow"
                >
                  <Link href={`/social-media/${project.id}`}>View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200 text-center">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
            <div className="text-gray-600">Posts Created</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">25K+</div>
            <div className="text-gray-600">Engagements</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">500K</div>
            <div className="text-gray-600">Total Impressions</div>
          </div>
        </div>
      </div>
    </div>
  )
}
