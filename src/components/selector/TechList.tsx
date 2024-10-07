import { Tech } from "../../types/Tech";
import TechCard from "./TechCard";

interface TechListProps {
  techs: Tech[];
}

export default function TechList({ techs }: TechListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 h-fit w-full">
      {techs.map((tech) => {
        return <TechCard key={tech.name} tech={tech} />;
      })}
    </div>
  );
}
