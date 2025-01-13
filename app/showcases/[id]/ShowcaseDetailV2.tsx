"use client";

import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Share2, Heart, ArrowRight, Globe, Ticket } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import type { Showcase } from '@/lib/data';

interface ShowcaseDetailV2Props {
  showcase: Showcase;
}

export default function ShowcaseDetailV2({ showcase }: ShowcaseDetailV2Props) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <Image
          src={showcase.image}
          alt={showcase.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black">
          <div className="mx-auto max-w-7xl px-6 py-32">
            <div className="flex flex-col items-center text-center">
              <span className="mb-6 inline-block rounded-full bg-[#A13163] px-4 py-1.5 text-sm font-medium">
                {showcase.category}
              </span>
              <h1 className="mb-6 max-w-4xl bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-6xl font-bold text-transparent">
                {showcase.title}
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-white/80">
                {showcase.description}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-white/60">Date</p>
                    <p className="font-medium">{showcase.when.dates}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-white/60">Time</p>
                    <p className="font-medium">{showcase.when.time} {showcase.when.timezone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-white/60">Location</p>
                    <p className="font-medium">{showcase.where.venue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-white/60">Attendees</p>
                    <p className="font-medium">{showcase.who.expectedAttendees}+ Expected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Content Area */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="space-y-12">
                <TabsList className="inline-flex h-12 space-x-2 rounded-full bg-white/5 p-1 backdrop-blur-sm">
                  <TabsTrigger 
                    value="about"
                    className="rounded-full px-6 data-[state=active]:bg-[#A13163]"
                  >
                    About
                  </TabsTrigger>
                  <TabsTrigger 
                    value="schedule"
                    className="rounded-full px-6 data-[state=active]:bg-[#A13163]"
                  >
                    Schedule
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <div className="space-y-16">
                    {/* Overview */}
                    <div>
                      <h2 className="mb-6 text-3xl font-bold">About the Event</h2>
                      <p className="text-lg text-white/80">{showcase.what.overview}</p>
                    </div>

                    {/* Highlights & Objectives */}
                    <div className="grid gap-12 md:grid-cols-2">
                      <div>
                        <h3 className="mb-6 text-xl font-semibold">Event Highlights</h3>
                        <ul className="space-y-4">
                          {showcase.what.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-4">
                              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#A13163]/20">
                                <div className="h-2 w-2 rounded-full bg-[#A13163]" />
                              </div>
                              <span className="text-white/80">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-6 text-xl font-semibold">Event Objectives</h3>
                        <ul className="space-y-4">
                          {showcase.what.objectives.map((objective, index) => (
                            <li key={index} className="flex items-start gap-4">
                              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#4B269F]/20">
                                <div className="h-2 w-2 rounded-full bg-[#4B269F]" />
                              </div>
                              <span className="text-white/80">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h3 className="mb-6 text-xl font-semibold">Who Should Attend</h3>
                      <div className="flex flex-wrap gap-3">
                        {showcase.who.targetAudience.map((audience, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-white/5 px-4 py-2 text-sm backdrop-blur-sm"
                          >
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="schedule">
                  <div className="space-y-12">
                    <div>
                      <h2 className="mb-8 text-3xl font-bold">Event Schedule</h2>
                      <div className="space-y-6">
                        {showcase.schedule.map((day, index) => (
                          <div 
                            key={index}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                          >
                            <div className="bg-[#4B269F]/20 px-8 py-4">
                              <h3 className="text-xl font-semibold text-[#A13163]">
                                {day.day}
                              </h3>
                            </div>
                            <div className="divide-y divide-white/10">
                              {day.events.map((event, eventIndex) => (
                                <div 
                                  key={eventIndex}
                                  className="flex items-start gap-6 px-8 py-6 transition-colors hover:bg-white/5"
                                >
                                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4B269F]/20">
                                    <Calendar className="h-5 w-5 text-[#A13163]" />
                                  </div>
                                  <div>
                                    <p className="text-lg font-medium">
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

                    {/* Time Zone Info */}
                    <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
                      <div className="flex items-start gap-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A13163]/20">
                          <Globe className="h-6 w-6 text-[#A13163]" />
                        </div>
                        <div>
                          <h4 className="mb-2 text-lg font-medium">Time Zone Information</h4>
                          <p className="text-white/80">
                            All times are shown in {showcase.when.timezone}. Please adjust for your local time zone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Registration Card */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="p-8">
                    <div className="mb-8">
                      <h2 className="mb-1 text-3xl font-bold text-[#A13163]">{showcase.price}</h2>
                      <p className="text-white/60">per attendee</p>
                    </div>

                    <Button className="w-full bg-[#A13163] text-lg hover:bg-[#A13163]/90">
                      <Ticket className="mr-2 h-5 w-5" />
                      Register Now
                    </Button>

                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-3 text-white/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#A13163]" />
                        <span>{showcase.how.format}</span>
                      </div>
                      {showcase.how.requirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-3 text-white/80">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#A13163]" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Venue Card */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <h2 className="mb-6 text-xl font-semibold">Venue Information</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 font-medium">{showcase.where.venue}</h3>
                      <p className="text-white/80">
                        {showcase.where.address}<br />
                        {showcase.where.city}, {showcase.where.country}
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-medium">Access Information</h3>
                      <p className="text-white/80">{showcase.where.accessInfo}</p>
                    </div>
                  </div>
                </div>

                {/* Organizer Card */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <h2 className="mb-6 text-xl font-semibold">About the Organizer</h2>
                  <div>
                    <h3 className="mb-2 font-medium">{showcase.who.organizer}</h3>
                    <p className="text-white/80">{showcase.why.purpose}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}