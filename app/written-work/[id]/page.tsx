import { writtenWorkSpecifics } from '../writtenWorkData';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

interface Props {
  params: { id: string };
}

export default function ProjectPage({ params }: Props) {
  const projectId = parseInt(params.id, 10);
  const project = writtenWorkSpecifics.find(p => p.id === projectId);

  if (!project) return <p>Project not found.</p>;

  const prevId = projectId > 1 ? projectId - 1 : null;
  const nextId = projectId < writtenWorkSpecifics.length ? projectId + 1 : null;

  return (
    <div className={`min-h-screen bg-gray-50 pt-20 ${inter.className}`}>
      {/* Navigation Bar */}
      <Navigation />

      <div className="p-6 max-w-5xl mx-auto mt-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
          {/* Title & Date */}
          <h1 className="text-3xl font-bold mb-1">{project.title}</h1>
          <h2 className="text-xl mb-4 text-gray-500">
            {new Date(project.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </h2>
        
          {/* Images Section */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {project.images && project.images.length > 0 && (
              project.images.map((imgSrc, index) => (
                imgSrc && ( // Prevent rendering empty strings
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`${project.title} image ${index + 1}`}
                    className="object-cover w-80 h-[40vh] rounded-lg"
                  />
                )
              ))
            )}
          </div>


          {/* TikTok Embeds */}
          {project.tiktoks && project.tiktoks.length > 0 && (
            <div className="flex flex-row justify-center items-center gap-12 mt-2 mb-4">
              {project.tiktoks.map((tiktok, index) => (
                <iframe
                  key={index}
                  src={tiktok}
                  width="280"
                  height="500"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-md"
                ></iframe>
              ))}
            </div>
          )}


          {/* Description */}
          <p className="text-gray-700 mb-6 mt-6 whitespace-pre-line">{project.description}</p>

          {/* Dynamic Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-col gap-3 text-center mb-8">
              {project.links.map((link, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 text-blue-600 rounded-md hover:bg-gray-200 hover:underline transition-colors duration-200"
                >
                  {project.linkTitles[index]}
                </Link>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            {/* Previous Button */}
            {prevId ? (
              <Link
                href={`/written-work/${prevId}`}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                ← Previous Article
              </Link>
            ) : (
              <div />
            )}

            {/* Return to My Work */}
            <Link
              href="/written-work"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
            >
              Return to My Written Work
            </Link>

            {/* Next Button */}
            {nextId ? (
              <Link
                href={`/written-work/${nextId}`}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Next Article →
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
