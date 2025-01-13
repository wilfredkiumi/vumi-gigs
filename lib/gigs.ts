export type Gig = {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  experience: 'beginner' | 'intermediate' | 'expert';
  skills: string[];
  status: 'open' | 'in-progress' | 'completed';
  client: {
    id: string;
    name: string;
    company?: string;
  };
  postedAt: string;
  location: string;
  projectType: 'remote' | 'hybrid' | 'onsite';
};

export const gigs: Gig[] = [
  {
    id: "gig1",
    title: "3D Character Animation for Indie Game",
    category: "3d-animation",
    description: "We're seeking a talented 3D animator to create character animations for our upcoming indie game. The project involves creating walk cycles, combat animations, and emotional expressions for 5 main characters. Experience with Unity integration is a plus.",
    duration: "2-3 months",
    experience: "intermediate",
    skills: ["Maya", "Blender", "Character Rigging", "Unity", "Animation Principles"],
    status: "open",
    client: {
      id: "c1",
      name: "Alex Thompson",
      company: "Indie Game Studio"
    },
    postedAt: "2024-03-15",
    location: "Remote",
    projectType: "remote"
  },
  {
    id: "gig2",
    title: "2D Motion Graphics for Educational Series",
    category: "motion-graphics",
    description: "Looking for a motion graphics artist to create engaging animations for an educational video series about science concepts. The project includes creating 10 videos, each 3-5 minutes long, explaining complex topics in a visually appealing way.",
    duration: "3 months",
    experience: "intermediate",
    skills: ["After Effects", "Illustrator", "Motion Design", "Visual Storytelling"],
    status: "open",
    client: {
      id: "c2",
      name: "Sarah Chen",
      company: "EduTech Solutions"
    },
    postedAt: "2024-03-14",
    location: "Remote",
    projectType: "remote"
  },
  {
    id: "gig3",
    title: "Character Design for Animated Series",
    category: "character-design",
    description: "We need a character designer for our upcoming animated series. The project involves designing 10 main characters and 20 supporting characters, including turnarounds, expression sheets, and style guides. The style should be suitable for young audiences.",
    duration: "1-2 months",
    experience: "expert",
    skills: ["Character Design", "Concept Art", "Photoshop", "Traditional Art Fundamentals"],
    status: "open",
    client: {
      id: "c3",
      name: "Michael Rodriguez",
      company: "Animation Studios Co"
    },
    postedAt: "2024-03-13",
    location: "Los Angeles",
    projectType: "hybrid"
  }
];