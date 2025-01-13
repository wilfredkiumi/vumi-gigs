import { gigs } from '@/lib/gigs';
import GigDetail from './GigDetail';
import ProposalForm from '@/components/ProposalForm';

export function generateStaticParams() {
  return gigs.map((gig) => ({
    id: gig.id,
  }));
}

export default function GigPage({ params }: { params: { id: string } }) {
  const gig = gigs.find((g) => g.id === params.id);

  if (!gig) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Gig Not Found</h1>
          <a 
            href="/gigs"
            className="text-primary hover:text-primary/90"
          >
            Back to Gigs
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <GigDetail gig={gig} />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="text-lg font-semibold mb-6">Submit Proposal</h2>
                <ProposalForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}