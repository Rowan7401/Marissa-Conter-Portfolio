import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ArrowRight, Camera, PenTool, Share2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-20 pb-12 px-6 bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Stories that <span className="text-primary bg-primary/10 px-2 py-1 rounded-lg">matter</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Marissa Conter, a Seattle-based journalist uncovering the stories that connect us all.
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/work"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-105"
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-secondary/30 text-secondary-foreground rounded-xl font-medium hover:bg-secondary/40 transition-all"
                >
                  About Me
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/kitsap-sun-headshot.jpg"
                  alt="Marissa Conter - Journalist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-3 rounded-2xl shadow-lg border-2 border-white">
                <p className="text-sm font-bold">📍 Seattle, WA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-muted/50 via-secondary/10 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into my recent journalism across different mediums
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-primary">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <img
                  src="/multimedia-journalism-video-setup.png"
                  alt="Multimedia Work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-primary/5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Camera className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">Multimedia</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Video Storytelling</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Compelling visual narratives that bring stories to life through video and photography.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-secondary">
              <div className="aspect-video bg-gradient-to-br from-secondary/30 to-secondary/10 overflow-hidden">
                <img
                  src="/social-media-workspace.png"
                  alt="Social Media Work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-secondary/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-secondary/30 rounded-full">
                    <Share2 className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-secondary-foreground uppercase tracking-wide">
                    Social Media
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Digital Engagement</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Strategic social media campaigns that amplify important stories and engage communities.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-accent">
              <div className="aspect-video bg-gradient-to-br from-accent/30 to-accent/10 overflow-hidden">
                <img
                  src="/journalist-laptop-notebook-coffee.png"
                  alt="Written Work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-accent/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-accent/30 rounded-full">
                    <PenTool className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="text-sm font-bold text-accent-foreground uppercase tracking-wide">Written Work</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">In-Depth Articles</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Investigative pieces and feature stories that dive deep into the issues that matter.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/work"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-lg"
            >
              Explore All Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-accent/20 via-background to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
            <h2 className="text-3xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have a story tip or interested in collaborating? I'd love to hear from you.
            </p>
            <Link
              href="mailto:marissa@example.com"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
