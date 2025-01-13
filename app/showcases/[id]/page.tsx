import { Metadata } from 'next';
import { showcases } from '@/lib/data';
import ShowcaseDetail from './ShowcaseDetail';
import ShowcaseDetailV2 from './ShowcaseDetailV2';

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return showcases.map((showcase) => ({
    id: showcase.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const showcase = showcases.find((s) => s.id === params.id);

  if (!showcase) {
    return {
      title: 'Showcase Not Found',
      description: 'The requested showcase could not be found.',
    };
  }

  return {
    title: showcase.title,
    description: showcase.description,
    openGraph: {
      title: showcase.title,
      description: showcase.description,
      images: [{ url: showcase.image }],
    },
  };
}

export default function ShowcasePage({ params }: Props) {
  const showcase = showcases.find((s) => s.id === params.id);

  if (!showcase) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Showcase Not Found</h1>
          <a 
            href="/showcases"
            className="text-[#4B269F] hover:text-[#4B269F]/90"
          >
            Back to Showcases
          </a>
        </div>
      </div>
    );
  }

  // Using V2 design
  return <ShowcaseDetailV2 showcase={showcase} />;
}