"use client";

import { CategorySelect } from "@/components/category-select";
import { ExperienceCard } from "@/components/experience-card";
import { ExperienceTable } from "@/components/experience-table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useExperiences } from "@/hooks/use-experiences";

export default function Home() {
  const [first, second, third, ...rest] = useExperiences();

  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="mb-6 text-center">
        <h1 className="mb-1 font-bold text-6xl tracking-tighter">
          Yonder <span className="italic">E</span>xperiences
        </h1>
        <p className="text-lg">Find the best value for your Yonder points</p>
      </div>
      <Alert className="mb-6">
        <AlertDescription>
          Yonder points are earned at 5 points for every £1 spent with the full
          credit card and can be redeemed for a maximum of 2.5p per point or £25
          per 1000 points
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
      <ExperienceTable experiences={rest} />
      <p className="mt-10 text-muted-foreground text-sm">
        This tool is not affiliated with Yonder. All information is provided for
        informational purposes only.
      </p>
    </div>
  );
}
