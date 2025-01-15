import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface WorkItemProps {
  work: {
    title: string;
    description: string;
    url: string;
  };
  index: number;
  profile: any;
  setProfile: (profile: any) => void;
}

export function WorkItem({ 
  work, 
  index, 
  profile, 
  setProfile 
}: WorkItemProps) {
  return (
    <div className="space-y-4 rounded-lg border border-neutral-200 p-4">
      <input
        type="text"
        value={work.title}
        onChange={(e) => {
          const newWorks = [...profile.featuredWorks];
          newWorks[index].title = e.target.value;
          setProfile({ ...profile, featuredWorks: newWorks });
        }}
        placeholder="Work Title"
        className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
      />
      <textarea
        value={work.description}
        onChange={(e) => {
          const newWorks = [...profile.featuredWorks];
          newWorks[index].description = e.target.value;
          setProfile({ ...profile, featuredWorks: newWorks });
        }}
        placeholder="Work Description"
        className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
        rows={3}
      />
      <input
        type="url"
        value={work.url}
        onChange={(e) => {
          const newWorks = [...profile.featuredWorks];
          newWorks[index].url = e.target.value;
          setProfile({ ...profile, featuredWorks: newWorks });
        }}
        placeholder="Project URL"
        className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
      />
      <Button
        type="button"
        onClick={() => {
          const newWorks = profile.featuredWorks.filter((_, i) => i !== index);
          setProfile({ ...profile, featuredWorks: newWorks });
        }}
        variant="ghost"
        className="text-neutral-400 hover:text-neutral-600"
      >
        <X className="h-4 w-4" /> Remove Work
      </Button>
    </div>
  );
}