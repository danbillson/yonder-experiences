"use client";

import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Suspense } from "react";
import { CategorySelect } from "@/components/category-select";
import { ExperienceCard } from "@/components/experience-card";
import { ExperienceChart } from "@/components/experience-chart";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useExperiences } from "@/hooks/use-experiences";

export default function HomePage() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}

function Home() {
  const [first, second, third, ...rest] = useExperiences();

  return (
    <div>
      <div className="mx-auto max-w-4xl p-8">
        <div className="mb-6 text-center">
          <h1 className="mb-1 font-bold text-6xl tracking-tighter">
            Yonder <span className="italic">E</span>xperiences
          </h1>
          <p className="text-lg">Find the best value for your Yonder points</p>
        </div>
        <Alert className="mb-6">
          <AlertDescription>
            Yonder points are earned at 5 points for every £1 spent with the
            full credit card and can be redeemed for a maximum of 2.5p per point
            or £25 per 1000 points
          </AlertDescription>
        </Alert>
        <div className="mb-10 grid place-items-center">
          <CategorySelect />
        </div>
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ExperienceCard experience={first} />
          <ExperienceCard experience={second} />
          <ExperienceCard experience={third} />
        </div>
        <ExperienceChart experiences={rest} />
        <p className="mt-10 text-muted-foreground text-sm">
          This tool is not affiliated with Yonder. All information is provided
          for informational purposes only.
        </p>
      </div>
      <div className="mt-2 w-full bg-slate-100">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-2 p-8">
          <p className="text-sm">
            Made by{" "}
            <a
              className="font-bold underline"
              href="https://danbillson.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dan Billson
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/danbillson/yonder-experiences"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub className="size-5" />
            </a>
            <a
              href="https://x.com/dbillson"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiX className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
