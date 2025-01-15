import { Button } from "@/components/ui/button";


// components/profile/EducationSection.tsx
interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Profile {
  education: Education[];
}

interface EducationSectionProps {
  profile: Profile;
  setProfile: (profile: Profile) => void;
}

export function EducationSection({ profile, setProfile }: EducationSectionProps) {
    const addEducation = () => {
        setProfile({
            ...profile,
            education: [...profile.education, { institution: '', degree: '', year: '' }]
        });
    };
  
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-700">Education</h2>
          <Button type="button" onClick={addEducation} variant="outline" size="sm">
            Add Education
          </Button>
        </div>
        
        {profile.education && profile.education.map((edu, index) => (
          <div key={index} className="space-y-4 rounded-lg border border-neutral-200 p-4">
            <input
              type="text"
              value={edu.institution}
              onChange={(e) => {
                const newEducation = [...profile.education];
                newEducation[index].institution = e.target.value;
                setProfile({ ...profile, education: newEducation });
              }}
              placeholder="Institution"
              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => {
                  const newEducation = [...profile.education];
                  newEducation[index].degree = e.target.value;
                  setProfile({ ...profile, education: newEducation });
                }}
                placeholder="Degree"
                className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
              />
              <input
                type="text"
                value={edu.year}
                onChange={(e) => {
                  const newEducation = [...profile.education];
                  newEducation[index].year = e.target.value;
                  setProfile({ ...profile, education: newEducation });
                }}
                placeholder="Year"
                className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
 