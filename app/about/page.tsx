import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Download, MapPin, Calendar, Award, Camera, PenTool, Quote } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#016064] text-gray-900 relative overflow-hidden">
      <Navigation />

      {/* About Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="font-serif text-6xl lg:text-7xl font-black bg-gradient-to-r from-green-200 via-teal-100 to-emerald-300 bg-clip-text text-transparent leading-tight mb-4">
                About Me
              </h1>
              {/* Decorative flourish */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              </div>
            </div>

            <div className="space-y-6 text-lg text-white leading-relaxed font-serif">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="font-serif text-lg font-semibold h-14 px-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-green-400 hover:to-emerald-400 text-white border-2 border-emerald-300 shadow-lg rounded transform hover:scale-105 transition-all duration-300">
                <a
                  href="/Marissa_Conter_Resume.docx"
                  download
                  className="flex items-center gap-3"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button className="font-serif text-lg font-semibold h-14 px-8 border-2 border-emerald-300 bg-gradient-to-r from-emerald-400 to-teal-500 text-white hover:bg-emerald-300/30 shadow-lg rounded transform hover:scale-105 transition-all duration-300">
                <Link href="https://www.kitsapsun.com/search/?q=marissa+conter">
                  View My Kitsap Sun Work
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Frame elements */}
              <div className="absolute -inset-6 border-4 border-emerald-400/50 rounded-lg rotate-1"></div>
              <div className="absolute -inset-8 border-2 border-green-300/40 rounded-lg -rotate-2"></div>
              
              {/* Main photo container */}
              <div className="relative w-80 h-[500px] lg:w-96 lg:h-[550px]">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-white"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-white"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-white"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-white"></div>
                
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-4 ring-white/70 group-hover:ring-green-300 transition-all duration-500">
                  <Image
                    src="/grad-headshot.jpg"
                    alt="Marissa Conter Professional Photo"
                    fill
                    className="object-cover contrast-110 transition-all duration-700 group-hover:contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-800/20"></div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-3 rounded shadow-xl border border-emerald-400/60">
                <p className="font-serif text-base font-bold flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Spokane, WA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: MapPin,
              title: "Location",
              description: "Seattle, Washington",
            },
            {
              icon: Calendar,
              title: "Experience",
              description: "5+ Years in Journalism",
            },
            {
              icon: Award,
              title: "Specialization",
              description: "Breaking News, Crime, & Culture",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500"
            >
              <item.icon className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="font-serif font-bold text-xl text-white mb-2 text-center">{item.title}</h3>
              <p className="font-serif text-white text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-serif text-5xl font-black text-white text-center mb-4">Skills & Expertise</h2>
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm rounded-lg p-8 border border-emerald-400/50 shadow-lg hover:shadow-xl transition-all">
            <h3 className="font-serif text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <PenTool className="h-7 w-7" />
              Writing & Reporting
            </h3>
            <ul className="space-y-4 text-white font-serif text-lg">
              {[
                "Investigative journalism",
                "Breaking news writing",
                "Interview skills",
                "Fact-checking and data",
                "AP Style proficiency",
              ].map((skill, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/30 to-teal-400/30 backdrop-blur-sm rounded-lg p-8 border border-emerald-400/50 shadow-lg hover:shadow-xl transition-all">
            <h3 className="font-serif text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <Camera className="h-7 w-7" />
              Digital & Multimedia
            </h3>
            <ul className="space-y-4 text-white font-serif text-lg">
              {[
                "Video production and editing",
                "Photography and photo editing",
                "Social media strategy",
                "Content management systems",
                "SEO and web analytics",
              ].map((skill, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}