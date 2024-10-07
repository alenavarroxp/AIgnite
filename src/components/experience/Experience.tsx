interface ExperienceProps {
  exp: string;
  experiences: string[];
  handleExperience: (exp: string) => void;
}

export default function Experience({
  exp,
  experiences,
  handleExperience,
}: ExperienceProps) {
  const isSelected = experiences.includes(exp);
  return (
    <div
      onClick={() => handleExperience(exp)}
      className={`p-4 bg-indigo-500 bg-opacity-30 transition-transform transform rounded-lg cursor-pointer ${
        isSelected
          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white scale-105 shadow-lg"
          : "bg-indigo-500 bg-opacity-30 text-gray-400 hover:scale-105 scale-95 hover:shadow-xl"
      }`}
    >
      {exp}
    </div>
  );
}
