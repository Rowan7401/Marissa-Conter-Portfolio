import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, PenTool, Share2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Stories that{" "}
                  <span className="text-primary bg-primary/10 px-3 py-2 rounded-xl inline-block">
                    matter
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  I'm Marissa Conter, a Seattle-based journalist uncovering the stories that connect us all.
                </p>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/work" className="flex items-center gap-2">
                    View My Work 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/kitsap-sun-headshot.jpg"
                  alt="Marissa Conter - Journalist"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating location badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm text-foreground p-4 rounded-2xl shadow-lg border border-white/20 animate-in zoom-in duration-500 delay-700">
                <p className="text-sm font-semibold flex items-center gap-2">
                  📍 Seattle, WA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-muted/30 via-secondary/5 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A glimpse into my recent journalism across different mediums
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Multimedia Card */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-primary overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/multimedia-journalism-video-setup.png"
                  alt="Multimedia Journalism Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-xl">
                    <Camera className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">
                    Multimedia
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">Video Storytelling</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compelling visual narratives that bring stories to life through video and photography.
                </p>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-secondary overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/social-media-workspace.png"
                  alt="Social Media Strategy Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-secondary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/30 rounded-xl">
                    <Share2 className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-secondary-foreground uppercase tracking-wide">
                    Social Media
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">Digital Engagement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic social media campaigns that amplify important stories and engage communities.
                </p>
              </CardContent>
            </Card>

            {/* Written Work Card */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-accent overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-600">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/journalist-laptop-notebook-coffee.png"
                  alt="Written Journalism Work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-accent/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/30 rounded-xl">
                    <PenTool className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="text-sm font-bold text-accent-foreground uppercase tracking-wide">
                    Written Work
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">In-Depth Articles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Investigative pieces and feature stories that dive deep into the issues that matter.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom duration-700 delay-800">
            <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
              <Link href="/work" className="flex items-center gap-2">
                Explore All Work 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom duration-700">
          <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-xl overflow-hidden">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">Let's Connect</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Have a story tip or interested in collaborating? I'd love to hear from you.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="mailto:marissa@example.com" className="flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}