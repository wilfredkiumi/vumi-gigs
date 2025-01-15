"use client";

import { useState } from 'react';
import { ArrowLeft, Send, Paperclip, Video, VideoIcon, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import VideoMeetingModal from '@/app/components/VideoMeetingModal';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  type?: 'meeting' | 'text';
  meetingDetails?: {
    date: string;
    time: string;
    link: string;
  };
  sender: {
    name: string;
    avatar: string;
    role: 'client' | 'creator';
  };
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
};

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
  },
  {
    id: '3',
    content: "Great portfolio! Let's discuss the project details.",
    timestamp: '2024-03-20T12:00:00',
    type: 'meeting',
    meetingDetails: {
      date: '2024-03-25',
      time: '14:00',
      link: 'https://videomeeting.com/sample-meeting'
    },
    sender: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: 'creator'
    }
  }
];

export default function ConversationPage({ params }: { params: { id: string } }) {
  const [newMessage, setNewMessage] = useState('');
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [conversation, setConversation] = useState<Message[]>(
    messages.filter(msg => msg.id === params.id || 
      (msg.id === '2' && params.id === '1'))
  );

  const handleScheduleMeeting = (meetingDetails: any) => {
    const meetingTime = new Date(meetingDetails.date);
    meetingTime.setHours(parseInt(meetingDetails.time.split(':')[0]));
    meetingTime.setMinutes(parseInt(meetingDetails.time.split(':')[1]));
    
    const meetingLink = `https://videomeeting.com/${Math.random().toString(36).substring(7)}`;

    const newMeetingMessage: Message = {
      id: `${conversation.length + 1}`,
      content: `Video meeting scheduled for ${formatDate(meetingTime.toISOString())}`,
      timestamp: new Date().toISOString(),
      type: 'meeting',
      meetingDetails: {
        date: meetingDetails.date,
        time: meetingDetails.time,
        link: meetingLink
      },
      sender: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        role: 'creator'
      }
    };

    setConversation(prev => [...prev, newMeetingMessage]);
    setIsSchedulerOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newTextMessage: Message = {
        id: `${conversation.length + 1}`,
        content: newMessage,
        timestamp: new Date().toISOString(),
        sender: {
          name: 'Alex Thompson',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
          role: 'client'
        }
      };
      setConversation(prev => [...prev, newTextMessage]);
      setNewMessage('');
    }
  };

  const generateCalendarLink = (meetingDetails: any) => {
    const { date, time } = meetingDetails;
    const startTime = new Date(`${date}T${time}:00`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); 

    const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Project%20Discussion&dates=${
      startTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'}/${
      endTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }&details=Video%20meeting%20for%20project%20discussion`;

    return googleCalendarLink;
  };

  const handleJoinMeeting = (meetingLink: string) => {
    window.open(meetingLink, '_blank');
  };

  const handleAddToCalendar = (meetingDetails: any) => {
    window.open(generateCalendarLink(meetingDetails), '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 py-8">
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
            <div className="flex gap-2">
              <Button
                onClick={() => setIsSchedulerOpen(true)}
                className="bg-[#4B269F] hover:bg-[#4B269F]/90"
              >
                <Video className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>

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
                      {formatDate(message.timestamp)}
                    </span>
                  </div>
                  {message.type === 'meeting' && message.meetingDetails ? (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg space-y-2">
                      <p className="text-green-700">{message.content}</p>
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleJoinMeeting(message.meetingDetails!.link)}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <VideoIcon className="h-4 w-4 mr-2" />
                          Join Meeting
                        </Button>
                        <Button 
                          onClick={() => handleAddToCalendar(message.meetingDetails)}
                          size="sm"
                          variant="outline"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Add to Calendar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-neutral-600">{message.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

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

        <VideoMeetingModal
          isOpen={isSchedulerOpen}
          onClose={() => setIsSchedulerOpen(false)}
          onSchedule={handleScheduleMeeting}
        />
      </div>
    </div>
  );
}