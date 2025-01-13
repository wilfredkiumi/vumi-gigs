"use client";

import { useEffect, useState, useRef } from 'react';
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  Grid, 
  Settings,
  Users,
  MessageSquare,
  Monitor,
  StopCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Participant {
  id: string;
  name: string;
  videoEnabled: boolean;
  audioEnabled: boolean;
  isScreenSharing: boolean;
}

export default function MeetingRoom({ params }: { params: { id: string } }) {
  const [participants, setParticipants] = useState<Participant[]>([
    {
      id: '1',
      name: 'You',
      videoEnabled: true,
      audioEnabled: true,
      isScreenSharing: false
    },
    {
      id: '2',
      name: 'Sarah Chen',
      videoEnabled: true,
      audioEnabled: true,
      isScreenSharing: false
    }
  ]);
  const [isGridView, setIsGridView] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const screenShareRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    setParticipants(prev => prev.map(p => 
      p.id === '1' ? { ...p, videoEnabled: !p.videoEnabled } : p
    ));
  };

  const toggleAudio = () => {
    setParticipants(prev => prev.map(p => 
      p.id === '1' ? { ...p, audioEnabled: !p.audioEnabled } : p
    ));
  };

  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ 
        video: true,
        audio: true
      });
      if (screenShareRef.current) {
        screenShareRef.current.srcObject = stream;
      }
      setIsScreenSharing(true);
      setParticipants(prev => prev.map(p => 
        p.id === '1' ? { ...p, isScreenSharing: true } : p
      ));

      // Handle stream end
      stream.getVideoTracks()[0].onended = () => {
        stopScreenShare();
      };
    } catch (err) {
      console.error('Error sharing screen:', err);
    }
  };

  const stopScreenShare = () => {
    if (screenShareRef.current?.srcObject) {
      (screenShareRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach(track => track.stop());
      screenShareRef.current.srcObject = null;
    }
    setIsScreenSharing(false);
    setParticipants(prev => prev.map(p => 
      p.id === '1' ? { ...p, isScreenSharing: false } : p
    ));
  };

  useEffect(() => {
    // Initialize user's video
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => console.error('Error accessing media devices:', err));

    return () => {
      // Cleanup: stop all tracks when component unmounts
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream)
          .getTracks()
          .forEach(track => track.stop());
      }
      if (screenShareRef.current?.srcObject) {
        (screenShareRef.current.srcObject as MediaStream)
          .getTracks()
          .forEach(track => track.stop());
      }
    };
  }, []);

  const currentUser = participants.find(p => p.id === '1');

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Meeting Grid */}
      <div className="relative h-screen p-4">
        <div className={`grid gap-4 h-full ${isGridView ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {/* Screen Share */}
          {isScreenSharing && (
            <div className="col-span-full">
              <video
                ref={screenShareRef}
                autoPlay
                playsInline
                className="h-full w-full rounded-lg bg-neutral-800 object-contain"
              />
            </div>
          )}

          {/* Participant Videos */}
          {participants.map((participant) => (
            <div 
              key={participant.id}
              className={`relative rounded-lg bg-neutral-800 ${
                !isGridView && participant.id !== '1' ? 'hidden' : ''
              }`}
            >
              {participant.id === '1' ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="h-full w-full rounded-lg object-cover"
                />
              ) : (
                <div className="h-full w-full rounded-lg bg-neutral-800" />
              )}
              
              <div className="absolute bottom-4 left-4 text-white">
                {participant.name}
                {!participant.audioEnabled && (
                  <MicOff className="ml-2 inline h-4 w-4 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Meeting Controls */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full bg-neutral-800 px-6 py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleAudio}
            className={`rounded-full ${!currentUser?.audioEnabled ? 'bg-red-500 text-white hover:bg-red-600' : 'text-white hover:bg-neutral-700'}`}
          >
            {currentUser?.audioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleVideo}
            className={`rounded-full ${!currentUser?.videoEnabled ? 'bg-red-500 text-white hover:bg-red-600' : 'text-white hover:bg-neutral-700'}`}
          >
            {currentUser?.videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsGridView(!isGridView)}
            className="rounded-full text-white hover:bg-neutral-700"
          >
            <Grid className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={isScreenSharing ? stopScreenShare : startScreenShare}
            className={`rounded-full ${isScreenSharing ? 'bg-green-500 text-white hover:bg-green-600' : 'text-white hover:bg-neutral-700'}`}
          >
            {isScreenSharing ? <StopCircle className="h-5 w-5" /> : <Monitor className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowParticipants(!showParticipants)}
            className="rounded-full text-white hover:bg-neutral-700"
          >
            <Users className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowChat(!showChat)}
            className="rounded-full text-white hover:bg-neutral-700"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-neutral-700"
          >
            <Settings className="h-5 w-5" />
          </Button>

          <Button
            variant="default"
            className="rounded-full bg-red-500 hover:bg-red-600"
          >
            Leave
          </Button>
        </div>
      </div>
    </div>
  );
}