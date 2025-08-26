import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Play, Eye, Clock, Calendar } from "lucide-react"

const multimediaWork = [
  {
    id: 1,
    title: "Social Media Campaign: Glossier",
    description: "Built an Instagram account mimicking official Glossier branding and devised realistic content calendar posting schedule.",
    type: "Instagram Account",
    date: "2023-03-15",
    duration: "6 posts",
    views: "18.9K",
    thumbnail: "/Glossier-insta.jpg"
  },
  {
    id: 2,
    title: "TikToks: Gonzaga Engineering & Applied Science",
    description: "Promotional TikTok series for Gonzaga's engineering & applied science major and the Boillier Center.",
    type: "TikTok Series",
    date: "2023-02-10",
    duration: "2 Videos",
    views: "45.2K",
    thumbnail: "/tiktok-banner.png"
  },
  {
    id: 3,
    title: "Podcast: Gonzaga Univerity Sustainability",
    description: "Episode highlighting waste reduction practices on campus relating to \"care for the planet\" part of  GU's mission statement.",
    type: "Podcast Episode",
    date: "2023-04-15",
    duration: "32:45",
    views: "62.8K",
    thumbnail: "/podcast girl.jpg"
  },
  {
    id: 4,
    title: "Content Analysis: Devon Lee Carlson",
    description: "Analysis of themes and trends of social media influencer and entrepreneur Deven Lee Carlson.",
    type: "Write Up & Visual Aid",
    date: "2023-02-28",
    duration: "7 slides",
    views: "28.7K",
    thumbnail: "/Devon Lee Carlson.jpg"
  },  
]

export default function MultimediaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-12">
          <Button asChild variant="ghost" className="mb-6 text-gray-600 hover:text-gray-900">
            <Link href="/work" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to My Work
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
              
              <CardContent className="py-2 px-6">               
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

      </div>
    </div>
  )
}