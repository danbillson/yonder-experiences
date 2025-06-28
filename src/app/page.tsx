import { CategorySelect } from "@/components/category-select";
import { ExperienceTable } from "@/components/experience-table";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="mb-10 text-center">
        <h1 className="mb-1 font-bold text-6xl tracking-tighter">
          Yonder <span className="italic">E</span>xperiences
        </h1>
        <p className="text-lg">Find the best value for your Yonder points</p>
      </div>
      <div className="mb-10 grid place-items-center">
        <CategorySelect />
      </div>
      <ExperienceTable />
    </div>
  );
}
