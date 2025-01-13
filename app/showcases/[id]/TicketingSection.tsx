"use client";

import { useState } from 'react';
import { Ticket, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

const ticketTypes: TicketType[] = [
  {
    id: 'virtual',
    name: 'Virtual Pass',
    price: 299,
    description: 'Access to all virtual sessions and networking features',
    features: [
      'Live streaming of all sessions',
      'Virtual networking access',
      'Access to attendee directory',
      'Schedule virtual meetings',
      'On-demand content access'
    ]
  },
  {
    id: 'physical',
    name: 'Physical Pass',
    price: 599,
    description: 'Full access to physical event and all virtual features',
    features: [
      'Physical event access',
      'Virtual pass features included',
      'In-person networking events',
      'Exclusive workshops',
      'VIP lounge access'
    ]
  }
];

export default function TicketingSection() {
  const [selectedTicket, setSelectedTicket] = useState<string>('');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Get Your Pass</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {ticketTypes.map((ticket) => (
          <div
            key={ticket.id}
            className={`rounded-lg border p-6 transition-all ${
              selectedTicket === ticket.id
                ? 'border-[#A13163] bg-[#A13163]/5'
                : 'border-neutral-200 hover:border-[#A13163]'
            }`}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{ticket.name}</h3>
              <p className="text-2xl font-bold text-[#4B269F]">
                ${ticket.price}
              </p>
              <p className="mt-2 text-neutral-600">{ticket.description}</p>
            </div>

            <ul className="mb-6 space-y-2">
              {ticket.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Ticket className="h-4 w-4 text-[#4B269F]" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              onClick={() => setSelectedTicket(ticket.id)}
              className={`w-full ${
                selectedTicket === ticket.id
                  ? 'bg-[#4B269F] text-white hover:bg-[#4B269F]/90'
                  : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              {selectedTicket === ticket.id ? 'Selected' : 'Select Pass'}
            </Button>
          </div>
        ))}
      </div>

      <Button
        disabled={!selectedTicket}
        className="w-full bg-[#4B269F] text-white hover:bg-[#4B269F]/90"
      >
        Proceed to Checkout
      </Button>
    </div>
  );
}