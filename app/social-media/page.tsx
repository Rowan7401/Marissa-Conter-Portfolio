import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { socialMediaSpecifics } from "./socialMediaData"

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white mt-16">
      <Navigation />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 mx-auto gap-x-12">

        {/* Header Row with Back Button */}
        <Button
          asChild
          variant="ghost"
          className="text-white-600 hover:text-gray-900 flex items-center w-36 gap-2 mt-4 md:mt-0 mb-1 md:mb-24 ml-0 md:ml-12"
        >
          <Link href="/work">
            <ArrowLeft className="h-4 w-4" />
            Back to My Work
          </Link>
        </Button>

        <div className="md:text-left animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text font-bold mt-0 md:mt-6 mb-2 ml-8 md:ml-64">
            Social Media Content
          </h1>
          <p className="text-lg text-gray-600 md:max-w-[75%] max-w-[97%] leading-relaxed text-white text-center ml-2 md:ml-24">
            As editor of my school newspaper, I was responsible for creating posts on Instagram, Twitter/X and Facebook for each article.
             I was also responsible for posting articles on our newspaper's website.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 justify-items-center">
        {socialMediaSpecifics.map((project) => (
          <Card
            key={project.id}
            className="w-[20rem] md:w-[25rem] pb-2 px-4 pt-4 group shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 hover:-translate-y-2"
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
            <CardContent className="pb-2 mb-2 flex flex-col w-full h-[15vh]">
              <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                {project.title}
              </h3>

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
    </div>
  )
}
