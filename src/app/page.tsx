import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { experiences } from "@/lib/experiences";

function calculateValue(exp) {
  const [value] = exp.redeemValues;
  return (value.value / value.points) * 1000;
}

export default function Home() {
  // Sort experiences by best value per 1000 points (descending)
  const sortedExperiences = [...experiences].sort(
    (a, b) => calculateValue(b) - calculateValue(a)
  );

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-6 font-bold text-4xl">Yonder Experiences</h1>
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
          {sortedExperiences.map((exp) => (
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
                    {r.points} = {r.value}
                  </div>
                ))}
              </TableCell>
              <TableCell>£{calculateValue(exp).toFixed(2)}</TableCell>
              <TableCell>{exp.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
