"use client";

import { Calendar, MapPin, Users, Clock, Share2, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import type { Showcase } from '@/lib/data';

interface ShowcaseDetailProps {
  showcase: Showcase;
}

export default function ShowcaseDetail({ showcase }: ShowcaseDetailProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={showcase.image}
          alt={showcase.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-[#A13163] px-3 py-1 text-sm text-white">
                  {showcase.category}
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold text-white">{showcase.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{showcase.when.dates}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{showcase.when.time} {showcase.when.timezone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{showcase.where.venue}, {showcase.where.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{showcase.who.expectedAttendees}+ Attendees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <Tabs defaultValue="about" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <div className="space-y-8">
                    <div>
                      <h2 className="mb-4 text-2xl font-semibold">About the Event</h2>
                      <p className="text-neutral-600">{showcase.what.overview}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="mb-3 text-lg font-medium">Event Highlights</h3>
                        <ul className="space-y-2">
                          {showcase.what.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2 text-neutral-600">
                              <div className="h-1.5 w-1.5 rounded-full bg-[#A13163]" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-3 text-lg font-medium">Event Objectives</h3>
                        <ul className="space-y-2">
                          {showcase.what.objectives.map((objective, index) => (
                            <li key={index} className="flex items-center gap-2 text-neutral-600">
                              <div className="h-1.5 w-1.5 rounded-full bg-[#4B269F]" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-medium">Target Audience</h3>
                      <div className="flex flex-wrap gap-2">
                        {showcase.who.targetAudience.map((audience, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                          >
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="schedule">
                  <div className="space-y-8">
                    <div>
                      <h2 className="mb-6 text-2xl font-semibold">Event Schedule</h2>
                      <div className="space-y-6">
                        {showcase.schedule.map((day, index) => (
                          <div 
                            key={index}
                            className="rounded-lg border border-neutral-200 bg-white overflow-hidden"
                          >
                            {/* Day Header */}
                            <div className="bg-[#4B269F]/5 px-6 py-4">
                              <h3 className="text-lg font-semibold text-[#4B269F]">
                                {day.day}
                              </h3>
                            </div>
                            
                            {/* Events List */}
                            <div className="divide-y divide-neutral-100">
                              {day.events.map((event, eventIndex) => (
                                <div 
                                  key={eventIndex}
                                  className="flex items-start gap-4 px-6 py-4 hover:bg-neutral-50 transition-colors"
                                >
                                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#4B269F]/10">
                                    <Calendar className="h-4 w-4 text-[#4B269F]" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-neutral-900">
                                      {event}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Schedule Info */}
                    <div className="rounded-lg bg-neutral-50 p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A13163]/10">
                          <Clock className="h-5 w-5 text-[#A13163]" />
                        </div>
                        <div>
                          <h4 className="mb-2 font-medium">Time Zone Information</h4>
                          <p className="text-sm text-neutral-600">
                            All times are shown in {showcase.when.timezone}. Please adjust for your local time zone.
                          </p>
                        </div>
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
              {/* Registration Card */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#4B269F]">{showcase.price}</h2>
                  <p className="text-neutral-600">per attendee</p>
                </div>

                <Button className="w-full bg-[#4B269F] hover:bg-[#4B269F]/90">
                  Register Now
                </Button>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center gap-2 text-neutral-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#4B269F]" />
                    <span>{showcase.how.format}</span>
                  </div>
                  {showcase.how.requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2 text-neutral-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#4B269F]" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue Information */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Venue</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">{showcase.where.venue}</h3>
                    <p className="text-sm text-neutral-600">
                      {showcase.where.address}<br />
                      {showcase.where.city}, {showcase.where.country}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium">Access Information</h3>
                    <p className="text-sm text-neutral-600">{showcase.where.accessInfo}</p>
                  </div>
                </div>
              </div>

              {/* Organizer Information */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Organizer</h2>
                <div>
                  <h3 className="font-medium">{showcase.who.organizer}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{showcase.why.purpose}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}