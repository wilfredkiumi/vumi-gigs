// Organizations
export const showcaseOrganizations: ShowcaseOrganization[] = [
  {
    id: 2000,
    name: "Global Animation Festival Network",
    type: "Festival Organization",
    website: "www.gafn.org",
    description: "International network organizing animation festivals worldwide"
  },
  {
    id: 2001,
    name: "Digital Arts Foundation",
    type: "Arts Organization",
    website: "www.digitalartsfoundation.org",
    description: "Supporting digital arts and animation education"
  },
  {
    id: 2002,
    name: "Animation Industry Alliance",
    type: "Industry Association",
    website: "www.animationalliance.org",
    description: "Professional association for animation industry"
  }
];

// Showcases
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
    organizerId: 2000,
    organizerName: "Global Animation Festival Network",
    features: [
      "International Film Competition",
      "Industry Panels",
      "Networking Events",
      "Student Showcase"
    ],
    schedule: [
      { day: "Day 1", events: ["Opening Ceremony", "Feature Film Premieres"] },
      { day: "Day 2", events: ["Masterclasses", "Student Films"] },
      { day: "Day 3", events: ["Industry Panels", "VR Showcase"] }
    ],
    speakers: [
      { name: "Sarah Chen", topic: "Future of 2D Animation" },
      { name: "Alex Johnson", topic: "Stop Motion Innovation" }
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
    description: "Interactive exhibition showcasing digital art and animation innovations",
    organizerId: 2001,
    organizerName: "Digital Arts Foundation",
    features: [
      "Interactive Installations",
      "VR/AR Gallery",
      "Live Demonstrations",
      "Portfolio Reviews"
    ],
    schedule: [
      { day: "Day 1", events: ["Exhibition Opening", "Tech Demos"] },
      { day: "Day 2", events: ["Artist Talks", "Workshops"] },
      { day: "Day 3", events: ["Student Showcase", "Awards"] }
    ],
    installations: [
      { title: "Future Visions", artist: "Maya Patel" },
      { title: "Digital Dreams", artist: "Maria García" }
    ]
  },
  {
    id: "s3",
    title: "Animation Industry Summit",
    category: "Conference",
    date: "Nov 15-17, 2024",
    time: "9:00 AM GMT",
    location: "London ExCel Center",
    price: "£399",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589",
    description: "Premier industry conference for animation professionals",
    organizerId: 2002,
    organizerName: "Animation Industry Alliance",
    features: [
      "Industry Keynotes",
      "Technical Workshops",
      "Recruitment Fair",
      "Portfolio Reviews"
    ],
    schedule: [
      { day: "Day 1", events: ["Keynote Speeches", "Studio Presentations"] },
      { day: "Day 2", events: ["Technical Workshops", "Career Fair"] },
      { day: "Day 3", events: ["Industry Panels", "Networking"] }
    ],
    tracks: [
      { name: "Technical", sessions: ["Pipeline Innovation", "Rendering"] },
      { name: "Creative", sessions: ["Story Development", "Character Design"] },
      { name: "Business", sessions: ["Production Management", "Marketing"] }
    ]
  }
];