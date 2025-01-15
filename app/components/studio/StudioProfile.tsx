//app/components/studio/StudioProfile.tsx
"use client";

import { MapPin, Link2, Mail, Globe, Linkedin, Award, Clock, Users, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import type { Studio } from '@/lib/studio';

export default function StudioProfile({ studio }: { studio: Studio }) {
 const placeholderImage = "https://images.unsplash.com/photo-1553484771-047a44eee27f?q=80&w=2940&auto=format&fit=crop";

 return (
   <div className="min-h-screen bg-background">
     <div className="relative h-48 bg-gradient-to-r from-primary to-secondary">
       <div className="absolute -bottom-22 sm:-bottom-16 mx-auto w-full px-4 sm:px-6">
         <div className="mx-auto max-w-7xl">
           <div className="flex flex-col items-center md:flex-row md:items-end gap-6">
             <div className="relative h-32 w-32 overflow-hidden rounded-lg border-4 border-background mt-16 sm:mt-8 md:mt-0">
               <Image
                 src={placeholderImage}
                 alt={studio.name}
                 fill
                 className="object-cover"
               />
             </div>
             <div className="mb-0 flex-1 text-center md:text-left">
               <h1 className="text-3xl font-bold text-foreground dark:text-white">{studio.name}</h1>
               <p className="text-muted-foreground dark:text-white/90">{studio.type}</p>
             </div>
             <div className="mb-4 flex gap-2">
               <Button 
                 size="lg"
                 className="bg-background text-primary hover:bg-background/90 dark:bg-background dark:text-primary dark:hover:bg-background/90"
               >
                 Contact
               </Button>
               <Button 
                 variant="outline" 
                 size="lg"
                 className="border-background text-background hover:bg-background/10 dark:border-background dark:text-background"
               >
                 Share
               </Button>
             </div>
           </div>
         </div>
       </div>
     </div>

     <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-44 sm:pt-24">
       <div className="grid gap-8 lg:grid-cols-4">
         <div className="lg:col-span-1">
           <div className="space-y-6">
             <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
               <h2 className="mb-4 text-lg font-semibold text-foreground">About</h2>
               <p className="mb-4 text-muted-foreground">{studio.description}</p>
               <div className="space-y-3">
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <MapPin className="h-4 w-4" />
                   <span>{studio.location}</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Users className="h-4 w-4" />
                   <span>{studio.teamSize} Team Members</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Building className="h-4 w-4" />
                   <span>{studio.founded}</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Globe className="h-4 w-4" />
                   <Link href={studio.website} className="hover:text-primary">
                     {studio.website}
                   </Link>
                 </div>
               </div>
             </div>

             <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
               <h2 className="mb-4 text-lg font-semibold text-foreground">Contact</h2>
               <div className="space-y-3">
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Mail className="h-4 w-4" />
                   <span>{studio.contacts.email.general}</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <MapPin className="h-4 w-4" />
                   <span>{studio.contacts.address.city}, {studio.contacts.address.country}</span>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="lg:col-span-3">
           <Tabs defaultValue="about" className="space-y-6">
             <TabsList className="grid w-full grid-cols-4">
               <TabsTrigger value="about" className="text-foreground data-[state=active]:text-primary">About</TabsTrigger>
               <TabsTrigger value="projects" className="text-foreground data-[state=active]:text-primary">Projects</TabsTrigger>
               <TabsTrigger value="team" className="text-foreground data-[state=active]:text-primary">Team</TabsTrigger>
               <TabsTrigger value="contact" className="text-foreground data-[state=active]:text-primary">Contact</TabsTrigger>
             </TabsList>

             <TabsContent value="about">
               <div className="space-y-6">
                 <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                   <h2 className="mb-4 text-xl font-semibold text-foreground">Overview</h2>
                   <p className="text-muted-foreground">{studio.description}</p>
                 </div>

                 <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                   <h2 className="mb-4 text-xl font-semibold text-foreground">Specialties</h2>
                   <div className="flex flex-wrap gap-2">
                     {studio.specialties.map((specialty, index) => (
                       <span 
                         key={index}
                         className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
                       >
                         {specialty}
                       </span>
                     ))}
                   </div>
                 </div>

                 <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                   <h2 className="mb-4 text-xl font-semibold text-foreground">Clients</h2>
                   <div className="flex flex-wrap gap-2">
                     {studio.clients.map((client, index) => (
                       <span 
                         key={index}
                         className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
                       >
                         {client}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             </TabsContent>

             <TabsContent value="projects">
               <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                 <h2 className="mb-4 text-xl font-semibold text-foreground">Projects</h2>
                 {studio.projects.length > 0 ? (
                   <div className="grid gap-4">
                     {studio.projects.map((project) => (
                       <div key={project.id} className="rounded-lg border border-border p-4">
                         <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                           <Image 
                             src="https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=2940&auto=format&fit=crop"
                             alt={project.title}
                             fill
                             className="object-cover"
                           />
                         </div>
                         <h3 className="font-medium text-foreground">{project.title}</h3>
                         <p className="text-sm text-muted-foreground">{project.description}</p>
                       </div>
                     ))}
                   </div>
                 ) : (
                   <p className="text-muted-foreground">No projects available</p>
                 )}
               </div>
             </TabsContent>

             <TabsContent value="team">
               <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                 <h2 className="mb-4 text-xl font-semibold text-foreground">Team</h2>
                 {studio.representatives.map((rep, index) => (
                   <div key={index} className="mb-4 last:mb-0">
                     <div className="flex items-center gap-4 mb-2">
                       <div className="relative h-12 w-12 rounded-full overflow-hidden">
                         <Image
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
                           alt={rep.role}
                           fill
                           className="object-cover"
                         />
                       </div>
                       <div>
                         <h3 className="font-medium text-foreground">{rep.role}</h3>
                         <p className="text-sm text-muted-foreground">{rep.bio}</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </TabsContent>

             <TabsContent value="contact">
               <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                 <h2 className="mb-4 text-xl font-semibold text-foreground">Contact Information</h2>
                 <div className="space-y-4">
                   <div>
                     <h3 className="font-medium text-foreground">Email</h3>
                     <p className="text-muted-foreground">{studio.contacts.email.general}</p>
                   </div>
                   <div>
                     <h3 className="font-medium text-foreground">Address</h3>
                     <p className="text-muted-foreground">
                       {studio.contacts.address.street}<br />
                       {studio.contacts.address.city}, {studio.contacts.address.state}<br />
                       {studio.contacts.address.country} {studio.contacts.address.postal}
                     </p>
                   </div>
                   <div>
                     <h3 className="font-medium text-foreground">Business Hours</h3>
                     <p className="text-muted-foreground">
                       Monday - Friday: {studio.businessHours.schedule.monday}
                     </p>
                   </div>
                 </div>
               </div>
             </TabsContent>
           </Tabs>
         </div>
       </div>
     </div>
   </div>
 );
}