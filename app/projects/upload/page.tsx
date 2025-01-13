"use client";

import { useState } from 'react';
import { ArrowLeft, Upload, Plus, X, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ProjectUpload {
  title: string;
  description: string;
  category: string;
  status: 'In Progress' | 'In Development' | 'Completed';
  thumbnail: File | null;
  thumbnailPreview: string;
  media: Array<{
    file: File;
    type: 'image' | 'video';
    preview: string;
  }>;
  team: Array<{
    role: string;
    creatorId?: string;
    name: string;
    email?: string;
    status: 'confirmed' | 'pending' | 'invited';
  }>;
}

export default function ProjectUploadPage() {
  const [project, setProject] = useState<ProjectUpload>({
    title: '',
    description: '',
    category: '',
    status: 'In Development',
    thumbnail: null,
    thumbnailPreview: '',
    media: [],
    team: []
  });

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProject({
        ...project,
        thumbnail: file,
        thumbnailPreview: URL.createObjectURL(file)
      });
    }
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newMedia = Array.from(files).map(file => ({
        file,
        type: file.type.startsWith('image/') ? 'image' : 'video',
        preview: URL.createObjectURL(file)
      }));
      setProject({
        ...project,
        media: [...project.media, ...newMedia]
      });
    }
  };

  const removeMedia = (index: number) => {
    const newMedia = [...project.media];
    URL.revokeObjectURL(newMedia[index].preview);
    newMedia.splice(index, 1);
    setProject({ ...project, media: newMedia });
  };

  const addTeamMember = () => {
    setProject({
      ...project,
      team: [...project.team, {
        role: '',
        name: '',
        status: 'pending'
      }]
    });
  };

  const removeTeamMember = (index: number) => {
    const newTeam = [...project.team];
    newTeam.splice(index, 1);
    setProject({ ...project, team: newTeam });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Project data:', project);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link 
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 text-neutral-600 hover:text-[#A13163]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="rounded-lg bg-white p-8 shadow-sm">
          <h1 className="mb-8 text-2xl font-bold text-[#A13163]">Upload Project</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Thumbnail Upload */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Project Thumbnail
              </label>
              <div className="flex items-center gap-6">
                <div className="relative aspect-video w-48">
                  {project.thumbnailPreview ? (
                    <Image
                      src={project.thumbnailPreview}
                      alt="Thumbnail preview"
                      fill
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-full w-full rounded-lg bg-neutral-100" />
                  )}
                </div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                    id="thumbnail-upload"
                  />
                  <label
                    htmlFor="thumbnail-upload"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm hover:border-[#A13163]"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Thumbnail
                  </label>
                  <p className="mt-2 text-xs text-neutral-500">
                    Recommended: 16:9 ratio, at least 1280x720px
                  </p>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1">
                Project Title
              </label>
              <input
                type="text"
                id="title"
                value={project.title}
                onChange={(e) => setProject({ ...project, title: e.target.value })}
                className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={project.description}
                onChange={(e) => setProject({ ...project, description: e.target.value })}
                className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                rows={4}
                required
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={project.category}
                  onChange={(e) => setProject({ ...project, category: e.target.value })}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                  required
                >
                  <option value="">Select category</option>
                  <option value="3D Animation">3D Animation</option>
                  <option value="2D Animation">2D Animation</option>
                  <option value="Motion Graphics">Motion Graphics</option>
                  <option value="Visual Effects">Visual Effects</option>
                  <option value="Character Design">Character Design</option>
                </select>
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-neutral-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  value={project.status}
                  onChange={(e) => setProject({ ...project, status: e.target.value as any })}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                  required
                >
                  <option value="In Development">In Development</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Media Upload */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Project Media
              </label>
              <div className="mb-4 grid gap-4 md:grid-cols-3">
                {project.media.map((media, index) => (
                  <div key={index} className="relative aspect-video">
                    {media.type === 'image' ? (
                      <Image
                        src={media.preview}
                        alt={`Media ${index + 1}`}
                        fill
                        className="rounded-lg object-cover"
                      />
                    ) : (
                      <video
                        src={media.preview}
                        className="h-full w-full rounded-lg object-cover"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => removeMedia(index)}
                      className="absolute -right-2 -top-2 rounded-full bg-white p-1 shadow-md hover:bg-neutral-100"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleMediaUpload}
                multiple
                className="hidden"
                id="media-upload"
              />
              <label
                htmlFor="media-upload"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm hover:border-[#A13163]"
              >
                <Upload className="h-4 w-4" />
                Upload Media
              </label>
            </div>

            {/* Team Members */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <label className="block text-sm font-medium text-neutral-700">
                  Team Members
                </label>
                <Button
                  type="button"
                  onClick={addTeamMember}
                  variant="outline"
                  size="sm"
                >
                  Add Team Member
                </Button>
              </div>

              <div className="space-y-4">
                {project.team.map((member, index) => (
                  <div key={index} className="flex gap-4">
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
                              const newTeam = [...project.team];
                              newTeam[index].role = e.target.value;
                              setProject({ ...project, team: newTeam });
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
                                const newTeam = [...project.team];
                                newTeam[index].name = e.target.value;
                                setProject({ ...project, team: newTeam });
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
                              const newTeam = [...project.team];
                              newTeam[index].email = e.target.value;
                              setProject({ ...project, team: newTeam });
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
                      onClick={() => removeTeamMember(index)}
                      className="self-end text-neutral-400 hover:text-neutral-600"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
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
                Upload Project
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}