import { Tech } from "../../types/Tech";
import TechCard from "./TechCard";

interface TechListProps {
  techs: Tech[];
  selectedTechnologies: string[];
  toggleTechnology: (tech: Tech) => void;
}

export default function TechList({
  techs,
  selectedTechnologies,
  toggleTechnology,
}: TechListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 h-fit w-full">
      {techs.map((tech) => {
        return (
          <TechCard
            key={tech.name}
            tech={tech}
            isSelected={selectedTechnologies.includes(tech.name)}
            toggleTechnology={toggleTechnology}
          />
        );
      })}
    </div>
  );
}
