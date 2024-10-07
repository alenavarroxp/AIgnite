import { useAtom } from "jotai";
import { useEffect } from "react";
import { projectIdeasAtom } from "../../utils/atoms/projectIdeaAtom";

export default function ThirdPage() {
  const [projectIdeas] = useAtom(projectIdeasAtom);

  useEffect(() => {
    console.log(projectIdeas);
  }, [projectIdeas]);

  return <div id="result">ThridPage</div>;
}
