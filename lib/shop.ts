export type Studio = {
  id: number;
  name: string;
  type: string;
  location: string;
  description: string;
  website: string;
  logo: string;
  specialties: string[];
};

export const studios: Studio[] = [
  {
    id: 3000,
    name: "Digital Dreams Studio",
    type: "Animation Studio",
    location: "Vancouver",
    description: "Specializing in high-end 3D animation and VFX",
    website: "www.digitaldreams.studio",
    logo: "https://example.com/logo1.png",
    specialties: ["3D Animation", "VFX", "Feature Films"]
  },
  {
    id: 3001,
    name: "Motion Arts Academy",
    type: "Educational Institution",
    location: "London",
    description: "Leading animation education and resource provider",
    website: "www.motionarts.edu",
    logo: "https://example.com/logo2.png",
    specialties: ["Animation Education", "Workshops", "Resources"]
  }
];

export type ShopItem = Product & {
  rating: number;
  reviewCount: number;
  purchaseCount: number;
  lastUpdated: string;
  requirements?: string[];
  tags: string[];
  featured: boolean;
  owner: {
    type: 'creator' | 'studio';
    id: number;
    name: string;
  };
};

export const shopItems: ShopItem[] = [
  {
    ...products[0],
    rating: 4.8,
    reviewCount: 325,
    purchaseCount: 1200,
    lastUpdated: "2024-01-15",
    requirements: ["After Effects CC 2022+"],
    tags: ["animation", "course", "beginner"],
    featured: true,
    owner: {
      type: 'creator',
      id: 1000,
      name: "Sarah Chen"
    }
  },
  {
    id: "prod10",
    name: "Advanced VFX Course Bundle",
    price: 399.99,
    image: "https://example.com/vfx-course.jpg",
    category: "Education",
    creatorId: 3000,
    description: "Comprehensive VFX training from industry experts",
    type: "course",
    features: ["60+ hours content", "Industry certification", "Live workshops"],
    rating: 4.9,
    reviewCount: 450,
    purchaseCount: 2000,
    lastUpdated: "2024-02-01",
    tags: ["vfx", "advanced", "certification"],
    featured: true,
    owner: {
      type: 'studio',
      id: 3000,
      name: "Digital Dreams Studio"
    }
  }
];