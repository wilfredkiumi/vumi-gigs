"use client";

import { useState } from 'react';
import { ArrowLeft, Upload, Plus, X, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StudioProfile {
  name: string;
  type: string;
  location: string;
  description: string;
  founded: string;
  teamSize: number;
  specialties: string[];
  services: Array<{
    name: string;
    description: string;
    priceRange: {
      min: string;
      max: string;
    };
  }>;
  projects: Array<{
    title: string;
    description: string;
    status: 'current' | 'ongoing' | 'completed';
    startDate: string;
    endDate?: string;
    client: string;
    teamMembers: Array<{
      role: string;
      creatorId?: string;
      name: string;
      email?: string;
    }>;
    images: string[];
  }>;
  contacts: {
    email: {
      general: string;
      business: string;
      support: string;
    };
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postal: string;
    };
  };
  social: {
    website: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
}

export default function EditStudioProfilePage() {
  const [profile, setProfile] = useState<StudioProfile>({
    name: '',
    type: '',
    location: '',
    description: '',
    founded: '',
    teamSize: 0,
    specialties: [],
    services: [],
    projects: [],
    contacts: {
      email: {
        general: '',
        business: '',
        support: ''
      },
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        country: '',
        postal: ''
      }
    },
    social: {
      website: '',
      linkedin: '',
      twitter: '',
      instagram: ''
    }
  });
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState('');
  const [newSpecialty, setNewSpecialty] = useState('');
  const [creatorSearch, setCreatorSearch] = useState('');

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addService = () => {
    setProfile({
      ...profile,
      services: [...profile.services, {
        name: '',
        description: '',
        priceRange: { min: '', max: '' }
      }]
    });
  };

  const removeService = (index: number) => {
    setProfile({
      ...profile,
      services: profile.services.filter((_, i) => i !== index)
    });
  };

  const addProject = () => {
    setProfile({
      ...profile,
      projects: [...profile.projects, {
        title: '',
        description: '',
        status: 'current',
        startDate: '',
        endDate: '',
        client: '',
        teamMembers: [],
        images: []
      }]
    });
  };

  const removeProject = (index: number) => {
    setProfile({
      ...profile,
      projects: profile.projects.filter((_, i) => i !== index)
    });
  };

  const addTeamMember = (projectIndex: number) => {
    const newProjects = [...profile.projects];
    newProjects[projectIndex].teamMembers.push({
      role: '',
      name: '',
      email: ''
    });
    setProfile({ ...profile, projects: newProjects });
  };

  const removeTeamMember = (projectIndex: number, memberIndex: number) => {
    const newProjects = [...profile.projects];
    newProjects[projectIndex].teamMembers = 
      newProjects[projectIndex].teamMembers.filter((_, i) => i !== memberIndex);
    setProfile({ ...profile, projects: newProjects });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile data:', profile);
    console.log('Logo:', logo);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Link 
          href="/studio/profile"
          className="mb-6 inline-flex items-center gap-2 text-neutral-600 hover:text-[#A13163]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Profile
        </Link>

        <div className="rounded-lg bg-white p-8 shadow-sm">
          <h1 className="mb-8 text-2xl font-bold text-[#A13163]">Edit Studio Profile</h1>

          <Tabs defaultValue="basic" className="space-y-8">
            <TabsList>
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit} className="space-y-8">
              <TabsContent value="basic">
                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Studio Logo
                  </label>
                  <div className="flex items-center gap-6">
                    <div className="relative h-32 w-32">
                      {logoPreview ? (
                        <Image
                          src={logoPreview}
                          alt="Logo preview"
                          fill
                          className="rounded-lg object-contain"
                        />
                      ) : (
                        <div className="h-full w-full rounded-lg bg-neutral-100" />
                      )}
                    </div>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                        id="logo-upload"
                      />
                      <label
                        htmlFor="logo-upload"
                        className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm hover:border-[#A13163]"
                      >
                        <Upload className="h-4 w-4" />
                        Upload Logo
                      </label>
                      <p className="mt-2 text-xs text-neutral-500">
                        Recommended: Square image, at least 400x400px
                      </p>
                    </div>
                  </div>
                </div>

                {/* Basic Information */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Studio Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-neutral-700 mb-1">
                      Studio Type
                    </label>
                    <select
                      id="type"
                      value={profile.type}
                      onChange={(e) => setProfile({ ...profile, type: e.target.value })}
                      className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="Animation Studio">Animation Studio</option>
                      <option value="VFX Studio">VFX Studio</option>
                      <option value="Game Studio">Game Studio</option>
                      <option value="Creative Agency">Creative Agency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={profile.description}
                    onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                    rows={4}
                    required
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="founded" className="block text-sm font-medium text-neutral-700 mb-1">
                      Founded Year
                    </label>
                    <input
                      type="text"
                      id="founded"
                      value={profile.founded}
                      onChange={(e) => setProfile({ ...profile, founded: e.target.value })}
                      className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                      placeholder="e.g., 2010"
                    />
                  </div>

                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium text-neutral-700 mb-1">
                      Team Size
                    </label>
                    <input
                      type="number"
                      id="teamSize"
                      value={profile.teamSize}
                      onChange={(e) => setProfile({ ...profile, teamSize: parseInt(e.target.value) })}
                      className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="services">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Services</h2>
                    <Button
                      type="button"
                      onClick={addService}
                      className="bg-[#4B269F] hover:bg-[#4B269F]/90"
                    >
                      Add Service
                    </Button>
                  </div>

                  {profile.services.map((service, index) => (
                    <div key={index} className="rounded-lg border border-neutral-200 p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-lg font-medium">Service #{index + 1}</h3>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeService(index)}
                          className="text-neutral-400 hover:text-neutral-600"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Service Name
                          </label>
                          <input
                            type="text"
                            value={service.name}
                            onChange={(e) => {
                              const newServices = [...profile.services];
                              newServices[index].name = e.target.value;
                              setProfile({ ...profile, services: newServices });
                            }}
                            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                            placeholder="e.g., Character Animation"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Description
                          </label>
                          <textarea
                            value={service.description}
                            onChange={(e) => {
                              const newServices = [...profile.services];
                              newServices[index].description = e.target.value;
                              setProfile({ ...profile, services: newServices });
                            }}
                            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                            rows={3}
                          />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              Minimum Price (USD)
                            </label>
                            <input
                              type="text"
                              value={service.priceRange.min}
                              onChange={(e) => {
                                const newServices = [...profile.services];
                                newServices[index].priceRange.min = e.target.value;
                                setProfile({ ...profile, services: newServices });
                              }}
                              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                              placeholder="e.g., 1000"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              Maximum Price (USD)
                            </label>
                            <input
                              type="text"
                              value={service.priceRange.max}
                              onChange={(e) => {
                                const newServices = [...profile.services];
                                newServices[index].priceRange.max = e.target.value;
                                setProfile({ ...profile, services: newServices });
                              }}
                              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                              placeholder="e.g., 5000"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="projects">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Projects</h2>
                    <Button
                      type="button"
                      onClick={addProject}
                      className="bg-[#4B269F] hover:bg-[#4B269F]/90"
                    >
                      Add Project
                    </Button>
                  </div>

                  {profile.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="rounded-lg border border-neutral-200 p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-lg font-medium">Project #{projectIndex + 1}</h3>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeProject(projectIndex)}
                          className="text-neutral-400 hover:text-neutral-600"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              Project Title
                            </label>
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) => {
                                const newProjects = [...profile.projects];
                                newProjects[projectIndex].title = e.target.value;
                                setProfile({ ...profile, projects: newProjects });
                              }}
                              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              Status
                            </label>
                            <select
                              value={project.status}
                              onChange={(e) => {
                                const newProjects = [...profile.projects];
                                newProjects[projectIndex].status = e.target.value as any;
                                setProfile({ ...profile, projects: newProjects });
                              }}
                              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                            >
                              <option value="current">Current</option>
                              <option value="ongoing">Ongoing</option>
                              <option value="completed">Completed</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Description
                          </label>
                          <textarea
                            value={project.description}
                            onChange={(e) => {
                              const newProjects = [...profile.projects];
                              newProjects[projectIndex].description = e.target.value;
                              setProfile({ ...profile, projects: newProjects });
                            }}
                            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                            rows={3}
                          />
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              Client
                            </label>
                            <input
                              type="text"
                              value={project.client}
                              onChange={(e) => {
                                const newProjects = [...profile.projects];
                                newProjects[projectIndex].client = e.target.value;
                                setProfile({ ...profile, projects: newProjects });
                              }}
                              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              Start Date
                            </label>
                            <input
                              type="date"
                              value={project.startDate}
                              onChange={(e) => {
                                const newProjects = [...profile.projects];
                                newProjects[projectIndex].startDate = e.target.value;
                                setProfile({ ...profile, projects: newProjects });
                              }}
                              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              End Date
                            </label>
                            <input
                              type="date"
                              value={project.endDate}
                              onChange={(e) => {
                                const newProjects = [...profile.projects];
                                newProjects[projectIndex].endDate = e.target.value;
                                setProfile({ ...profile, projects: newProjects });
                              }}
                              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Team Members */}
                        <div>
                          <div className="mb-4 flex items-center justify-between">
                            <label className="block text-sm font-medium text-neutral-700">
                              Team Members
                            </label>
                            <Button
                              type="button"
                              onClick={() => addTeamMember(projectIndex)}
                              variant="outline"
                              size="sm"
                            >
                              Add Team Member
                            </Button>
                          </div>

                          <div className="space-y-4">
                            {project.teamMembers.map((member, memberIndex) => (
                              <div key={memberIndex} className="flex gap-4">
                                <div className="flex-1 space-y-4">
                                  <div className="grid gap-4 md:grid-cols-3">
                                    <div>
                                      <label className="block text-sm text-neutral-600 mb-1">
                                        Role
                                      </label>
                                      <input
                                        type="text"
                                        value={member.role}
                                        onChange={(e) => {
                                          const newProjects = [...profile.projects];
                                          newProjects[projectIndex].teamMembers[memberIndex].role = e.target.value;
                                          setProfile({ ...profile, projects: newProjects });
                                        }}
                                        className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                                        placeholder="e.g., Lead Animator"
                                      />
                                    </div>

                                    <div>
                                      <label className="block text-sm text-neutral-600 mb-1">
                                        Name
                                      </label>
                                      <div className="relative">
                                        <input
                                          type="text"
                                          value={member.name}
                                          onChange={(e) => {
                                            const newProjects = [...profile.projects];
                                            newProjects[projectIndex].teamMembers[memberIndex].name = e.target.value;
                                            setProfile({ ...profile, projects: newProjects });
                                          }}
                                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                                          placeholder="Search creators..."
                                        />
                                        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                                      </div>
                                    </div>

                                    <div>
                                      <label className="block text-sm text-neutral-600 mb-1">
                                        Email (for invitation)
                                      </label>
                                      <input
                                        type="email"
                                        value={member.email || ''}
                                        onChange={(e) => {
                                          const newProjects = [...profile.projects];
                                          newProjects[projectIndex].teamMembers[memberIndex].email = e.target.value;
                                          setProfile({ ...profile, projects: newProjects });
                                        }}
                                        className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                                        placeholder="For non-registered creators"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeTeamMember(projectIndex, memberIndex)}
                                  className="self-end text-neutral-400 hover:text-neutral-600"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="contact">
                <div className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h2 className="mb-4 text-lg font-semibold">Contact Information</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          General Email
                        </label>
                        <input
                          type="email"
                          value={profile.contacts.email.general}
                          onChange={(e) => setProfile({
                            ...profile,
                            contacts: {
                              ...profile.contacts,
                              email: { ...profile.contacts.email, general: e.target.value }
                            }
                          })}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Business Email
                        </label>
                        <input
                          type="email"
                          value={profile.contacts.email.business}
                          onChange={(e) => setProfile({
                            ...profile,
                            contacts: {
                              ...profile.contacts,
                              email: { ...profile.contacts.email, business: e.target.value }
                            }
                          })}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Support Email
                        </label>
                        <input
                          type="email"
                          value={profile.contacts.email.support}
                          onChange={(e) => setProfile({
                            ...profile,
                            contacts: {
                              ...profile.contacts,
                              email: { ...profile.contacts.email, support: e.target.value }
                            }
                          })}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={profile.contacts.phone}
                          onChange={(e) => setProfile({
                            ...profile,
                            contacts: { ...profile.contacts, phone: e.target.value }
                          })}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold">Address</h3>
                    <div className="grid gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          value={profile.contacts.address.street}
                          onChange={(e) => setProfile({
                            ...profile,
                            contacts: {
                              ...profile.contacts,
                              address: { ...profile.contacts.address, street: e.target.value }
                            }
                          })}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            value={profile.contacts.address.city}
                            onChange={(e) => setProfile({
                              ...profile,
                              contacts: {
                                ...profile.contacts,
                                address: { ...profile.contacts.address, city: e.target.value }
                              }
                            })}
                            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            State/Province
                          </label>
                          <input
                            type="text"
                            value={profile.contacts.address.state}
                            onChange={(e) => setProfile({
                              ...profile,
                              contacts: {
                                ...profile.contacts,
                                address: { ...profile.contacts.address, state: e.target.value }
                              }
                            })}
                            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Country
                          </label>
                          <input
                            type="text"
                            value={profile.contacts.address.country}
                            onChange={(e) => setProfile({
                              ...profile,
                              contacts: {
                                ...profile.contacts,
                                address: { ...profile.contacts.address, country: e.target.value }
                              }
                            })}
                            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus: outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            value={profile.contacts.address.postal}
                            onChange={(e) => setProfile({
                              ...profile,
                              contacts: {
                                ...profile.contacts,
                                address: { ...profile.contacts.address, postal: e.target.value }
                              }
                            })}
                            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold">Social Links</h3>
                    <div className="grid gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Website
                        </label>
                        <input
                          type="url"
                          value={profile.social.website}
                          onChange={(e) => setProfile({
                            ...profile,
                            social: { ...profile.social, website: e.target.value }
                          })}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                          placeholder="https://"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          LinkedIn
                        </label>
                        <input
                          type="url"
                          value={profile.social.linkedin}
                          onChange={(e) => setProfile({
                            ...profile,
                            social: { ...profile.social, linkedin: e.target.value }
                          })}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                          placeholder="https://linkedin.com/company/"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Twitter
                        </label>
                        <input
                          type="url"
                          value={profile.social.twitter}
                          onChange={(e) => setProfile({
                            ...profile,
                            social: { ...profile.social, twitter: e.target.value }
                          })}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                          placeholder="https://twitter.com/"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Instagram
                        </label>
                        <input
                          type="url"
                          value={profile.social.instagram}
                          onChange={(e) => setProfile({
                            ...profile,
                            social: { ...profile.social, instagram: e.target.value }
                          })}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                          placeholder="https://instagram.com/"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <div className="flex justify-end gap-4 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#4B269F] hover:bg-[#4B269F]/90"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </Tabs>
        </div>
      </div>
    </div>
  );
}