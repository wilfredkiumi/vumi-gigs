"use client";

import { useState } from 'react';
import { ArrowLeft, Upload, Plus, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface CreatorProfile {
  name: string;
  role: string;
  location: string;
  bio: string;
  specialties: string[];
  languages: string[];
  experience: string;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
  }>;
  links: Array<{
    platform: string;
    url: string;
  }>;
  rates: {
    hourly: string;
    project: string;
  };
}

export default function EditProfilePage() {
  const [profile, setProfile] = useState<CreatorProfile>({
    name: '',
    role: '',
    location: '',
    bio: '',
    specialties: [],
    languages: [],
    experience: '',
    education: [{ institution: '', degree: '', year: '' }],
    links: [{ platform: 'portfolio', url: '' }],
    rates: {
      hourly: '',
      project: ''
    }
  });
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [newSpecialty, setNewSpecialty] = useState('');

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addSpecialty = () => {
    if (newSpecialty && !profile.specialties.includes(newSpecialty)) {
      setProfile({
        ...profile,
        specialties: [...profile.specialties, newSpecialty]
      });
      setNewSpecialty('');
    }
  };

  const removeSpecialty = (specialty: string) => {
    setProfile({
      ...profile,
      specialties: profile.specialties.filter(s => s !== specialty)
    });
  };

  const addEducation = () => {
    setProfile({
      ...profile,
      education: [...profile.education, { institution: '', degree: '', year: '' }]
    });
  };

  const removeEducation = (index: number) => {
    setProfile({
      ...profile,
      education: profile.education.filter((_, i) => i !== index)
    });
  };

  const addLink = () => {
    setProfile({
      ...profile,
      links: [...profile.links, { platform: 'portfolio', url: '' }]
    });
  };

  const removeLink = (index: number) => {
    setProfile({
      ...profile,
      links: profile.links.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile data:', profile);
    console.log('Avatar:', avatar);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link 
          href="/profile"
          className="mb-6 inline-flex items-center gap-2 text-neutral-600 hover:text-[#A13163]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Profile
        </Link>

        <div className="rounded-lg bg-white p-8 shadow-sm">
          <h1 className="mb-8 text-2xl font-bold text-[#A13163]">Edit Profile</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Avatar Upload */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Profile Photo
              </label>
              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24">
                  {avatarPreview ? (
                    <Image
                      src={avatarPreview}
                      alt="Avatar preview"
                      fill
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full rounded-full bg-neutral-100" />
                  )}
                </div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                    id="avatar-upload"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm hover:border-[#A13163]"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Photo
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
                  Full Name
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
                <label htmlFor="role" className="block text-sm font-medium text-neutral-700 mb-1">
                  Professional Role
                </label>
                <input
                  type="text"
                  id="role"
                  value={profile.role}
                  onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                  placeholder="e.g., 3D Animator, Character Designer"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-neutral-700 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                rows={4}
                placeholder="Tell us about yourself and your work..."
                required
              />
            </div>

            {/* Specialties */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Specialties
              </label>
              <div className="mb-4 flex flex-wrap gap-2">
                {profile.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-sm"
                  >
                    {specialty}
                    <button
                      type="button"
                      onClick={() => removeSpecialty(specialty)}
                      className="ml-1 text-neutral-400 hover:text-neutral-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSpecialty}
                  onChange={(e) => setNewSpecialty(e.target.value)}
                  className="flex-1 rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                  placeholder="Add a specialty..."
                />
                <Button
                  type="button"
                  onClick={addSpecialty}
                  className="bg-[#4B269F] hover:bg-[#4B269F]/90"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium text-neutral-700">
                  Education
                </label>
                <Button
                  type="button"
                  onClick={addEducation}
                  variant="outline"
                  size="sm"
                >
                  Add Education
                </Button>
              </div>
              <div className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-1 space-y-4">
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => {
                          const newEducation = [...profile.education];
                          newEducation[index].institution = e.target.value;
                          setProfile({ ...profile, education: newEducation });
                        }}
                        className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                        placeholder="Institution"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => {
                            const newEducation = [...profile.education];
                            newEducation[index].degree = e.target.value;
                            setProfile({ ...profile, education: newEducation });
                          }}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                          placeholder="Degree"
                        />
                        <input
                          type="text"
                          value={edu.year}
                          onChange={(e) => {
                            const newEducation = [...profile.education];
                            newEducation[index].year = e.target.value;
                            setProfile({ ...profile, education: newEducation });
                          }}
                          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                          placeholder="Year"
                        />
                      </div>
                    </div>
                    {profile.education.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeEducation(index)}
                        variant="ghost"
                        size="icon"
                        className="self-start text-neutral-400 hover:text-neutral-600"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium text-neutral-700">
                  Portfolio & Social Links
                </label>
                <Button
                  type="button"
                  onClick={addLink}
                  variant="outline"
                  size="sm"
                >
                  Add Link
                </Button>
              </div>
              <div className="space-y-4">
                {profile.links.map((link, index) => (
                  <div key={index} className="flex gap-4">
                    <select
                      value={link.platform}
                      onChange={(e) => {
                        const newLinks = [...profile.links];
                        newLinks[index].platform = e.target.value;
                        setProfile({ ...profile, links: newLinks });
                      }}
                      className="w-40 rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                    >
                      <option value="portfolio">Portfolio</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="behance">Behance</option>
                      <option value="dribbble">Dribbble</option>
                      <option value="instagram">Instagram</option>
                    </select>
                    <input
                      type="url"
                      value={link.url}
                      onChange={(e) => {
                        const newLinks = [...profile.links];
                        newLinks[index].url = e.target.value;
                        setProfile({ ...profile, links: newLinks });
                      }}
                      className="flex-1 rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                      placeholder="https://"
                    />
                    {profile.links.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeLink(index)}
                        variant="ghost"
                        size="icon"
                        className="text-neutral-400 hover:text-neutral-600"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Rates */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Rates
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="hourlyRate" className="block text-sm text-neutral-600 mb-1">
                    Hourly Rate (USD)
                  </label>
                  <input
                    type="text"
                    id="hourlyRate"
                    value={profile.rates.hourly}
                    onChange={(e) => setProfile({
                      ...profile,
                      rates: { ...profile.rates, hourly: e.target.value }
                    })}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                    placeholder="e.g., $50"
                  />
                </div>
                <div>
                  <label htmlFor="projectRate" className="block text-sm text-neutral-600 mb-1">
                    Project Rate (USD)
                  </label>
                  <input
                    type="text"
                    id="projectRate"
                    value={profile.rates.project}
                    onChange={(e) => setProfile({
                      ...profile,
                      rates: { ...profile.rates, project: e.target.value }
                    })}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                    placeholder="e.g., From $1000"
                  />
                </div>
              </div>
            </div>

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
        </div>
      </div>
    </div>
  );
}