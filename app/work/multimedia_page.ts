import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Camera, Play, ExternalLink } from "lucide-react"

const multimediaProjects = [
  {
    title: "Seattle Housing Crisis: A Visual Story",
    description: "A comprehensive multimedia piece exploring the housing affordability crisis through personal stories, interviews, and data visualization. This project combines video testimonials from affected families with interactive maps showing displacement patterns across Seattle neighborhoods.",
    image: "/seattle-housing-crisis-thumbnail.png",
    category: "Documentary",
    duration: "8 min",
    year: "2024",
    link: "#",
    featured: true
  },
  {
    title: "Climate Change in the Pacific Northwest",
    description: "Interactive documentary showcasing the environmental impacts on local communities, featuring drone footage of changing landscapes and interviews with climate scientists and affected residents.",
    image: "/pacific-northwest-climate-change.png",
    category: "Environmental",
    duration: "12 min",
    year: "2024",
    link: "#"
  },
  {
    title: "Tech Workers and Community Impact",
    description: "Video series examining how the tech boom affects Seattle neighborhoods, exploring gentrification, local business changes, and community responses through immersive storytelling.",
    image: "/seattle-tech-community.png",
    category: "Series",
    duration: "6 episodes",
    year: "2023",
    link: "#"
  },
  {
    title: "Court Proceedings: Behind the Scenes",
    description: "Multimedia coverage of high-profile court cases, providing context and analysis through video explainers and photojournalism from inside Kitsap County courtrooms.",
    image: "/multimedia-journalism-video-setup.png",
    category: "News",
    duration: "4 min",
    year: "2024",
    link: "#"
  },
  {
    title: "Public Safety Training Initiative",
    description: "Documentary following local police department's community engagement training, featuring interviews with officers and community leaders about building trust and improving relationships.",
    image: "/journalist-laptop-notebook-coffee.png",
    category: "Documentary",
    duration: "15 min",
    year: "2023",
    link: "#"
  },
  {
    title: "Crime Scene Investigation Process",
    description: "Educational video series showing how local law enforcement processes crime scenes, featuring interviews with forensic experts and step-by-step documentation of investigation procedures.",
    image: "/social-media-workspace.png",
    category: "Educational",
    duration: "10 min",
    year: "2024",
    link: "#"
  }
]

export default function MultimediaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <Button asChild variant="outline" className="mb-6 border-orange-300 text-orange-700 hover:bg-orange-50">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                  <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
                    Multimedia
                  </span> Work
                </h1>
                <p className="text-xl text-gray-600 mt-2">Visual storytelling that brings complex issues to life</p>
              </div>
            </div>
          </div>

          {/* Featured Project */}
          {multimediaProjects.filter(project => project.featured).map((project, index) => (
            <div key={index} className="mb-20 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border-2 border-orange-200">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full mb-6">
                  Featured Project
                </span>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <span className="px-3 py-1 bg-white text-orange-600 text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-white text-orange-600 text-sm font-semibold rounded-full">
                        {project.duration}
                      </span>
                      <span className="px-3 py-1 bg-white text-orange-600 text-sm font-semibold rounded-full">
                        {project.year}
                      </span>
                    </div>
                    
                    <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      <Link href={project.link} className="flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Watch Now
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="relative group">
                    <div className="aspect-video relative overflow-hidden rounded-2xl shadow-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-orange-600 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Other Projects Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              More Multimedia Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {multimediaProjects.filter(project => !project.featured).map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-orange-500 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="h-4 w-4 text-orange-600 ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded">
                        {project.category}
                      </span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded">
                        {project.duration}
                      </span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded">
                        {project.year}
                      </span>
                    </div>
                    
                    <Button asChild variant="outline" size="sm" className="w-full group/btn border-orange-300 text-orange-700 hover:bg-orange-50">
                      <Link href={project.link} className="flex items-center justify-center gap-2">
                        Watch Project
                        <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-1000">
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 shadow-xl">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Video Collaboration?</h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Let's discuss how multimedia storytelling can bring your story to life.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  <Link href="mailto:marissaconter@gmail.com">Get In Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}