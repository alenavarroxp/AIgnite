import { useAtom } from "jotai";
import { projectIdeasAtom } from "../../utils/atoms/projectIdeaAtom";
import ProjectIdea from "../project/ProjectIdea";
import Skeleton from "../Skeleton";

export default function ThirdPage() {
  const [projectIdeas] = useAtom(projectIdeasAtom);

  return (
    <div id="result" className="z-10 w-full h-full p-4 text-white">
      <p className="font-semibold text-3xl">Project Ideas Generated</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {projectIdeas.length === 0
          ? Array.from({ length: 9 }).map((_, index) => (
              <Skeleton key={index} />
            )) // Número de skeletons a mostrar
          : projectIdeas.map((idea, index) => (
              <ProjectIdea key={index} idea={idea} />
            ))}
      </div>
    </div>
  );
}
