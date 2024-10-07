import { Tech } from "../../types/Tech";

interface TechCardProps {
  tech: Tech;
  isSelected: boolean;
  toggleTechnology: (tech: Tech) => void;
}

export default function TechCard({
  tech,
  isSelected,
  toggleTechnology,
}: TechCardProps) {
  return (
    <div
      onClick={() => toggleTechnology(tech)}
      className={`relative flex flex-col items-center justify-center p-4 transition-transform transform cursor-pointer min-w-[90px] min-h-[120px] rounded-lg shadow-md ${
        isSelected
          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white scale-105 shadow-lg"
          : "bg-indigo-500 bg-opacity-30 text-gray-400 hover:scale-105 scale-95 hover:shadow-xl"
      }`}
    >
      <p className="z-10 text-4xl mb-2">{tech.icon}</p>
      <p className="z-10 text-lg font-thin text-center">{tech.name}</p>
      {isSelected && (
        <span className="absolute w-full h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-35 blur-md rounded-full"></span>
      )}
    </div>
  );
}
