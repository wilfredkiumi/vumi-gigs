// app/types/index.ts

export interface BaseUser {
    id: string;
    email: string;
    name: string;
    avatar?: string;
  }
  
  export interface CreatorProfile extends BaseUser {
    role: string;
    location: string;
    bio: string;
    timezone: string;
    
    yearsOfExperience: number;
    industries: string[];
    preferredProjectTypes: string[];
    availability: {
      status: 'available' | 'limited' | 'unavailable';
      hours: number;
      workPreference: 'remote' | 'onsite' | 'hybrid';
    };
    
    specialties: string[];
    languages: string[];
    tools: Array<{
      name: string;
      proficiency: 'beginner' | 'intermediate' | 'expert';
    }>;
    certifications: Array<{
      name: string;
      issuer: string;
      year: string;
    }>;
    awards: Array<{
      title: string;
      organization: string;
      year: string;
    }>;
    
    education: Array<{
      institution: string;
      degree: string;
      year: string;
    }>;
    featuredWorks: Array<{
      title: string;
      description: string;
      url: string;
      image?: string;
    }>;
    testimonials: Array<{
      text: string;
      clientName: string;
      clientRole: string;
      projectName: string;
    }>;
    projectMetrics: {
      completed: number;
      onTime: number;
      repeatClients: number;
    };
    
    links: Array<{
      platform: string;
      url: string;
    }>;
    
    collaboration: {
      teamSize: 'solo' | 'small' | 'medium' | 'large';
      communicationPreference: string[];
      responseTime: string;
      workingStyle: string[];
    };
    
    rates: {
      hourly: string;
      project: string;
      rush: string;
    };
    paymentPreferences: {
      methods: string[];
      terms: string;
      packages: Array<{
        name: string;
        description: string;
        pricing: string;
      }>;
    };
  }
  
  export interface ClientProfile extends BaseUser {
    companyName?: string;
    industry: string;
    projectHistory: Array<{
      title: string;
      description: string;
      date: string;
    }>;
    preferences: {
      workStyle: string[];
      communicationChannels: string[];
      budgetRange: {
        min: number;
        max: number;
      };
    };
    savedProposals: string[];
  }
  
  export interface InfluencerProfile extends BaseUser {
    niche: string;
    socialPlatforms: Array<{
      platform: string;
      handle: string;
      followers: number;
    }>;
    contentTypes: string[];
    engagement: {
      averageRate: number;
      audienceLocation: string[];
    };
    rates: {
      postRate: string;
      storyRate: string;
      campaignRate: string;
    };
  }
  
  export type UserProfile = CreatorProfile | ClientProfile | InfluencerProfile;