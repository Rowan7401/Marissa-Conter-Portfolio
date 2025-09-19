import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { multimediaPageSpecifics } from "./multimediaData"
import { ArrowLeft, Play, Calendar, Clock } from "lucide-react"

export default function MultimediaPage() {
  return (
    <div className="min-h-screen px-2 md:px-4 flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white mt-16">
      <Navigation />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 mx-auto">

        {/* Flex container for button + header */}

        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          className="text-white-600 hover:text-gray-900 flex items-center w-36 gap-2 mb-1 mt-4 md:mt-0 md:mb-24"
        >
          <Link href="/work">
            <ArrowLeft className="h-4 w-4" />
            Back to My Work
          </Link>
        </Button>

        {/* Header */}
        <div className="md:text-left animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-bold mt-0 md:mt-6 mb-2 md:mb-6 ml-8">
            Multimedia Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed text-white text-center md:mr-24">
              These are the projects I created as a college student, ranging from focuses on social media, creating a podcast episode and posting a blog.
          </p>
        </div>

      </div>

      {/* Project Grid */}
      <div className="mx-auto mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-24 gap-y-12 justify-items-center">
        {multimediaPageSpecifics.map((project) => (
          <Card
            key={project.id}
            className="w-[20rem] md:w-[25rem] group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 hover:-translate-y-2"
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

              {/* Play Button */}
              {(project.type.includes("Video") || project.type === "Documentary" || project.type === "Podcast") && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Project Type Tag */}
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
            <CardContent className="ml-2 p-2 md:p-6 flex flex-col w-[95%] h-[45%]">
              <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                {project.title}
              </h3>
              
              <Button
                asChild
                className="mt-auto w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg transition-shadow"
              >
                <Link href={`/multimedia/${project.id}`}>View Project</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200 text-center">
        <div>
          <div className="text-4xl font-bold text-white-900 mb-2">25+</div>
          <div className="text-white-600">Video Projects</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-white-900 mb-2">500+</div>
          <div className="text-white-600">Photos Published</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-white-900 mb-2">2.5M</div>
          <div className="text-white-600">Total Views</div>
        </div>
      </div>
    </div >
  )
}

