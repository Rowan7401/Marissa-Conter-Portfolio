import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Camera, Share2, PenTool } from "lucide-react"

const workCategories = [
  {
    id: "multimedia",
    title: "Multimedia",
    icon: Camera,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary",
    projects: [
      {
        title: "Seattle Housing Crisis: A Visual Story",
        description: "A comprehensive multimedia piece exploring the housing affordability crisis through personal stories and data visualization.",
        image: "/seattle-housing-crisis-thumbnail.png",
        tags: ["Video", "Photography", "Data Viz"],
        link: "#",
      },
      {
        title: "Climate Change in the Pacific Northwest",
        description: "Interactive documentary showcasing the environmental impacts on local communities.",
        image: "/pacific-northwest-climate-change.png",
        tags: ["Documentary", "Interactive", "Environmental"],
        link: "#",
      },
      {
        title: "Tech Workers and Community Impact",
        description: "Video series examining how the tech boom affects Seattle neighborhoods.",
        image: "/seattle-tech-community.png",
        tags: ["Video Series", "Community", "Tech"],
        link: "#",
      },
    ],
  },
  {
    id: "social",
    title: "Social Media",
    icon: Share2,
    color: "text-secondary",
    bgColor: "bg-secondary/20",
    borderColor: "border-secondary",
    projects: [
      {
        title: "Local Election Coverage Campaign",
        description: "Real-time social media coverage of Seattle city council elections with live updates and voter engagement.",
        image: "/seattle-election-graphics.png",
        tags: ["Politics", "Live Coverage", "Engagement"],
        link: "#",
      },
      {
        title: "Small Business Spotlight Series",
        description: "Instagram and TikTok series highlighting local Seattle businesses during the pandemic.",
        image: "/seattle-small-business-spotlight.png",
        tags: ["Instagram", "TikTok", "Community"],
        link: "#",
      },
      {
        title: "Environmental Awareness Campaign",
        description: "Multi-platform campaign promoting sustainable practices in urban environments.",
        image: "/journalist-laptop-notebook-coffee.png",
        tags: ["Sustainability", "Multi-platform", "Awareness"],
        link: "#",
      },
    ],
  },
  {
    id: "written",
    title: "Written Work",
    icon: PenTool,
    color: "text-accent-foreground",
    bgColor: "bg-accent/20",
    borderColor: "border-accent",
    projects: [
      {
        title: "The Future of Remote Work in Seattle",
        description: "In-depth analysis of how remote work policies are reshaping Seattle's business district and community dynamics.",
        image: "/multimedia-journalism-video-setup.png",
        tags: ["Feature", "Business", "Analysis"],
        link: "#",
      },
      {
        title: "Investigating Food Insecurity",
        description: "Three-part investigative series on food access issues in Seattle neighborhoods.",
        image: "/social-media-workspace.png",
        tags: ["Investigative", "Social Issues", "Series"],
        link: "#",
      },
      {
        title: "Arts Community Recovery Post-Pandemic",
        description: "Feature story on how Seattle's arts community is rebuilding and adapting to new realities.",
        image: "/journalist-laptop-notebook-coffee.png",
        tags: ["Arts", "Community", "Recovery"],
        link: "#",
      },
    ],
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of stories told through different mediums, each chosen to best serve the narrative and
              connect with audiences in meaningful ways.
            </p>
          </div>

          {/* Work Categories */}
          {workCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <section key={category.id} className="mb-24">
                <div className={`flex items-center gap-4 mb-12 animate-in fade-in slide-in-from-left duration-700 delay-${categoryIndex * 200}`}>
                  <div className={`p-4 rounded-xl ${category.bgColor}`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project, projectIndex) => (
                    <Card
                      key={projectIndex}
                      className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${category.borderColor} border-l-4 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700`}
                      style={{ animationDelay: `${(categoryIndex * 200) + (projectIndex * 100)}ms` }}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Button asChild variant="outline" size="sm" className="w-full group/btn">
                          <Link href={project.link} className="flex items-center justify-center gap-2">
                            View Project 
                            <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )
          })}

          {/* Contact CTA */}
          <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-1000">
            <Card className="bg-gradient-to-br from-muted/30 to-secondary/10 border-white/50 shadow-xl overflow-hidden">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold text-foreground mb-6">Interested in Collaborating?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  I'm always looking for new stories to tell and meaningful projects to work on. Let's discuss how we can
                  work together.
                </p>
                <Button asChild size="lg" className="group">
                  <Link href="mailto:marissa@example.com" className="flex items-center gap-2">
                    Get In Touch
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}