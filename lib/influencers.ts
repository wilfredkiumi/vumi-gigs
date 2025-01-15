// Add to lib/influencers.ts

export interface Influencer {
    id: string;
    name: string;
    avatar: string;
    role: string;
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
    sponsorshipRates: {
      post: number;
      story: number;
      video: number;
      campaign: number;
    };
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
    languages: string[];
    previousBrands: string[];
    verified: boolean;
  }
  
  export const influencers: Influencer[] = [
    {
      id: "1",
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400",
      role: "Lifestyle & Fashion Influencer",
      location: "London, UK",
      bio: "Fashion and lifestyle content creator passionate about sustainable living and mindful consumption. Sharing daily inspiration for a stylish, eco-conscious life.",
      specialties: ["Sustainable Fashion", "Lifestyle", "Beauty", "Wellness"],
      stats: {
        followers: 850000,
        engagement: 5.2,
        avgLikes: 45000,
        avgComments: 1200,
        posts: 2430
      },
      platforms: [
        {
          name: "Instagram",
          handle: "@emmastyle",
          followers: 650000,
          url: "https://instagram.com/emmastyle"
        },
        {
          name: "TikTok",
          handle: "@emmabeauty",
          followers: 200000,
          url: "https://tiktok.com/@emmabeauty"
        }
      ],
      sponsorshipRates: {
        post: 3500,
        story: 1200,
        video: 5000,
        campaign: 15000
      },
      audience: {
        demographics: {
          ageRanges: ["18-24", "25-34"],
          genders: ["Female", "Male"],
          locations: ["United Kingdom", "United States", "Europe"]
        },
        interests: ["Fashion", "Beauty", "Sustainability", "Lifestyle", "Travel"],
        reachMetrics: {
          daily: 50000,
          weekly: 350000,
          monthly: 1500000
        }
      },
      contentTypes: ["Fashion Hauls", "Style Tips", "Beauty Reviews", "Lifestyle Vlogs"],
      languages: ["English", "French"],
      previousBrands: ["Zara", "H&M", "Sephora", "Glossier"],
      verified: true
    }
  ];