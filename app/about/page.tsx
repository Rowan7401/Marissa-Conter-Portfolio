import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Download, MapPin, Calendar, Award, Camera, PenTool } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      <Navigation />

      {/* About Hero Section */}
      <section className="w-[95%] md:w-[98%] pt-28 pb-16 px-6">
        <div className="ml-3 md:ml-54 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
              About Me
            </h1>

            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>
                I work as a reporter for the Kitsap Sun, covering crime, courts, public safety threats and local
                features. This is my first position since I graduated Magna Cum Laude from Gonzaga University in
                 May 2024 with a Bachelor of Arts, where I majored in journalism and minored in writing.
              </p>
              <p>
                My journalism journey began early in school at my college newspaper where I started as a staff writer
                 my freshman year and graduated as editor-in-chief.
              </p>
              <p>
                I was also the writing editor for my school's yearbook, and during my time abroad in Florence, I had an
                 internship for an English-speaking publication. I am passionate about writing and getting to tell stories that are important!
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <Button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 shadow-xl rounded-xl">
                <a
                  href="/Marissa_Conter_Resume.docx"
                  download
                  className="flex items-center gap-3"
                >
                  <Download className="w-6 h-6" />
                  Download My Resume
                </a>
              </Button>
              <Button className="px-8 py-4 text-lg font-semibold bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 shadow-xl rounded-xl">
                <Link href="https://www.kitsapsun.com/search/?q=marissa+conter">View My Kitsap Sun Work</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="w-80 h-130 relative overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/grad-headshot.jpg"
                alt="Marissa Conter Professional Photo"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 ml-56 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-4 rounded-2xl shadow-xl 
                border-4 border-white animate-in zoom-in duration-500 delay-700">
              <p className="text-lg font-bold flex items-center gap-2">📍 Spokane, WA (Gonzaga)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MapPin,
              title: "Location",
              description: "Seattle, Washington",
              color: "text-emerald-400",
              delay: "delay-200",
            },
            {
              icon: Calendar,
              title: "Experience",
              description: "5+ Years in Journalism",
              color: "text-blue-400",
              delay: "delay-400",
            },
            {
              icon: Award,
              title: "Specialization",
              description: "Breaking News, Crime, & Culture",
              color: "text-indigo-400",
              delay: "delay-600",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`bg-white/10 backdrop-blur-md border border-white/20 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 animate-in fade-in slide-in-from-bottom ${item.delay}`}
            >
              <CardContent className="p-8">
                <item.icon className={`h-10 w-10 ${item.color} mx-auto mb-4`} />
                <h3 className="font-semibold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 border border-white/20 hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400 flex items-center gap-3">
                <PenTool className="h-6 w-6" />
                Writing & Reporting
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Investigative journalism",
                  "Breaking news writing",
                  "Interview skills",
                  "Fact-checking and data",
                  "AP Style proficiency",
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border border-white/20 hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-3">
                <Camera className="h-6 w-6" />
                Digital & Multimedia
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Video production and editing",
                  "Photography and photo editing",
                  "Social media strategy",
                  "Content management systems",
                  "SEO and web analytics",
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
