import { Metadata } from 'next';
import { projects } from '@/lib/data';
import { slugify, createMetadata } from '@/lib/utils';
import ProjectDetail from './ProjectDetail';

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: `${project.id}-${slugify(project.title)}`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id.split('-')[0]; // Extract the numeric ID
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return createMetadata(
    project.title,
    project.description,
    project.image
  );
}

export default function ProjectPage({ params }: Props) {
  const id = params.id.split('-')[0]; // Extract the numeric ID
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Project Not Found</h1>
          <a 
            href="/projects"
            className="text-[#4B269F] hover:text-[#4B269F]/90"
          >
            Back to Projects
          </a>
        </div>
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}