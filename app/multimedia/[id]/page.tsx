import { multimediaPageSpecifics } from '../multimediaData';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });
interface Props {
  params: { id: string };
}

export default function ProjectPage({ params }: Props) {
  const projectId = parseInt(params.id, 10);
  const project = multimediaPageSpecifics.find(p => p.id === projectId);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className={`p-6 max-w-4xl mx-auto ${inter.className}`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-1">{project.title}</h1>
        <h2 className="text-xl mb-4 text-gray-500">
          {new Date(project.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </h2>

        <div className="flex w-full justify-center h-80 mb-6 gap-16 rounded-lg overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="object-cover w-82 h-full rounded-lg"
          />
          {project.images && project.images.length > 0 && (
            <img
              src={project.images[0]}
              alt={`${project.title} extra`}
              className="object-cover w-82 h-full rounded-lg"
            />
          )}
        </div>


        <p className="text-gray-700 mb-4">{project.description}</p>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-col gap-2 text-center">
            {project.links.map((link, index) => (
              <Link
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black/10 text-blue-600 rounded-md hover:bg-black/20 hover:underline transition-colors duration-200"
              >
                {project.linkTitles[index]}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>

  );
}
