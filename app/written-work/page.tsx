import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Play, Eye, Clock, Calendar, Heart, Share2, MessageCircle } from "lucide-react"
import { writtenWorkSpecifics } from "./writtenWorkData"

export default function WrittenWorkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8">
        {/* Header */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="mb-0 text-gray-600 hover:text-gray-900">
            <Link href="/work" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to My Work
            </Link>
          </Button>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Written Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Over the past five years producing written journalistic content, I have created stories of varied subject matter and purposes at various publications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writtenWorkSpecifics.map((project) => (
            <Card key={project.id} className="w-86 h-116 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="relative w-full h-82 overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Play Button for Videos */}
                {/* {project.type.includes("Video") || project.type === "Documentary" || project.type === "Podcast" ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                ) : null} */}

                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded">
                    {project.type}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex justify-between items-center bg-white/90 backdrop-blur-sm text-grey rounded-[0.35rem] p-1 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(project.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 flex justify-between items-center bg-white/90 backdrop-blur-sm text-grey rounded-[0.35rem] p-1 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {project.duration}
                  </div>
                </div>
              </div>

              <CardContent className="py-2 px-6 flex flex-col h-full">
                <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-0 line-clamp-3">
                  {project.shortDescription}
                </p>

                <Button
                  className="mt-auto mx-auto w-[80%] bg-black/12 text-black cursor-pointer"
                  asChild
                >
                  <Link href={`/written-work/${project.id}`}>
                    View Article
                  </Link>
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600">Video Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Photos Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">2.5M</div>
            <div className="text-gray-600">Total Views</div>
          </div>
        </div>

      </div>
    </div>
  )
}