"use client";

import { useState } from 'react';
import { Search, Star, Clock, Archive, Inbox as InboxIcon, Send, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type MessageStatus = 'unread' | 'read' | 'archived';
type MessageType = 'proposal' | 'general' | 'meeting';

interface Message {
  id: string;
  from: {
    name: string;
    avatar: string;
    role: 'client' | 'creator';
  };
  subject: string;
  preview: string;
  timestamp: string;
  status: MessageStatus;
  type: MessageType;
  gigId?: string;
}

const messages: Message[] = [
  {
    id: '1',
    from: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: 'creator'
    },
    subject: 'Proposal: 3D Character Animation Project',
    preview: "Hi, I'm interested in working on your 3D character animation project. I have extensive experience...",
    timestamp: '2024-03-20T10:30:00',
    status: 'unread',
    type: 'proposal',
    gigId: 'gig1'
  },
  {
    id: '2',
    from: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'client'
    },
    subject: 'Re: Motion Graphics Project Discussion',
    preview: "Thanks for your proposal. I'd like to schedule a meeting to discuss the details further...",
    timestamp: '2024-03-19T15:45:00',
    status: 'read',
    type: 'meeting',
    gigId: 'gig2'
  }
];

export default function InboxPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'unread' | 'archived'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const filters = [
    { id: 'all', label: 'All Messages', icon: InboxIcon },
    { id: 'unread', label: 'Unread', icon: Star },
    { id: 'archived', label: 'Archived', icon: Archive }
  ];

  const filteredMessages = messages.filter(message => {
    const matchesFilter = 
      selectedFilter === 'all' || 
      (selectedFilter === 'unread' && message.status === 'unread') ||
      (selectedFilter === 'archived' && message.status === 'archived');

    const matchesSearch = 
      message.from.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.preview.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <button className="mb-6 w-full rounded-lg bg-[#4B269F] px-4 py-2 text-sm text-white hover:bg-[#4B269F]/90">
                Compose Message
              </button>

              <nav className="space-y-1">
                {filters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id as any)}
                      className={`w-full rounded-lg px-4 py-2 text-sm ${
                        selectedFilter === filter.id
                          ? 'bg-neutral-100 text-[#4B269F]'
                          : 'text-neutral-600 hover:bg-neutral-50'
                      } flex items-center gap-3`}
                    >
                      <Icon className="h-4 w-4" />
                      {filter.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Message List */}
          <div className="lg:col-span-3">
            <div className="rounded-lg bg-white shadow-sm">
              {/* Search */}
              <div className="border-b border-neutral-200 p-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-full rounded-lg border border-neutral-200 px-10 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                </div>
              </div>

              {/* Messages */}
              <div className="divide-y divide-neutral-200">
                {filteredMessages.map((message) => (
                  <Link
                    key={message.id}
                    href={`/inbox/${message.id}`}
                    className={`block w-full p-4 text-left hover:bg-neutral-50 ${
                      message.status === 'unread' ? 'bg-neutral-50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-10 w-10 flex-shrink-0">
                        <Image
                          src={message.from.avatar}
                          alt={message.from.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{message.from.name}</p>
                          <span className="text-sm text-neutral-500">
                            {new Date(message.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="font-medium text-neutral-900">{message.subject}</p>
                        <p className="text-sm text-neutral-600 line-clamp-1">{message.preview}</p>
                        {message.type === 'proposal' && (
                          <span className="inline-block rounded-full bg-[#4B269F]/10 px-2 py-1 text-xs text-[#4B269F]">
                            Proposal
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}