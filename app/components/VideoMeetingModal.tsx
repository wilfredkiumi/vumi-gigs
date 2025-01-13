"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Video, Users, Settings } from 'lucide-react';
import { useState } from 'react';

interface VideoMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSchedule: (meetingDetails: any) => void;
}

export default function VideoMeetingModal({ isOpen, onClose, onSchedule }: VideoMeetingModalProps) {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('30');
  const [participants, setParticipants] = useState<string[]>([]);

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
        participants
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] h-[90vh] max-h-[700px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#4B269F]">
            <Video className="h-5 w-5" />
            Schedule Video Meeting
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="schedule" className="flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1">
            <TabsContent value="schedule" className="p-4 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Select Date
                  </label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </div>

                <div className="space-y-6">
                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Select Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
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
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Duration
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
              </div>
            </TabsContent>

            <TabsContent value="settings" className="p-4 space-y-6">
              {/* Meeting Settings */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 mb-4">Meeting Preferences</h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-neutral-300 text-[#4B269F]"
                    />
                    <span className="text-sm">Enable waiting room</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-neutral-300 text-[#4B269F]"
                    />
                    <span className="text-sm">Mute participants upon entry</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-neutral-300 text-[#4B269F]"
                    />
                    <span className="text-sm">Record meeting automatically</span>
                  </label>
                </div>
              </div>

              {/* Additional Settings */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 mb-4">Additional Options</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Meeting Password</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Meeting Description</label>
                    <textarea
                      className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                      rows={3}
                      placeholder="Add meeting agenda or notes..."
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleSchedule}
            disabled={!date || !time}
            className="bg-[#4B269F] hover:bg-[#4B269F]/90"
          >
            Schedule Meeting
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}