export type CreatorType = 'influencer' | 'talent';

export type Creator = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  type: CreatorType;
  location: string;
  bio: string;
  specialties: string[];
  stats: {
    followers: number;
    engagement: number;
    avgLikes: number;
    avgComments: number;
    posts: number;
  };
  platforms: {
    name: string;
    handle: string;
    followers: number;
    url: string;
  }[];
  categories: string[];
  languages: string[];
  previousBrands: string[];
  priceRange: {
    min: number;
    max: number;
  };
  verified: boolean;
  // Influencer-specific fields
  influencer?: {
    audience: {
      demographics: {
        ageRanges: string[];
        genders: string[];
        locations: string[];
      };
      interests: string[];
      reachMetrics: {
        daily: number;
        weekly: number;
        monthly: number;
      };
    };
    contentTypes: string[];
    sponsorshipRates: {
      post: number;
      story: number;
      video: number;
      campaign: number;
    };
  };
  // Talent-specific fields
  talent?: {
    skills: {
      primary: string[];
      secondary: string[];
    };
    experience: {
      years: number;
      level: 'junior' | 'mid' | 'senior' | 'expert';
    };
    portfolio: {
      type: string;
      url: string;
      description: string;
    }[];
    availability: {
      status: 'available' | 'busy' | 'not-available';
      nextAvailable?: string;
      preferredDuration: string[];
    };
  };
};

export const creators: Creator[] = [
  {
    id: "1",
    name: "Sarah Chen",
    type: "influencer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    role: "Digital Artist & Content Creator",
    location: "Vancouver, Canada",
    bio: "Digital artist specializing in 3D art and animation. Creating engaging content about digital art techniques and creative workflows.",
    specialties: ["3D Art", "Digital Painting", "Animation", "Creative Tutorials"],
    stats: {
      followers: 250000,
      engagement: 4.8,
      avgLikes: 15000,
      avgComments: 800,
      posts: 450
    },
    platforms: [
      {
        name: "Instagram",
        handle: "@sarahchenart",
        followers: 150000,
        url: "https://instagram.com/sarahchenart"
      },
      {
        name: "YouTube",
        handle: "Sarah Chen Art",
        followers: 100000,
        url: "https://youtube.com/sarahchenart"
      }
    ],
    categories: ["Art & Design", "Education", "Technology"],
    languages: ["English", "Mandarin"],
    previousBrands: ["Adobe", "Wacom", "Autodesk"],
    priceRange: {
      min: 2000,
      max: 5000
    },
    verified: true,
    influencer: {
      audience: {
        demographics: {
          ageRanges: ["18-24", "25-34"],
          genders: ["Female", "Male"],
          locations: ["North America", "Asia"]
        },
        interests: ["Digital Art", "Technology", "Education", "Design"],
        reachMetrics: {
          daily: 15000,
          weekly: 100000,
          monthly: 400000
        }
      },
      contentTypes: ["Tutorials", "Reviews", "Behind the Scenes", "Live Streams"],
      sponsorshipRates: {
        post: 1500,
        story: 500,
        video: 3000,
        campaign: 10000
      }
    }
  },
  {
    id: "2",
    name: "Alex Thompson",
    type: "talent",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    role: "Senior 3D Animator",
    location: "London, UK",
    bio: "Experienced 3D animator specializing in character animation and motion capture integration.",
    specialties: ["Character Animation", "Motion Capture", "Rigging", "Animation Direction"],
    stats: {
      followers: 15000,
      engagement: 3.2,
      avgLikes: 500,
      avgComments: 50,
      posts: 120
    },
    platforms: [
      {
        name: "ArtStation",
        handle: "alexthompson",
        followers: 10000,
        url: "https://artstation.com/alexthompson"
      },
      {
        name: "LinkedIn",
        handle: "Alex Thompson",
        followers: 5000,
        url: "https://linkedin.com/in/alexthompson"
      }
    ],
    categories: ["Animation", "Film", "Games"],
    languages: ["English"],
    previousBrands: ["Pixar", "DreamWorks", "Sony Pictures"],
    priceRange: {
      min: 5000,
      max: 15000
    },
    verified: true,
    talent: {
      skills: {
        primary: ["Character Animation", "Motion Capture", "Maya", "MotionBuilder"],
        secondary: ["Rigging", "Storyboarding", "Animation Direction"]
      },
      experience: {
        years: 12,
        level: "senior"
      },
      portfolio: [
        {
          type: "Animation Reel",
          url: "https://vimeo.com/alexthompson/demo2024",
          description: "Character animation showreel featuring recent film and game projects"
        },
        {
          type: "Project Breakdown",
          url: "https://artstation.com/alexthompson/projects",
          description: "Detailed breakdowns of animation techniques and workflows"
        }
      ],
      availability: {
        status: "available",
        preferredDuration: ["3-6 months", "6-12 months"]
      }
    }
  }
];