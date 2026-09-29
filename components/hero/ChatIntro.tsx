"use client";

import { stagger, useAnimate, type AnimationSequence, type Segment } from "motion/react";
import { useEffect } from "react";

type Props = { messages: string[]; typing: string; status: string };

// RTM's typing indicator: four signal bars.
export const BAR_HEIGHTS = [5, 10, 8, 13];
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Grouped bubbles from one sender get a tighter corner on the sender's side.
export function corners(index: number, count: number) {
  if (count === 1) return "";
  if (index === 0) return "rounded-bl-md";
  if (index === count - 1) return "rounded-tl-md";
  return "rounded-l-md";
}

export function ChatIntro({ messages, typing, status }: Props) {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    const root = document.documentElement;
    // The head script sets data-intro on a first visit when motion is allowed.
    // Otherwise everything is already visible and there is nothing to play.
    if (!("intro" in root.dataset)) return;

    let cancelled = false;
    const bars = animate(
      ".typing-bar",
      { scaleY: [0.35, 1, 0.35] },
      { duration: 0.7, ease: "easeInOut", repeat: Infinity, delay: stagger(0.1) },
    );

    const bubbleAt = (index: number) => 0.5 + index * 0.7;
    const lastBubble = bubbleAt(messages.length - 1);
    const sequence: AnimationSequence = [
      ...messages.map<Segment>((_, index) => [
        `.bubble-${index}`,
        { opacity: [0, 1], y: [8, 0], scale: [0.96, 1] },
        { duration: 0.4, ease: easeOut, at: bubbleAt(index) },
      ]),
      [".intro-typing", { opacity: 0 }, { duration: 0.2, at: lastBubble + 0.25 }],
      [".intro-status", { opacity: [0, 1] }, { duration: 0.3, at: lastBubble + 0.4 }],
      [".status-dot", { scale: [0.3, 1] }, { duration: 0.4, ease: easeOut, at: lastBubble + 0.4 }],
    ];

    const intro = animate(sequence);
    intro.then(() => {
      if (cancelled) return;
      bars.stop();
      delete root.dataset.intro;
      try {
        sessionStorage.setItem("intro-seen", "1");
      } catch {
        // Storage blocked: the intro plays again on the next visit.
      }
    });

    return () => {
      cancelled = true;
      intro.stop();
      bars.stop();
    };
  }, [animate, messages]);

  return (
    <div ref={scope} className="flex max-w-136 flex-col items-start gap-1.5">
      {messages.map((message, index) => (
        <p
          key={message}
          className={`intro-step bubble-${index} origin-bottom-left rounded-bubble bg-out px-4 py-3 text-[17px] leading-normal text-pretty text-out-fg ${corners(index, messages.length)}`}
        >
          {message}
        </p>
      ))}

      {/* Both lines share one grid cell, so swapping them never shifts the layout. */}
      <p className="mt-2 grid text-[15px]">
        <span
          aria-hidden="true"
          className="intro-typing col-start-1 row-start-1 flex items-start gap-2.5 text-accent-text"
        >
          <span className="mt-1 flex h-3.5 shrink-0 items-end gap-0.75">
            {BAR_HEIGHTS.map((height, index) => (
              <span
                key={index}
                className="typing-bar w-0.75 origin-bottom rounded-full bg-accent"
                style={{ height }}
              />
            ))}
          </span>
          {typing}
        </span>
        <span className="intro-status col-start-1 row-start-1 flex items-start gap-2.5 text-fg-2">
          <span className="status-dot mt-1.75 size-2.5 shrink-0 rounded-full bg-accent ring-4 ring-accent-soft" />
          {status}
        </span>
      </p>
    </div>
  );
}
