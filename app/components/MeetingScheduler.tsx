"use client";

import { useState } from 'react';
import { Calendar, Clock, Video, Users } from 'lucide-react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

interface MeetingSchedulerProps {
  onSchedule: (meetingDetails: {
    date: Date;
    time: string;
    duration: string;
    participants: string[];
  }) => void;
}

export default function MeetingScheduler({ onSchedule }: MeetingSchedulerProps) {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('30');

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const durations = [
    { value: '15', label: '15 minutes' },
    { value: '30', label: '30 minutes' },
    { value: '45', label: '45 minutes' },
    { value: '60', label: '1 hour' }
  ];

  const handleSchedule = () => {
    if (date && time) {
      onSchedule({
        date,
        time,
        duration,
        participants: [] // Add participant management if needed
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-[#4B269F]">
        <Video className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Schedule Video Meeting</h2>
      </div>

      <div className="space-y-4">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            <Calendar className="h-4 w-4 inline mr-2" />
            Select Date
          </label>
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            disabled={(date) => date < new Date()}
          />
        </div>

        {/* Time Selection */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            <Clock className="h-4 w-4 inline mr-2" />
            Select Time
          </label>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setTime(slot)}
                className={`rounded-md px-3 py-2 text-sm ${
                  time === slot
                    ? 'bg-[#4B269F] text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Duration Selection */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            <Users className="h-4 w-4 inline mr-2" />
            Meeting Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
          >
            {durations.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button
        onClick={handleSchedule}
        disabled={!date || !time}
        className="w-full bg-[#4B269F] hover:bg-[#4B269F]/90"
      >
        Schedule Meeting
      </Button>
    </div>
  );
}