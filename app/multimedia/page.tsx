import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Play, Eye, Clock, Calendar } from "lucide-react"

const multimediaWork = [
  {
    id: 1,
    title: "Inside the Crisis: Mental Health in County Jail",
    description: "15-minute documentary exploring mental health treatment in the local jail system.",
    type: "Documentary",
    date: "2024-08-10",
    duration: "15:23",
    views: "45.2K",
    thumbnail: "/video-mental-health.jpg"
  },
  {
    id: 2,
    title: "Drug Raid: Behind the Scenes",
    description: "Exclusive video coverage of a major drug bust operation.",
    type: "Breaking News",
    date: "2024-08-15",
    duration: "8:45",
    views: "62.8K",
    thumbnail: "/video-drug-raid.jpg"
  },
  {
    id: 3,
    title: "Faces of Justice: Court Photo Series",
    description: "Photo essay capturing human stories within courthouse walls.",
    type: "Photo Essay",
    date: "2024-07-28",
    duration: "Photo Series",
    views: "28.7K",
    thumbnail: "/photo-courthouse.jpg"
  },
  {
    id: 4,
    title: "The Crime Beat Podcast",
    description: "Weekly deep-dive into local crime stories with expert interviews.",
    type: "Podcast",
    date: "2024-08-12",
    duration: "42:18",
    views: "12.5K",
    thumbnail: "/podcast-crime-beat.jpg"
  },
  {
    id: 5,
    title: "Emergency Response in Action",
    description: "Ride-along video with first responders during a busy night shift.",
    type: "Feature Video",
    date: "2024-07-22",
    duration: "12:34",
    views: "35.1K",
    thumbnail: "/video-emergency.jpg"
  },
  {
    id: 6,
    title: "Youth Basketball: Changing Lives",
    description: "Photo story following local youth through community basketball program.",
    type: "Photo Story",
    date: "2024-07-15",
    duration: "Photo Story",
    views: "18.9K",
    thumbnail: "/photo-youth-basketball.jpg"
  }
]

export default function MultimediaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-12">
          <Button asChild variant="ghost" className="mb-6 text-gray-600 hover:text-gray-900">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Multimedia Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Visual storytelling through video documentaries, photo essays, and podcasts.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {multimediaWork.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 bg-white">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play Button for Videos */}
                {project.type.includes("Video") || project.type === "Documentary" || project.type === "Podcast" ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                ) : null}
                
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded">
                    {project.type}
                  </span>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {project.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {project.duration}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  {new Date(project.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                
                <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <Button size="sm" variant="outline" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  View Project
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

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaborate on Visual Stories</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Looking for compelling multimedia coverage? Let's discuss your project.
          </p>
          <Button asChild>
            <Link href="mailto:marissaconter@gmail.com">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}