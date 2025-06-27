import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { experiences } from "@/lib/experiences";

function getBestValuePerThousand(exp) {
  // Extract numeric value from e.g. '£15'
  const values = exp.redeemValues.map((r) => {
    const amount = Number.parseFloat(r.value.replace(/[^\d.]/g, ""));
    return (amount / r.points) * 1000;
  });
  const best = Math.max(...values);
  return best;
}

function formatValuePerThousand(value) {
  return `£${value.toFixed(2)}/1k pts`;
}

export default function Home() {
  // Sort experiences by best value per 1000 points (descending)
  const sortedExperiences = [...experiences].sort(
    (a, b) => getBestValuePerThousand(b) - getBestValuePerThousand(a)
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
                <a
                  className="underline"
                  href={exp.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {exp.name}
                </a>
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
              <TableCell>
                {formatValuePerThousand(getBestValuePerThousand(exp))}
              </TableCell>
              <TableCell>{exp.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
