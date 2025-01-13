import ConversationPage from './ConversationPage';

// Mock messages for static generation
const messages = [
  {
    id: '1',
    content: "Hi, I'm interested in working on your 3D character animation project.",
    timestamp: '2024-03-20T10:30:00',
    sender: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: 'creator'
    }
  },
  {
    id: '2',
    content: "Thanks for reaching out! I'd love to hear more about your experience.",
    timestamp: '2024-03-20T11:15:00',
    sender: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'client'
    }
  }
];

export function generateStaticParams() {
  return messages.map((message) => ({
    id: message.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <ConversationPage params={params} />;
}