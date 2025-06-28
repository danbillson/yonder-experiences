import { useQueryState } from "nuqs";
import { experiences } from "@/lib/experiences";
import { calculateValue } from "@/lib/utils";

export function useExperiences() {
  const [category] = useQueryState("category");

  const filteredExperiences = experiences
    .filter(
      (exp) =>
        category === null ||
        (category === "other" &&
          exp.category.toLocaleLowerCase() !== "dining" &&
          exp.category.toLocaleLowerCase() !== "shopping") ||
        exp.category.toLocaleLowerCase() === category.toLocaleLowerCase()
    )
    .sort((a, b) => calculateValue(b) - calculateValue(a));

  return filteredExperiences;
}
