import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Download, MapPin, Calendar, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                About <span className="text-primary">Marissa</span>
              </h1>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
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

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/work">View My Work</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
                <img
                  src="/grad-headshot.jpg"
                  alt="Marissa Conter Professional Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground">Seattle, Washington</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Experience</h3>
                <p className="text-muted-foreground">3+ Years in Journalism</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-accent-foreground mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Specialization</h3>
                <p className="text-muted-foreground">Community & Tech Stories</p>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-primary">Writing & Reporting</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Investigative journalism</li>
                    <li>• Feature writing</li>
                    <li>• Interview techniques</li>
                    <li>• Fact-checking and verification</li>
                    <li>• AP Style proficiency</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-secondary">Digital & Multimedia</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Video production and editing</li>
                    <li>• Photography and photo editing</li>
                    <li>• Social media strategy</li>
                    <li>• Content management systems</li>
                    <li>• SEO and web analytics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Background */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Education & Background</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg text-foreground">Bachelor of Arts in Journalism</h3>
                <p className="text-muted-foreground">University of Washington, Seattle</p>
                <p className="text-sm text-muted-foreground">Graduated Magna Cum Laude, 2021</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="font-semibold text-lg text-foreground">Digital Media Certificate</h3>
                <p className="text-muted-foreground">Seattle Community College</p>
                <p className="text-sm text-muted-foreground">Completed 2022</p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-semibold text-lg text-foreground">Freelance Journalist</h3>
                <p className="text-muted-foreground">Various Seattle Publications</p>
                <p className="text-sm text-muted-foreground">2021 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
