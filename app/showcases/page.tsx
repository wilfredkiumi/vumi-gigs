
import { Search, ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

export default function Showcases() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Featured Showcase Hero */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-video rounded-lg bg-neutral-100"></div>
            <div className="flex flex-col justify-center">
              <span className="mb-2 text-sm font-medium text-[#A13163]">Featured Showcase</span>
              <h1 className="mb-4 text-3xl font-bold">Global Animation Festival</h1>
              <p className="mb-6 text-neutral-600">
                Join us for a week-long celebration of animation featuring workshops, screenings, and networking events.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-neutral-400" />
                  <span>August 15-22, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-neutral-400" />
                  <span>Virtual Event</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-neutral-400" />
                  <span>500+ Registered</span>
                </div>
              </div>
              <button className="w-fit rounded-lg bg-[#4B269F] px-6 py-3 text-white hover:bg-[#4B269F]/90">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search showcases..."
              className="w-full rounded-lg border border-neutral-200 px-10 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>
      </div>

      {/* Showcase List */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Upcoming Showcases</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
              <div className="aspect-video bg-neutral-100" />
              <div className="p-4">
                <h3 className="mb-2 font-medium">Creative Showcase {i}</h3>
                <div className="text-sm text-neutral-600">
                  <div className="mb-1">
                    <span>Sep 1, 2024</span>
                    <span className="mx-2">•</span>
                    <span>2:00 PM</span>
                  </div>
                  <div>
                    <span>Virtual</span>
                    <span className="mx-2">•</span>
                    <span>From $10.00</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}