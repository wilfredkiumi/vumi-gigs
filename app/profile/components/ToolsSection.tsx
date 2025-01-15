import { Button } from "@/components/ui/button";
import { ToolItem } from './ToolItem';

interface Profile {
  tools: { name: string; proficiency: string }[];
}

interface ToolsSectionProps {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

export function ToolsSection({ profile, setProfile }: ToolsSectionProps) {
    const addTool = () => {
      setProfile({
        ...profile,
        tools: [
          ...profile.tools,
          { name: '', proficiency: '' }
        ]
      });
    };
   
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-700">Tools & Software</h2>
          <Button onClick={addTool} variant="outline" size="sm">Add Tool</Button>
        </div>
        
        {profile.tools.map((tool, index) => (
          <ToolItem 
            key={index} 
            tool={tool} 
            index={index}
            profile={profile}
            setProfile={setProfile}
          />
        ))}
      </div>
    );
   }
// Usage