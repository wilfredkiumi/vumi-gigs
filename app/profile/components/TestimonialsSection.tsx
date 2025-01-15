"use client";
import { TestimonialComponent } from "./TestimonialComponent";
import { Button } from "@/components/ui/button";

interface Testimonial {
  text: string;
  clientName: string;
  clientRole: string;
  projectName: string;
}

interface Profile {
  testimonials: Testimonial[];
}

interface TestimonialsSectionProps {
  profile: Profile;
  setProfile: (profile: Profile) => void;
}

      const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ profile, setProfile }) => {
        const addTestimonial = () => {
          setProfile({
            ...profile,
            testimonials: [
              ...profile.testimonials,
              {
                text: "",
                clientName: "",
                clientRole: "",
                projectName: ""
              }
            ]
          });
        };
      
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-700">Client Testimonials</h2>
              <Button onClick={addTestimonial} variant="outline" size="sm">Add Testimonial</Button>
            </div>
            
            {profile.testimonials.map((testimonial: Testimonial, index: number) => (
              <TestimonialComponent 
                key={index}
                testimonial={testimonial}
                index={index} 
                profile={profile}
                setProfile={setProfile}
              />
            ))}
          </div>
        );
      };
      
      export default TestimonialsSection;


   