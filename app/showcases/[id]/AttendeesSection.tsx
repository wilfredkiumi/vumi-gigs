"use client";

import { useState } from 'react';
import { Search, Filter, MapPin, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import VideoMeetingModal from '@/app/components/VideoMeetingModal';

interface Attendee {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  avatar: string;
}

const attendees: Attendee[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Film Distributor',
    company: 'Global Films Distribution',
    country: 'United States',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    id: '2',
    name: 'Alex Thompson',
    role: 'Festival Director',
    company: 'European Film Festival',
    country: 'France',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  }
];

export default function AttendeesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [selectedAttendee, setSelectedAttendee] = useState<Attendee | null>(null);

  const countries = [...new Set(attendees.map(a => a.country))];
  const roles = [...new Set(attendees.map(a => a.role))];

  const filteredAttendees = attendees.filter(attendee => {
    const matchesSearch = searchQuery === '' || 
      attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCountry = selectedCountry === '' || attendee.country === selectedCountry;
    const matchesRole = selectedRole === '' || attendee.role === selectedRole;

    return matchesSearch && matchesCountry && matchesRole;
  });

  const handleMeetingSchedule = (meetingDetails: any) => {
    console.log('Scheduling meeting with:', selectedAttendee?.name, meetingDetails);
    setShowMeetingModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Attendees</h2>
        <p className="text-neutral-600">{attendees.length} registered</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search attendees..."
            className="w-full rounded-lg border border-neutral-200 px-10 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        </div>

        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
        >
          <option value="">All Countries</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
        >
          <option value="">All Roles</option>
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      {/* Attendees List */}
      <div className="grid gap-4">
        {filteredAttendees.map((attendee) => (
          <div
            key={attendee.id}
            className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={attendee.avatar}
                  alt={attendee.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{attendee.name}</h3>
                <div className="space-y-1 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{attendee.role} at {attendee.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{attendee.country}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                setSelectedAttendee(attendee);
                setShowMeetingModal(true);
              }}
              className="bg-[#4B269F] text-white hover:bg-[#4B269F]/90"
            >
              Schedule Meeting
            </Button>
          </div>
        ))}
      </div>

      <VideoMeetingModal
        isOpen={showMeetingModal}
        onClose={() => setShowMeetingModal(false)}
        onSchedule={handleMeetingSchedule}
      />
    </div>
  );
}