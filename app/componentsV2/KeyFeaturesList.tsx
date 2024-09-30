"use client";
import React, { useRef, useEffect } from "react";
import KeyFeaturesCard from "./KeyFeaturesCard";

export default function KeyFeaturesList() {
  const keyFeaturesCards = [
    {
      title: "AI-Powered Email Outreach",
      text: "Imagine sending thousands of personalized emails every day, tailored to each lead's behavior, interests, and business needs—all without lifting a finger.",
    },
    {
      title: "AI Chatbots for Instant Engagement",
      text: "Chatbots that are always awake. Our AI chatbots engage with leads on your website or social media, answering their questions, guiding them through product demos, and capturing vital information to fuel your sales pipeline. ",
    },
    {
      title: "AI Voice Agents",
      text: "More than just text-based outreach. With AI voice agents, you can offer real-time, conversational experiences that feel personal. These agents handle tasks like customer follow-ups, demo scheduling, or gathering lead data, all through natural voice interactions.",
    },
    {
      title: "AI Social Media Outreach",
      text: "Don’t just engage—create relationships. Automate your interactions on social media platforms like LinkedIn, WhatsApp, Telegram, Instagram, and X.",
    },
    {
      title: "E-Commerce Integration",
      text: "Bring your customers closer to purchase. Now integrated with e-commerce platforms like Shopify and WooCommerce, FutureLeads personalizes product recommendations based on each customer’s shopping behavior.",
    },
    {
      title: "More Features",
      text: "Dive into our features and see how they can transform your outreach—effortlessly. Click below to explore more and take your engagement to the next level!",
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  //   const listeners = useRef<((e: PointerEvent) => void)[]>([]);

  function applyOverlayMask(e: PointerEvent, index: number) {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.setProperty("--opacity", "1");
  }

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          applyOverlayMask(e, index);
        }
      });
    };

    document.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="grid 2xl:mt-10 2xl:grid-cols-3 2xl:grid-rows-2 2xl:gap-5">
      {keyFeaturesCards.map((card, index) => (
        <div
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          key={index}
          className="relative overflow-hidden"
        >
          <KeyFeaturesCard title={card.title} text={card.text} />
        </div>
      ))}
    </div>
  );
}
