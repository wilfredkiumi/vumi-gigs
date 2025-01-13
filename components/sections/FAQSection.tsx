"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Vumi Gigs work?",
    answer: "Vumi Gigs connects creative professionals with clients looking for talent. Creators can browse and apply to gigs, while clients can post opportunities and review applications. Our platform handles everything from project communication to secure payments."
  },
  {
    question: "What types of gigs can I find or post?",
    answer: "Our platform specializes in creative work including 3D animation, motion graphics, character design, storyboarding, VFX, and more. Whether you're looking for short-term projects or long-term collaborations, you can find or post opportunities that match your needs."
  },
  {
    question: "How much does it cost to use Vumi Gigs?",
    answer: "Creating an account and browsing gigs is completely free. We charge a small service fee only when a project is successfully completed. Clients pay the agreed project amount, and creators receive their earnings minus our platform fee."
  },
  {
    question: "How are payments handled?",
    answer: "We use a secure escrow system to protect both parties. When a project begins, the client's payment is held in escrow. Funds are released to the creator once the work is completed and approved, ensuring a safe transaction for everyone."
  },
  {
    question: "What if I have issues with a project?",
    answer: "Our support team is here to help! We provide dispute resolution services and can mediate any issues that arise during a project. Both parties are protected by our terms of service and project agreement guidelines."
  }
];

export default function FAQSection() {
  return (
    <div className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about using Vumi Gigs
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}