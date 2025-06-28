"use client";

import { ArrowRightIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Experience, experiences } from "@/lib/experiences";

function calculateValue(exp: Experience) {
  const [value] = exp.redeemValues;
  return (value.value / value.points) * 1000;
}

export function ExperienceTable() {
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

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Earn</TableHead>
          <TableHead>Redeem Values</TableHead>
          <TableHead>Value/1k pts</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredExperiences.map((exp) => (
          <TableRow key={exp.name}>
            <TableCell>
              {exp.link ? (
                <a
                  className="underline"
                  href={exp.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {exp.name}
                </a>
              ) : (
                exp.name
              )}
            </TableCell>
            <TableCell className="max-w-[200px] truncate">
              {exp.description}
            </TableCell>
            <TableCell>{exp.earnMultiplier}</TableCell>
            <TableCell>
              {exp.redeemValues.map((r) => (
                <div key={r.points}>
                  {r.points} <ArrowRightIcon className="inline-block size-3" />{" "}
                  £{r.value}
                </div>
              ))}
            </TableCell>
            <TableCell>£{calculateValue(exp).toFixed(2)}</TableCell>
            <TableCell>{exp.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
