"use client";

import { useState } from 'react';
import { ArrowLeft, Heart, Share2, Eye, MessageSquare, Calendar, Link2, Clock, Users, Target, Coins } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Project } from '@/lib/data';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [isLiked, setIsLiked] = useState(false);
  
  // Calculate funding progress
  const fundingProgress = (parseInt(project.details.fundingSecured.replace(/[^0-9]/g, '')) / 
                          parseInt(project.details.fundingGoal.replace(/[^0-9]/g, ''))) * 100;

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link 
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 text-neutral-600 hover:text-[#A13163]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              {/* Project Header */}
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {project.status}
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`rounded-full p-2 ${
                        isLiked 
                          ? 'bg-red-50 text-red-500' 
                          : 'hover:bg-neutral-50'
                      }`}
                    >
                      <Heart className="h-5 w-5" fill={isLiked ? 'currentColor' : 'none'} />
                    </button>
                    <button className="rounded-full p-2 hover:bg-neutral-50">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                  <span>{project.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {project.views.toLocaleString()} views
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Project Media */}
              <div className="mb-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Project Content */}
              <Tabs defaultValue="about" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="materials">Materials</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-lg">{project.description}</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-neutral-100 p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-600">
                          <Clock className="h-4 w-4" />
                          Duration
                        </div>
                        <p className="text-lg font-medium">{project.details.duration}</p>
                      </div>

                      <div className="rounded-lg border border-neutral-100 p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-600">
                          <Target className="h-4 w-4" />
                          Target Audience
                        </div>
                        <p className="text-lg font-medium">{project.details.targetAudience}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="team">
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Project Team</h2>
                    
                    {/* Team Members */}
                    <div className="space-y-4">
                      {project.team.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-start gap-4 rounded-lg border border-neutral-200 p-4"
                        >
                          <Link 
                            href={`/creators/${member.id}`}
                            className="relative h-16 w-16 flex-shrink-0"
                          >
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </Link>
                          <div>
                            <Link 
                              href={`/creators/${member.id}`}
                              className="font-medium hover:text-[#A13163]"
                            >
                              {member.name}
                            </Link>
                            <p className="text-sm text-neutral-600">{member.role}</p>
                            <p className="mt-1 text-sm text-neutral-600">{member.bio}</p>
                            <div className="mt-2 flex gap-2">
                              <Link
                                href={`/creators/${member.id}`}
                                className="rounded-lg border border-neutral-200 px-4 py-2 text-sm text-[#4B269F] hover:border-[#A13163] hover:text-[#A13163]"
                              >
                                View Profile
                              </Link>
                              <Button
                                size="sm"
                                className="bg-[#4B269F] hover:bg-[#4B269F]/90"
                              >
                                Message
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="materials">
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Project Materials</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {project.materials.map((material, index) => (
                        <div key={index} className="overflow-hidden rounded-lg border border-neutral-200">
                          <div className="relative aspect-video">
                            <Image
                              src={material.url}
                              alt={material.type}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium">{material.type}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="timeline">
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Production Timeline</h2>
                    <div className="space-y-4">
                      <div className="rounded-lg border border-neutral-200 p-4">
                        <h3 className="mb-2 font-medium">Pre-production</h3>
                        <p className="text-sm text-neutral-600">{project.details.timeline.preProduction}</p>
                      </div>
                      <div className="rounded-lg border border-neutral-200 p-4">
                        <h3 className="mb-2 font-medium">Production</h3>
                        <p className="text-sm text-neutral-600">{project.details.timeline.production}</p>
                      </div>
                      <div className="rounded-lg border border-neutral-200 p-4">
                        <h3 className="mb-2 font-medium">Post-production</h3>
                        <p className="text-sm text-neutral-600">{project.details.timeline.postProduction}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Funding Status */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Funding Status</h2>
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-neutral-600">Goal</span>
                      <span className="font-medium">{project.details.fundingGoal}</span>
                    </div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-neutral-600">Secured</span>
                      <span className="font-medium">{project.details.fundingSecured}</span>
                    </div>
                    <Progress value={fundingProgress} className="h-2" />
                    <p className="mt-2 text-sm text-neutral-600">
                      {fundingProgress.toFixed(1)}% of goal reached
                    </p>
                  </div>
                  <Button className="w-full bg-[#4B269F] hover:bg-[#4B269F]/90">
                    <Coins className="mr-2 h-4 w-4" />
                    Investment Details
                  </Button>
                </div>
              </div>

              {/* Project Stats */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Project Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Type</span>
                    <span className="font-medium">{project.details.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Technique</span>
                    <span className="font-medium">{project.details.technique}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Team Size</span>
                    <span className="font-medium">{project.team.length} Core Members</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Contact</h2>
                <Button
                  className="w-full bg-[#4B269F] hover:bg-[#4B269F]/90"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}