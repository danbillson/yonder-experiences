"use client";

import { useState } from "react";
import type { Experience } from "@/lib/experiences";
import { calculateValue, cn } from "@/lib/utils";
import { Button } from "./ui/button";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [index, setIndex] = useState(1);

  return (
    <div className="flex flex-col rounded-lg border p-4">
      {experience.link ? (
        <a href={experience.link} rel="noopener noreferrer" target="_blank">
          <h3 className="font-bold text-lg underline">{experience.name}</h3>
        </a>
      ) : (
        <h3 className="font-bold text-lg">{experience.name}</h3>
      )}
      <p className="mb-2 text-muted-foreground text-sm">
        {experience.description}
      </p>
      <div className="mt-auto grid gap-2 text-xs">
        <div className="rounded-sm bg-slate-50 p-2">
          <p className="mb-1 font-bold uppercase tracking-widest">Earn</p>
          <p>25 points per £1</p>
        </div>
        <div className="rounded-sm bg-slate-50 p-2">
          <p className="mb-1 font-bold uppercase tracking-widest">Redeem</p>
          <p className="text-right text-lg">
            {experience.redeemValues[index].points}{" "}
            <span className="text-xs">points</span>
          </p>
          <div className="mt-1 grid h-auto grid-cols-3 gap-1">
            {experience.redeemValues.map(({ points, value }, i) => (
              <Button
                className={cn(
                  "rounded-full border-2 border-white p-0.5 text-xs hover:bg-amber-800 hover:text-white",
                  index === i && "bg-amber-700 text-white"
                )}
                key={`${experience.name}-${points}`}
                onClick={() => setIndex(i)}
                variant="secondary"
              >
                £{value}
              </Button>
            ))}
          </div>
        </div>
        <div className="rounded-sm bg-slate-50 p-2">
          <p className="mb-1 font-bold uppercase tracking-widest">Value</p>
          <p>£{calculateValue(experience).toFixed(2)} per 1000 points</p>
        </div>
      </div>
    </div>
  );
}
