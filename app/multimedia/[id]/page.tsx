"use client";

import { multimediaPageSpecifics } from "../multimediaData";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface Props {
  params: { id: string };
}

export default function ProjectPage({ params }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const width = container.clientWidth;
      const newIndex = Math.round(scrollPosition / width);
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const projectId = parseInt(params.id, 10);
  const project = multimediaPageSpecifics.find((p) => p.id === projectId);

  if (!project) return <p className="text-center text-red-500">Project not found.</p>;

  const prevId = projectId > 1 ? projectId - 1 : null;
  const nextId = projectId < multimediaPageSpecifics.length ? projectId + 1 : null;

  return (
    <div className="min-h-screen bg-[#016064] text-gray-900 relative overflow-hidden"> 
      <Navigation />

      <div className="relative z-10 pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Project Container */}
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-400/20 backdrop-blur-sm rounded-lg border-2 border-emerald-400/40 shadow-2xl p-8 md:p-12">
            
            {/* Title & Date */}
            <div className="text-center mb-10 pb-8 border-b-2 border-emerald-400/30">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl font-black text-white leading-tight mb-4">
                {project.title}
              </h1>
              
              {/* Decorative flourish */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              </div>

              <div className="flex items-center justify-center gap-2 text-white font-serif text-lg">
                <Calendar className="h-5 w-5" />
                <span>
                  {new Date(project.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* --- VIDEO SECTION --- */}
            {project.videoUrl && (
              <div className="relative mb-10 group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur-sm"></div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl bg-black aspect-video flex items-center justify-center">
                  <video
                    src={project.videoUrl}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}

            {/* Images Section */}
            {project.images?.length > 0 && (
              <div>
                {/* Desktop / Tablet Layout */}
                <div className="hidden md:flex justify-center items-center gap-6 flex-wrap mb-10">
                  {project.images.map(
                    (imgSrc, index) =>
                      imgSrc && (
                        <div key={index} className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                          <img
                            src={imgSrc}
                            alt={`${project.title} image ${index + 1}`}
                            className="relative object-cover w-112 h-64 md:h-96 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500 contrast-110"
                          />
                        </div>
                      )
                  )}
                </div>

                {/* Mobile Carousel */}
                <div className="block md:hidden mb-10">
                  {/* Scrollable Track */}
                  <div
                    ref={scrollRef}
                    className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-4 pb-4 no-scrollbar"
                  >
                    {project.images.map(
                      (imgSrc, index) =>
                        imgSrc && (
                          <div
                            key={index}
                            className="flex-shrink-0 snap-center w-full px-4"
                            style={{ scrollSnapAlign: "center" }}
                          >
                            <div className="relative group">
                              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
                              <img
                                src={imgSrc}
                                alt={`${project.title} image ${index + 1}`}
                                className="relative object-cover w-full h-64 rounded-lg shadow-lg contrast-110"
                              />
                            </div>
                          </div>
                        )
                    )}
                  </div>

                  {/* Dots */}
                  <div className="flex justify-center mt-3 gap-3">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (scrollRef.current) {
                            scrollRef.current.scrollTo({
                              left: scrollRef.current.clientWidth * i,
                              behavior: "smooth",
                            });
                          }
                        }}
                        className={`h-3 w-3 rounded-full border border-emerald-300 transition-all duration-300 ${activeIndex === i
                            ? "bg-emerald-400 scale-110 shadow-[0_0_6px_rgba(16,185,129,0.8)]"
                            : "bg-emerald-800/40 hover:bg-emerald-400/60"
                          }`}
                      ></button>
                    ))}
                  </div>

                </div>
              </div>
            )}

            {/* TikTok Embeds */}
            {project.tiktoks && project.tiktoks.length > 0 && (
              <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
                {project.tiktoks.map((tiktok, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <iframe
                      src={tiktok}
                      width="280"
                      height="500"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="relative rounded-xl shadow-lg"
                    ></iframe>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-8 mb-10 shadow-lg">
              <p className="font-serif text-gray-800 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Dynamic Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
                {project.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base font-semibold px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-green-400 hover:to-emerald-400 text-white border-2 border-emerald-300 rounded shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="h-8 w-8" />
                    {project.linkTitles[index]}
                  </Link>
                ))}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-emerald-400/30 gap-4">
              {/* Previous Button */}
              {prevId ? (
                <Link
                  href={`/multimedia/${prevId}`}
                  className="font-serif text-base text-sm md:text-lg font-semibold px-1 md:px-5 py-3 bg-white/90 text-gray-800 hover:bg-white rounded shadow-md hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="hidden md:inline">Previous Project</span>
                  <span className="md:hidden">Previous</span>
                </Link>
              ) : (
                <div />
              )}

              {/* Return to My Work */}
              <Link
                href="/multimedia"
                className="font-serif text-base text-sm md:text-lg font-semibold px-1 md:px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-green-400 hover:to-emerald-400 text-white border-2 border-emerald-300 rounded shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="hidden md:inline">Return to Multimedia</span>
                <span className="md:hidden">Back</span>
              </Link>

              {/* Next Button */}
              {nextId ? (
                <Link
                  href={`/multimedia/${nextId}`}
                  className="font-serif text-base text-sm md:text-lg font-semibold px-1 md:px-5 py-3 bg-white/90 text-gray-800 hover:bg-white rounded shadow-md hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <span className="hidden md:inline">Next Project</span>
                  <span className="md:hidden">Next</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}