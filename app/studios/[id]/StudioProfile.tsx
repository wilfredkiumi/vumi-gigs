"use client";

import { MapPin, Link2, Mail, Globe, Linkedin, Award, Clock, Users, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import type { Studio } from '@/lib/data';

export default function StudioProfile({ studio }: { studio: Studio }) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Profile Header */}
      <div className="relative h-48 bg-gradient-to-r from-[#4B269F] to-[#A13163]">
        <div className="absolute -bottom-16 mx-auto w-full">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end gap-6">
              <div className="relative h-32 w-32 overflow-hidden rounded-lg border-4 border-white bg-white">
                <Image
                  src={studio.branding.logo.main}
                  alt={studio.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-4 flex-1">
                <h1 className="text-3xl font-bold text-white">{studio.name}</h1>
                <p className="text-white/90">{studio.type}</p>
              </div>
              <div className="mb-4 flex gap-3">
                <Button className="bg-white text-[#4B269F] hover:bg-white/90">
                  Contact
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* About */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">About</h2>
                <p className="mb-4 text-neutral-600">{studio.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-neutral-600">
                    <MapPin className="h-4 w-4" />
                    <span>{studio.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Users className="h-4 w-4" />
                    <span>{studio.teamSize} Team Members</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Building className="h-4 w-4" />
                    <span>{studio.founded}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Globe className="h-4 w-4" />
                    <Link href={studio.website} className="hover:text-[#A13163]">
                      {studio.website}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Contact</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Mail className="h-4 w-4" />
                    <span>{studio.contacts.email.general}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <MapPin className="h-4 w-4" />
                    <span>{studio.contacts.address.city}, {studio.contacts.address.country}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <div className="space-y-6">
                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold">Overview</h2>
                    <p className="text-neutral-600">{studio.description}</p>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold">Specialties</h2>
                    <div className="flex flex-wrap gap-2">
                      {studio.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold">Clients</h2>
                    <div className="flex flex-wrap gap-2">
                      {studio.clients.map((client, index) => (
                        <span 
                          key={index}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="projects">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-semibold">Projects</h2>
                  {studio.projects.length > 0 ? (
                    <div className="grid gap-4">
                      {studio.projects.map((project) => (
                        <div key={project.id} className="rounded-lg border p-4">
                          <h3 className="font-medium">{project.title}</h3>
                          <p className="text-sm text-neutral-600">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-neutral-600">No projects available</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="team">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-semibold">Team</h2>
                  {studio.representatives.map((rep, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h3 className="font-medium">{rep.role}</h3>
                      <p className="text-sm text-neutral-600">{rep.bio}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="contact">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-neutral-600">{studio.contacts.email.general}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-neutral-600">
                        {studio.contacts.address.street}<br />
                        {studio.contacts.address.city}, {studio.contacts.address.state}<br />
                        {studio.contacts.address.country} {studio.contacts.address.postal}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-neutral-600">
                        Monday - Friday: {studio.businessHours.schedule.monday}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}