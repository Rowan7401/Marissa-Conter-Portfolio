import { multimediaPageSpecifics } from "../multimediaData";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface Props {
  params: { id: string };
}

export default function ProjectPage({ params }: Props) {
  const projectId = parseInt(params.id, 10);
  const project = multimediaPageSpecifics.find((p) => p.id === projectId);

  if (!project) return <p className="text-center text-red-500">Project not found.</p>;

  const prevId = projectId > 1 ? projectId - 1 : null;
  const nextId = projectId < multimediaPageSpecifics.length ? projectId + 1 : null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white"> 
      <Navigation />

      <div className="p-6 max-w-5xl mx-auto mt-24">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-200 animate-in fade-in slide-in-from-bottom duration-700">
          {/* Title & Date */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
              {project.title}
            </h1>
            <h2 className="text-lg text-gray-500">
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </h2>
          </div>

          {/* Images Section */}
          {project.images && project.images.length > 0 && (
            <div className="flex justify-center items-center gap-6 flex-wrap mb-10">
              {project.images.map(
                (imgSrc, index) =>
                  imgSrc && (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${project.title} image ${index + 1}`}
                      className="object-cover w-80 h-[40vh] rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                  )
              )}
            </div>
          )}

          {/* TikTok Embeds */}
          {project.tiktoks && project.tiktoks.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-10 mb-8">
              {project.tiktoks.map((tiktok, index) => (
                <iframe
                  key={index}
                  src={tiktok}
                  width="280"
                  height="500"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl shadow-md hover:shadow-lg transition-shadow"
                ></iframe>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-700 mb-8 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            {project.description}
          </p>

          {/* Dynamic Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-col gap-4 items-center mb-10">
              {project.links.map((link, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  {project.linkTitles[index]}
                </Link>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-10">
            {/* Previous Button */}
            {prevId ? (
              <Link
                href={`/multimedia/${prevId}`}
                className="px-5 py-3 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 hover:scale-105 transition-transform"
              >
                ← Previous Project
              </Link>
            ) : (
              <div />
            )}

            {/* Return to My Work */}
            <Link
              href="/multimedia"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              Return to My Multimedia Work
            </Link>

            {/* Next Button */}
            {nextId ? (
              <Link
                href={`/multimedia/${nextId}`}
                className="px-5 py-3 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 hover:scale-105 transition-transform"
              >
                Next Project →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
