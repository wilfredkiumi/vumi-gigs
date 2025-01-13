// ... (keep existing type definitions and other data)

export interface Showcase {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
  description: string;
  when: {
    dates: string;
    time: string;
    timezone: string;
  };
  where: {
    venue: string;
    address: string;
    city: string;
    country: string;
    accessInfo: string;
  };
  what: {
    overview: string;
    highlights: string[];
    objectives: string[];
  };
  who: {
    organizer: string;
    expectedAttendees: number;
    targetAudience: string[];
  };
  how: {
    format: string;
    requirements: string[];
  };
  why: {
    purpose: string;
  };
  schedule: Array<{
    day: string;
    events: string[];
  }>;
}

export const showcases: Showcase[] = [
  {
    id: "s1",
    title: "World Animation Festival 2024",
    category: "Film Festival",
    date: "Aug 15-22, 2024",
    time: "10:00 AM EDT",
    location: "Montreal Convention Center",
    price: "From $299",
    image: "https://images.unsplash.com/photo-1492044715545-15ddedd84e5e",
    description: "Celebrating global animation excellence with screenings, masterclasses, and networking events",
    when: {
      dates: "August 15-22, 2024",
      time: "10:00 AM",
      timezone: "EDT"
    },
    where: {
      venue: "Montreal Convention Center",
      address: "1001 Place Jean-Paul-Riopelle",
      city: "Montreal",
      country: "Canada",
      accessInfo: "Located in downtown Montreal, easily accessible by public transit"
    },
    what: {
      overview: "Join us for the world's premier animation festival, featuring exclusive screenings, industry panels, and networking opportunities with leading creators and studios.",
      highlights: [
        "International Film Competition",
        "Industry Panels",
        "Networking Events",
        "Student Showcase",
        "VR/AR Exhibition"
      ],
      objectives: [
        "Showcase innovative animation techniques",
        "Connect creators with industry leaders",
        "Promote emerging talent",
        "Foster international collaboration"
      ]
    },
    who: {
      organizer: "Global Animation Festival Network",
      expectedAttendees: 2000,
      targetAudience: [
        "Animation Professionals",
        "Studio Representatives",
        "Students",
        "Industry Enthusiasts",
        "Art Directors"
      ]
    },
    how: {
      format: "In-person event with virtual components",
      requirements: [
        "Valid ID required for entry",
        "Professional or Student credentials for workshops",
        "Laptop recommended for technical sessions"
      ]
    },
    why: {
      purpose: "To celebrate and advance the art of animation through global collaboration and knowledge sharing"
    },
    schedule: [
      {
        day: "Day 1 - August 15",
        events: [
          "Opening Ceremony",
          "Keynote Presentation",
          "Feature Film Premieres",
          "Welcome Reception"
        ]
      },
      {
        day: "Day 2 - August 16",
        events: [
          "Industry Panels",
          "Technical Workshops",
          "Student Film Showcase",
          "Networking Dinner"
        ]
      }
    ]
  },
  {
    id: "s2",
    title: "Digital Arts Expo",
    category: "Exhibition",
    date: "Oct 10-12, 2024",
    time: "9:00 AM PST",
    location: "San Francisco Art Center",
    price: "$150",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    description: "Interactive exhibition showcasing digital art innovations",
    when: {
      dates: "October 10-12, 2024",
      time: "9:00 AM",
      timezone: "PST"
    },
    where: {
      venue: "San Francisco Art Center",
      address: "750 Art Street",
      city: "San Francisco",
      country: "USA",
      accessInfo: "Located in SoMa district, parking available on-site"
    },
    what: {
      overview: "A cutting-edge exhibition showcasing the latest in digital art and interactive media, featuring works from renowned artists and emerging talents.",
      highlights: [
        "Interactive Installations",
        "VR Art Gallery",
        "Live Demonstrations",
        "Artist Talks",
        "Technology Workshops"
      ],
      objectives: [
        "Showcase innovative digital art",
        "Demonstrate new technologies",
        "Connect artists with collectors",
        "Inspire new creative approaches"
      ]
    },
    who: {
      organizer: "Digital Arts Foundation",
      expectedAttendees: 1500,
      targetAudience: [
        "Digital Artists",
        "Art Collectors",
        "Gallery Curators",
        "Technology Enthusiasts",
        "Art Students"
      ]
    },
    how: {
      format: "Hybrid event with physical and virtual galleries",
      requirements: [
        "Timed entry tickets",
        "VR headset provided for virtual gallery",
        "Photography permitted without flash"
      ]
    },
    why: {
      purpose: "To bridge the gap between traditional and digital art while showcasing technological innovations in creative expression"
    },
    schedule: [
      {
        day: "Day 1 - October 10",
        events: [
          "Exhibition Opening",
          "Curator's Tour",
          "Artist Presentations",
          "VR Art Launch"
        ]
      },
      {
        day: "Day 2 - October 11",
        events: [
          "Technology Workshops",
          "Panel Discussions",
          "Live Art Creation",
          "Collector's Preview"
        ]
      }
    ]
  }
];