// app/studios/edit/page.tsx
"use client";
import { useState } from 'react';
import { studios } from '@/lib/studio';
import EditStudioProfilePage from '@/app/studios/components/StudioProProfile';

export default function EditStudioPage() {
  const [studio] = useState(studios[0]); // Or fetch specific studio
  return <EditStudioProfilePage initialStudio={studio} />;
}