import { Button } from "@/components/ui/button";
import { WorkItem } from "../..//profile/components/WorkItem";
import { Key } from "react";

export function FeaturedWorks({ profile, setProfile }) {
    const addWork = () => {
      setProfile({
        ...profile,
        featuredWorks: [...profile.featuredWorks, { title: '', description: '', url: '' }]
      });
    };
   
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-700">Featured Works</h2>
          <Button onClick={addWork} variant="outline" size="sm">Add Work</Button>
        </div>
        
        {profile.featuredWorks.map((work: { title: string; description: string; url: string; }, index: Key | null | undefined) => (
          <WorkItem 
            key={index} 
            work={work} 
            index={index}
            profile={profile}
            setProfile={setProfile}
          />
        ))}
      </div>
    );
   }