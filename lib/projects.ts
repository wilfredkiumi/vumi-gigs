export type AnimationProject = {
  id: string;
  fundamentals: {
    title: string;
    logline: string;
    runtime: string;
    targetAudience: string;
    budget: string;
    keyTeam: Array<{
      role: string;
      name: string;
    }>;
  };
  story: {
    synopsis: string;
    acts: Array<{
      title: string;
      description: string;
    }>;
    characters: Array<{
      name: string;
      arc: string;
    }>;
    themes: string[];
    keySequences: Array<{
      title: string;
      description: string;
    }>;
  };
  visualDevelopment: {
    artDirection: string[];
    characterDesign: string[];
    environments: string[];
    colorScripts: Record<string, string>;
  };
  technical: {
    animationTechnique: string;
    pipeline: string[];
    software: string[];
    soundDesign: string[];
  };
  business: {
    marketAnalysis: string[];
    distribution: string[];
    timeline: {
      phase: string;
      duration: string;
    }[];
    projectedRevenue: Record<string, string>;
  };
  materials: {
    type: string;
    items: string[];
  }[];
  status: 'In Development' | 'In Production' | 'Completed';
  creator: string;
  creatorId: number;
  views: number;
  image: string;
};

export const spiritOfForest: AnimationProject = {
  id: "feature-001",
  fundamentals: {
    title: "Spirit of the Forest",
    logline: "A young forest spirit must master ancient magic to save her dying woodland from industrial destruction.",
    runtime: "95 minutes",
    targetAudience: "Family (ages 8-14, co-viewing adults)",
    budget: "$45M USD",
    keyTeam: [
      { role: "Director", name: "Sarah Chen" },
      { role: "Writer", name: "Alex Johnson" },
      { role: "Art Director", name: "Maya Patel" }
    ]
  },
  story: {
    synopsis: "In a mystical forest threatened by urban expansion, Aria, a newly awakened forest spirit, discovers she's the last guardian of ancient woodland magic.",
    acts: [
      {
        title: "Awakening",
        description: "Aria's awakening, discovery of powers, initial conflict with development"
      },
      {
        title: "Journey",
        description: "Journey through seasons, gathering allies, failed first attempt"
      },
      {
        title: "Resolution",
        description: "Final confrontation, finding harmony between progress and nature"
      }
    ],
    characters: [
      {
        name: "Aria",
        arc: "From uncertain novice to confident guardian"
      },
      {
        name: "Luna",
        arc: "Learning to trust the new generation"
      }
    ],
    themes: [
      "Balance between progress and preservation",
      "Coming of age and accepting responsibility",
      "Environmental stewardship"
    ],
    keySequences: [
      {
        title: "Aria's Awakening",
        description: "Opening sequence introducing the magical forest"
      },
      {
        title: "Seasonal Transformation",
        description: "Montage of Aria learning seasonal powers"
      }
    ]
  },
  visualDevelopment: {
    artDirection: [
      "Organic shapes and flowing lines",
      "Watercolor-inspired backgrounds",
      "Dynamic lighting reflecting seasonal changes"
    ],
    characterDesign: [
      "Aria: Ethereal, plant-like features",
      "Forest Creatures: Stylized realism"
    ],
    environments: [
      "Ancient Forest Heart",
      "Four Seasonal Realms",
      "Urban Edge"
    ],
    colorScripts: {
      spring: "Soft pastels, morning light",
      summer: "Rich greens, warm golds",
      autumn: "Deep oranges, purple twilight",
      winter: "Ice blues, silver highlights"
    }
  },
  technical: {
    animationTechnique: "3D CGI with 2D elements",
    pipeline: [
      "Storyboard/Previs",
      "Asset Creation",
      "Animation",
      "FX Integration",
      "Compositing"
    ],
    software: [
      "Maya",
      "Houdini",
      "TVPaint",
      "Nuke"
    ],
    soundDesign: [
      "Orchestra-based score",
      "Nature-inspired soundscape",
      "Minimal dialogue"
    ]
  },
  business: {
    marketAnalysis: [
      "Growing demand for environmental themes",
      "Strong international appeal",
      "Multiple merchandising opportunities"
    ],
    distribution: [
      "Theatrical release in major markets",
      "Festival circuit",
      "Streaming platform partnerships"
    ],
    timeline: [
      { phase: "Pre-production", duration: "12 months" },
      { phase: "Production", duration: "18 months" },
      { phase: "Post-production", duration: "8 months" }
    ],
    projectedRevenue: {
      boxOffice: "$150M-200M",
      streaming: "$50M",
      merchandising: "$75M",
      educational: "$25M"
    }
  },
  materials: [
    {
      type: "Artwork",
      items: [
        "Character turnarounds (5 main characters)",
        "Environment paintings (8 key locations)",
        "Storyboard sequences (3 key scenes)"
      ]
    },
    {
      type: "Audio",
      items: [
        "Main theme demo",
        "Character motifs (2)",
        "Environmental soundscape sample"
      ]
    }
  ],
  status: "In Development",
  creator: "Sarah Chen",
  creatorId: 1000,
  views: 5600,
  image: "https://images.unsplash.com/photo-1534447677768-be436bb09401"
};
