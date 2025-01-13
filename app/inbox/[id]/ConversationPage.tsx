"use client";

import { useState } from 'react';
import { ArrowLeft, Send, Paperclip, Video } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import VideoMeetingModal from '@/app/components/VideoMeetingModal';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: {
    name: string;
    avatar: string;
    role: 'client' | 'creator';
  };
}

const messages: Message[] = [
  {
    id: '1',
    content: "Hi, I'm interested in working on your 3D character animation project. I have extensive experience in character animation and have worked on similar projects before.",
    timestamp: '2024-03-20T10:30:00',
    sender: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: 'creator'
    }
  },
  {
    id: '2',
    content: "Thanks for reaching out! I'd love to hear more about your experience. Could you share some examples of your previous work?",
    timestamp: '2024-03-20T11:15:00',
    sender: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'client'
    }
  }
];

export default function ConversationPage({ params }: { params: { id: string } }) {
  const [newMessage, setNewMessage] = useState('');
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  
  const conversation = messages.filter(msg => msg.id === params.id || 
    (msg.id === '2' && params.id === '1'));

  const handleScheduleMeeting = (meetingDetails: any) => {
    console.log('Scheduling meeting:', meetingDetails);
    setIsSchedulerOpen(false);
    
    const meetingTime = new Date(meetingDetails.date);
    meetingTime.setHours(parseInt(meetingDetails.time.split(':')[0]));
    meetingTime.setMinutes(parseInt(meetingDetails.time.split(':')[1]));
    
    const confirmationMessage = `Video meeting scheduled for ${meetingTime.toLocaleString()}`;
    setNewMessage(confirmationMessage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Handle message submission
      setNewMessage('');
    }
  };

  if (conversation.length === 0) {
    return <div>Conversation not found</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link 
            href="/inbox"
            className="mb-4 inline-flex items-center gap-2 text-neutral-600 hover:text-[#A13163]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Inbox
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">3D Character Animation Project Discussion</h1>
            <Button
              onClick={() => setIsSchedulerOpen(true)}
              className="bg-[#4B269F] hover:bg-[#4B269F]/90"
            >
              <Video className="h-4 w-4 mr-2" />
              Schedule Meeting
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-6 space-y-6">
            {conversation.map((message) => (
              <div key={message.id} className="flex gap-4">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Image
                    src={message.sender.avatar}
                    alt={message.sender.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-medium">{message.sender.name}</span>
                    <span className="text-sm text-neutral-500">
                      {new Date(message.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-neutral-600">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSubmit} className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full rounded-lg border border-neutral-200 pl-4 pr-10 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <Paperclip className="h-4 w-4" />
              </button>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[#4B269F] px-4 py-2 text-white hover:bg-[#4B269F]/90"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Video Meeting Modal */}
        <VideoMeetingModal
          isOpen={isSchedulerOpen}
          onClose={() => setIsSchedulerOpen(false)}
          onSchedule={handleScheduleMeeting}
        />
      </div>
    </div>
  );
}