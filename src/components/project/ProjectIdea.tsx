import { BiBriefcase } from "react-icons/bi";
import { ProjectIdea as ProjectIdeaType } from "../../utils/atoms/projectIdeaAtom";

interface ProjectIdeaProps {
  idea: ProjectIdeaType;
}

export default function ProjectIdea({ idea }: ProjectIdeaProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-100 scale-95">
      <h2 className="text-2xl font-bold text-white mb-3">{idea.title}</h2>
      <p className="text-gray-200 mb-4 text-justify">
        {idea.description}
      </p>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <BiBriefcase className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-semibold">{idea.exp}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {idea.technologies.map((tech: string) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-200 text-indigo-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
