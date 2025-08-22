import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Calendar, Clock, Eye } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "Drug Trafficking Ring Dismantled in County-Wide Operation",
    excerpt: "A coordinated law enforcement effort led to 12 arrests and the seizure of $2 million in narcotics across three counties.",
    date: "2024-08-15",
    readTime: "4 min read",
    image: "/crime-investigation.jpg",
    views: "12.5K",
    category: "Crime"
  },
  {
    id: 2,
    title: "Mental Health Crisis Behind Bars: An Investigation",
    excerpt: "An in-depth look at how overcrowding and understaffing affect mental health treatment in local jails.",
    date: "2024-08-10",
    readTime: "8 min read",
    image: "/jail-investigation.jpg",
    views: "8.2K",
    category: "Investigation"
  },
  {
    id: 3,
    title: "New Emergency Response System Cuts Response Times",
    excerpt: "Technology upgrades and strategic planning reduce average emergency response times by 2.5 minutes.",
    date: "2024-08-05",
    readTime: "5 min read",
    image: "/emergency-response.jpg",
    views: "6.8K",
    category: "Public Safety"
  },
  {
    id: 4,
    title: "Youth Basketball Program Provides Safe Haven",
    excerpt: "How a local basketball program is making a difference in one of Bremerton's challenging neighborhoods.",
    date: "2024-07-28",
    readTime: "6 min read",
    image: "/youth-program.jpg",
    views: "4.5K",
    category: "Community"
  },
  {
    id: 5,
    title: "Court Records Reveal Sentencing Disparities",
    excerpt: "Investigation uncovers significant differences in sentences for similar crimes, raising fairness questions.",
    date: "2024-07-20",
    readTime: "12 min read",
    image: "/courthouse.jpg",
    views: "15.3K",
    category: "Investigation"
  },
  {
    id: 6,
    title: "Deputies Paired with Mental Health Counselors",
    excerpt: "Sheriff's office launches program pairing officers with mental health professionals for crisis calls.",
    date: "2024-07-15",
    readTime: "5 min read",
    image: "/mental-health-response.jpg",
    views: "7.1K",
    category: "Public Safety"
  }
]

export default function WrittenWorkPage() {
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Written Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            In-depth reporting on crime, courts, and public safety across the Pacific Northwest.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 bg-white">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {article.views}
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Button size="sm" variant="outline" className="w-full group">
                  Read Article
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a Story Tip?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            I'm always looking for important stories about crime, courts, and public safety issues.
          </p>
          <Button asChild>
            <Link href="mailto:marissaconter@gmail.com">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}