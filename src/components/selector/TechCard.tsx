import { Tech } from "../../types/Tech";

interface TechCardProps {
  tech: Tech;
}

export default function TechCard({ tech }: TechCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-indigo-500 bg-opacity-30 border border-indigo-400 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl min-w-[90px] min-h-[120px]  cursor-pointer">
      <p className="text-2xl mb-2">{tech.icon}</p>
      <p className="text-lg font-semibold text-center text-indigo-300">{tech.name}</p>
    </div>
  );
}
