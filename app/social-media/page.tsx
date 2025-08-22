import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Eye, Heart, Share2, MessageCircle } from "lucide-react"

const socialContent = [
  {
    id: 1,
    title: "Breaking: Major Drug Bust Coverage",
    description: "Live Twitter thread covering county-wide drug operation with real-time updates.",
    platform: "Twitter",
    date: "2024-08-15",
    metrics: { views: "156K", likes: "2.8K", shares: "543" },
    image: "/social-breaking-news.jpg"
  },
  {
    id: 2,
    title: "Mental Health Resources Campaign",
    description: "Instagram story series highlighting community mental health resources.",
    platform: "Instagram",
    date: "2024-08-12",
    metrics: { views: "89K", likes: "3.2K", shares: "892" },
    image: "/social-mental-health.jpg"
  },
  {
    id: 3,
    title: "Behind the Courthouse",
    description: "TikTok series showing daily life of court reporting and legal proceedings.",
    platform: "TikTok",
    date: "2024-08-10",
    metrics: { views: "234K", likes: "12.5K", shares: "1.8K" },
    image: "/social-courthouse.jpg"
  },
  {
    id: 4,
    title: "Emergency Response Updates",
    description: "Facebook live coverage of emergency situations with safety information.",
    platform: "Facebook",
    date: "2024-08-08",
    metrics: { views: "67K", likes: "1.9K", shares: "423" },
    image: "/social-emergency.jpg"
  },
  {
    id: 5,
    title: "Justice System Explained",
    description: "Educational content breaking down legal processes for general audiences.",
    platform: "Instagram",
    date: "2024-08-05",
    metrics: { views: "45K", likes: "2.1K", shares: "634" },
    image: "/social-education.jpg"
  },
  {
    id: 6,
    title: "Journalism Q&A Sessions",
    description: "Interactive sessions answering questions about reporting and journalism ethics.",
    platform: "Instagram",
    date: "2024-08-01",
    metrics: { views: "23K", likes: "1.4K", shares: "267" },
    image: "/social-qa.jpg"
  }
]

const platforms = [
  { name: "Twitter", followers: "12.5K", color: "bg-blue-500" },
  { name: "Instagram", followers: "8.7K", color: "bg-pink-500" },
  { name: "TikTok", followers: "15.2K", color: "bg-gray-900" },
  { name: "Facebook", followers: "6.3K", color: "bg-blue-600" }
]

export default function SocialMediaPage() {
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Social Media & Digital Content</h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            Building community connections through strategic social media presence and real-time digital journalism.
          </p>

          {/* Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {platforms.map((platform) => (
              <div key={platform.name} className={`${platform.color} text-white p-4 rounded-lg text-center`}>
                <div className="font-bold text-lg">{platform.followers}</div>
                <div className="text-sm opacity-90">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialContent.map((content) => (
            <Card key={content.id} className="group hover:shadow-lg transition-all duration-300 bg-white">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded">
                    {content.platform}
                  </span>
                </div>
                
                {/* Metrics Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="grid grid-cols-3 gap-2 text-white text-xs">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {content.metrics.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {content.metrics.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      {content.metrics.shares}
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-3">
                  {new Date(content.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                
                <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <Button size="sm" variant="outline" className="w-full">
                  View Content
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">2.1M</div>
            <div className="text-gray-600">Monthly Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">86%</div>
            <div className="text-gray-600">Avg Engagement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">42.7K</div>
            <div className="text-gray-600">Total Followers</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Follow my channels for real-time updates and behind-the-scenes content.
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