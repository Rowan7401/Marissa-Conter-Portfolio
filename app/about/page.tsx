import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Download, MapPin, Calendar, Award, Camera, PenTool } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                About <span className="text-primary">Marissa</span>
              </h1>
              
              <div className="prose prose-xl text-muted-foreground leading-relaxed space-y-6">
                <p>
                  I'm a passionate journalist based in the vibrant city of Seattle, where I've been telling stories that
                  matter for the past three years. My journey into journalism began with a simple belief: every person
                  has a story worth telling, and every community deserves to have its voice heard.
                </p>
                <p>
                  Growing up in the Pacific Northwest, I developed a deep appreciation for both urban innovation and
                  environmental stewardship. This unique perspective shapes my reporting, whether I'm covering local
                  politics, community initiatives, or the intersection of technology and society.
                </p>
                <p>
                  My work spans multiple mediums – from in-depth written features to multimedia storytelling and
                  strategic social media campaigns. I believe in meeting audiences where they are and using the most
                  effective medium to tell each story.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="#" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/work">View My Work</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="aspect-[3/4] relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/grad-headshot.jpg"
                  alt="Marissa Conter Professional Photo"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: MapPin,
                title: "Location",
                description: "Seattle, Washington",
                color: "text-primary",
                delay: "delay-200"
              },
              {
                icon: Calendar,
                title: "Experience",
                description: "3+ Years in Journalism",
                color: "text-secondary",
                delay: "delay-400"
              },
              {
                icon: Award,
                title: "Specialization",
                description: "Community & Tech Stories",
                color: "text-accent-foreground",
                delay: "delay-600"
              }
            ].map((item, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom duration-700 ${item.delay}`}>
                <CardContent className="p-8">
                  <item.icon className={`h-10 w-10 ${item.color} mx-auto mb-4`} />
                  <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills & Expertise */}
          <div className="mb-20 animate-in fade-in slide-in-from-bottom duration-700 delay-800">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-2xl mb-6 text-primary flex items-center gap-3">
                    <PenTool className="h-6 w-6" />
                    Writing & Reporting
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Investigative journalism
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Feature writing
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Interview techniques
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Fact-checking and verification
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      AP Style proficiency
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-2xl mb-6 text-secondary flex items-center gap-3">
                    <Camera className="h-6 w-6" />
                    Digital & Multimedia
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Video production and editing
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Photography and photo editing
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Social media strategy
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Content management systems
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      SEO and web analytics
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Background */}
          <div className="bg-gradient-to-br from-muted/30 to-secondary/10 rounded-3xl p-12 animate-in fade-in slide-in-from-bottom duration-700 delay-1000">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Education & Background</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: "Bachelor of Arts in Journalism",
                  institution: "University of Washington, Seattle",
                  detail: "Graduated Magna Cum Laude, 2021",
                  color: "border-primary"
                },
                {
                  title: "Digital Media Certificate",
                  institution: "Seattle Community College",
                  detail: "Completed 2022",
                  color: "border-secondary"
                },
                {
                  title: "Freelance Journalist",
                  institution: "Various Seattle Publications",
                  detail: "2021 - Present",
                  color: "border-accent"
                }
              ].map((item, index) => (
                <div key={index} className={`border-l-4 ${item.color} pl-8 py-4 hover:bg-white/50 transition-colors duration-300 rounded-r-lg`}>
                  <h3 className="font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}