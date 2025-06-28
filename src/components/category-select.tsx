"use client";

import { useQueryState } from "nuqs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CategorySelect() {
  const [category, setCategory] = useQueryState("category");

  return (
    <div className="flex gap-2">
      <Button
        className={cn(category !== null && "bg-transparent")}
        onClick={() => setCategory(null)}
        variant="all"
      >
        All
      </Button>
      <Button
        className={cn(category !== "shopping" && "bg-transparent")}
        onClick={() => setCategory("shopping")}
        variant="shopping"
      >
        Shopping
      </Button>
      <Button
        className={cn(category !== "dining" && "bg-transparent")}
        onClick={() => setCategory("dining")}
        variant="dining"
      >
        Dining
      </Button>
      <Button
        className={cn(category !== "other" && "bg-transparent")}
        onClick={() => setCategory("other")}
        variant="other"
      >
        Other
      </Button>
    </div>
  );
}
