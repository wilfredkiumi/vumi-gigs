import MeetingRoom from './MeetingRoom';

// Mock meeting IDs for static generation
const meetingIds = ['1', '2', '3'];

export function generateStaticParams() {
  return meetingIds.map((id) => ({
    id: id,
  }));
}

export default function MeetingPage({ params }: { params: { id: string } }) {
  return <MeetingRoom params={params} />;
}