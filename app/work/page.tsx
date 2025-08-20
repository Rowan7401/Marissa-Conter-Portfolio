import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Camera, Share2, PenTool } from "lucide-react"

const workCategories = {
  multimedia: {
    title: "Multimedia",
    icon: Camera,
    color: "text-primary",
    bgColor: "bg-primary/10",
    projects: [
      {
        title: "Seattle Housing Crisis: A Visual Story",
        description:
          "A comprehensive multimedia piece exploring the housing affordability crisis through personal stories and data visualization.",
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
  social: {
    title: "Social Media",
    icon: Share2,
    color: "text-secondary",
    bgColor: "bg-secondary/20",
    projects: [
      {
        title: "Local Election Coverage Campaign",
        description:
          "Real-time social media coverage of Seattle city council elections with live updates and voter engagement.",
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
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Sustainability", "Multi-platform", "Awareness"],
        link: "#",
      },
    ],
  },
  written: {
    title: "Written Work",
    icon: PenTool,
    color: "text-accent-foreground",
    bgColor: "bg-accent/20",
    projects: [
      {
        title: "The Future of Remote Work in Seattle",
        description:
          "In-depth analysis of how remote work policies are reshaping Seattle's business district and community dynamics.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Feature", "Business", "Analysis"],
        link: "#",
      },
      {
        title: "Investigating Food Insecurity",
        description: "Three-part investigative series on food access issues in Seattle neighborhoods.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Investigative", "Social Issues", "Series"],
        link: "#",
      },
      {
        title: "Arts Community Recovery Post-Pandemic",
        description: "Feature story on how Seattle's arts community is rebuilding and adapting to new realities.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Arts", "Community", "Recovery"],
        link: "#",
      },
    ],
  },
}

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of stories told through different mediums, each chosen to best serve the narrative and
              connect with audiences in meaningful ways.
            </p>
          </div>

          {/* Work Categories */}
          {Object.entries(workCategories).map(([key, category]) => {
            const IconComponent = category.icon
            return (
              <section key={key} className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                            <Link href={project.link} className="flex items-center justify-center gap-2">
                              View Project <ExternalLink className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )
          })}

          {/* Contact CTA */}
          <div className="text-center bg-muted/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Interested in Collaborating?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always looking for new stories to tell and meaningful projects to work on. Let's discuss how we can
              work together.
            </p>
            <Button asChild size="lg">
              <Link href="mailto:marissa@example.com">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
