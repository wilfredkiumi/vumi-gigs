export interface Studio {
    id: number;
  name: string;
  type: string;
  branding: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: string;
      background: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    logo: {
      main: string;
      alternate: string;
      icon: string;
    };
    assets: {
      banners: string[];
      socialImages: string[];
    };
  };
  contacts: {
    email: {
      general: string;
      press: string;
      careers: string;
    };
    phone: {
      main: string;
      international: string;
    };
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postal: string;
    };
    pressKit: string;
  };
  representatives: {
    creatorId: number;
    role: string;
    bio: string;
    contact: {
      email: string;
    };
    availability: string[];
  }[];
  location: string;
  description: string;
  website: string;
  specialties: string[];
  teamSize: number;
  founded: string;
  projects: {
    id: string;
    title: string;
    category: string;
    status: string;
    creator: string;
    creatorId: number;
    views: number;
    image: string;
    description: string;
  }[];
  showcase: {
    id: string;
    title: string;
    category: string;
    date: string;
    time: string;
    location: string;
    price: string;
    image: string;
    description: string;
    organizerId: number;
    organizerName: string;
  }[];
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    creatorId: number;
    description: string;
    type: string;
    features: string[];
  }[];
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
    vimeo: string;
  };
  clients: string[];
  awards: {
    name: string;
    year: string;
    category: string;
  }[];
  businessHours: {
    timezone: string;
    schedule: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
    };
  };
  legalInfo: {
    registrationNumber: string;
    taxId: string;
    incorporation: string;
  };
  certifications: string[];
}

export const studios: Studio[] = [
  {
    id: 3000,
    name: "Digital Dreams Studio",
    type: "Animation Studio",
    branding: {
      colors: {
        primary: "#2E3192",
        secondary: "#00AEEF",
        accent: "#FFC107",
        text: "#333333",
        background: "#FFFFFF"
      },
      fonts: {
        heading: "Montserrat",
        body: "Open Sans"
      },
      logo: {
        main: "https://example.com/digitaldreams/logo-full.png",
        alternate: "https://example.com/digitaldreams/logo-white.png",
        icon: "https://example.com/digitaldreams/icon.png"
      },
      assets: {
        banners: [
          "https://example.com/digitaldreams/banner1.jpg",
          "https://example.com/digitaldreams/banner2.jpg"
        ],
        socialImages: [
          "https://example.com/digitaldreams/social-cover.jpg",
          "https://example.com/digitaldreams/social-square.jpg"
        ]
      }
    },
    contacts: {
      email: {
        general: "info@digitaldreams.studio",
        press: "press@digitaldreams.studio",
        careers: "careers@digitaldreams.studio"
      },
      phone: {
        main: "+1 (604) 555-0123",
        international: "+1 604 555 0123"
      },
      address: {
        street: "123 Animation Lane",
        city: "Vancouver",
        state: "BC",
        country: "Canada",
        postal: "V6B 1A1"
      },
      pressKit: "https://example.com/digitaldreams/press-kit.zip"
    },
    representatives: [
      {
        creatorId: 1000,
        role: "Creative Director",
        bio: "Leading creative vision and project direction",
        contact: {
          email: "sarah.chen@digitaldreams.studio"
        },
        availability: ["Mon-Fri, 9AM-5PM PST", "Press inquiries"]
      }
    ],
    location: "Vancouver, Canada",
    description: "Award-winning animation studio specializing in feature films and series",
    website: "www.digitaldreams.studio",
    specialties: ["3D Animation", "VFX", "Feature Films", "TV Series"],
    teamSize: 150,
    founded: "2010",
    projects: [
      {
        id: "ds1",
        title: "Dreamwalker",
        category: "Feature Film",
        status: "In Production",
        creator: "Digital Dreams Studio",
        creatorId: 3000,
        views: 25000,
        image: "https://example.com/dreamwalker.jpg",
        description: "Animated feature about dream exploration"
      }
    ],
    showcase: [
      {
        id: "dss1",
        title: "Animation Expo 2024",
        category: "Industry Event",
        date: "June 15-17, 2024",
        time: "9:00 AM PST",
        location: "Vancouver Convention Center",
        price: "$299",
        image: "https://example.com/expo.jpg",
        description: "Showcasing latest projects and technology",
        organizerId: 2000,
        organizerName: "Global Animation Festival Network"
      }
    ],
    products: [
      {
        id: "dsp1",
        name: "Animation Pipeline Tools",
        price: 499.99,
        image: "https://example.com/tools.jpg",
        category: "Software",
        creatorId: 3000,
        description: "Professional animation production toolkit",
        type: "plugin",
        features: ["Asset management", "Rendering tools", "Pipeline automation"]
      }
    ],
    social: {
      linkedin: "https://linkedin.com/company/digitaldreams",
      twitter: "@DigitalDreamsStudio",
      instagram: "@digitaldreamsstudio",
      vimeo: "digitaldreams"
    },
    clients: [
      "Netflix",
      "Disney",
      "Amazon Studios",
      "Apple TV+"
    ],
    awards: [
      {
        name: "Annie Awards",
        year: "2023",
        category: "Best Animated Feature"
      },
      {
        name: "Visual Effects Society",
        year: "2022",
        category: "Outstanding Animation"
      }
    ],
    businessHours: {
      timezone: "America/Vancouver",
      schedule: {
        monday: "9:00 AM - 6:00 PM",
        tuesday: "9:00 AM - 6:00 PM",
        wednesday: "9:00 AM - 6:00 PM",
        thursday: "9:00 AM - 6:00 PM",
        friday: "9:00 AM - 5:00 PM"
      }
    },
    legalInfo: {
      registrationNumber: "BC123456",
      taxId: "12345-6789",
      incorporation: "Canada"
    },
    certifications: [
      "ISO 9001:2015",
      "Member of Animation World Network",
      "Certified B Corporation"
    ]
  },
  {
    id: 3001,
    name: "PixelPlay Academy",
    type: "Educational Institution",
    branding: {
      colors: {
        primary: "#FF5722",
        secondary: "#4CAF50",
        accent: "#2196F3",
        text: "#212121",
        background: "#FAFAFA"
      },
      fonts: {
        heading: "Poppins",
        body: "Roboto"
      },
      logo: {
        main: "https://example.com/pixelplay/logo-full.png",
        alternate: "https://example.com/pixelplay/logo-white.png",
        icon: "https://example.com/pixelplay/icon.png"
      },
      assets: {
        banners: [
          "https://example.com/pixelplay/banner1.jpg",
          "https://example.com/pixelplay/banner2.jpg"
        ],
        socialImages: [
          "https://example.com/pixelplay/social-cover.jpg",
          "https://example.com/pixelplay/social-square.jpg"
        ]
      }
    },
    contacts: {
      email: {
        general: "info@pixelplay.edu",
        press: "press@pixelplay.edu",
        careers: "careers@pixelplay.edu"
      },
      phone: {
        main: "+44 20 7123 4567",
        international: "+44 20 7123 4567"
      },
      address: {
        street: "45 Digital Lane",
        city: "London",
        state: "Greater London",
        country: "United Kingdom",
        postal: "EC1V 9HX"
      },
      pressKit: "https://example.com/pixelplay/press-kit.zip"
    },
    representatives: [
      {
        creatorId: 1001,
        role: "Head of Education",
        bio: "Leading educational programs and curriculum development",
        contact: {
          email: "alex.johnson@pixelplay.edu"
        },
        availability: ["Mon-Fri, 10AM-6PM GMT", "Student inquiries"]
      }
    ],
    location: "London, UK",
    description: "Leading animation and game development education institution",
    website: "www.pixelplay.edu",
    specialties: ["Animation Education", "Game Development", "VFX Training"],
    teamSize: 75,
    founded: "2015",
    projects: [
      {
        id: "pa1",
        title: "Student Showcase 2024",
        category: "Educational",
        status: "In Progress",
        creator: "PixelPlay Academy",
        creatorId: 3001,
        views: 15000,
        image: "https://example.com/showcase2024.jpg",
        description: "Annual showcase of student work and achievements"
      }
    ],
    showcase: [
      {
        id: "pas1",
        title: "Education Summit 2024",
        category: "Educational Conference",
        date: "September 20-22, 2024",
        time: "10:00 AM GMT",
        location: "London ExCel",
        price: "£199",
        image: "https://example.com/summit.jpg",
        description: "Animation education conference and workshops",
        organizerId: 2001,
        organizerName: "Digital Arts Foundation"
      }
    ],
    products: [
      {
        id: "pap1",
        name: "Animation Fundamentals Course",
        price: 899.99,
        image: "https://example.com/course.jpg",
        category: "Education",
        creatorId: 3001,
        description: "Comprehensive animation training program",
        type: "course",
        features: ["24 weeks", "Professional certification", "Industry mentorship"]
      }
    ],
    social: {
      linkedin: "https://linkedin.com/school/pixelplay",
      twitter: "@PixelPlayAcademy",
      instagram: "@pixelplayacademy"
    },
    clients: [
      "Industrial Light & Magic",
      "Pixar",
      "DreamWorks",
      "Sony Pictures Animation"
    ],
    awards: [
      {
        name: "Education Excellence Award",
        year: "2023",
        category: "Best Animation School"
      }
    ],
    businessHours: {
      timezone: "Europe/London",
      schedule: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 5:00 PM"
      }
    },
    legalInfo: {
      registrationNumber: "UK87654321",
      taxId: "GB123456789",
      incorporation: "United Kingdom"
    },
    certifications: [
      "QAA Accredited",
      "Creative Skillset Approved",
      "Adobe Authorized Training Center"
    ]
  }
];