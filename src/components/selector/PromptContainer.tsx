import { useAtom } from "jotai";
import { useState } from "react";
import { Tech, TechCategory, techData } from "../../types/Tech";
import { tecnologiesAtom } from "../../utils/atoms/technologiesAtom";

import { experienceAtom } from "../../utils/atoms/experienceAtom";
import { projectIdeasAtom } from "../../utils/atoms/projectIdeaAtom";
import { promptAtom } from "../../utils/atoms/promptAtom";
import { generateIdeas } from "../../utils/generateIdeas";
import CustomButton from "../CustomButton";
import ExperienceDeveloper from "../experience/ExperienceDeveloper";
import TechCategories from "./TechCategories";
import TechList from "./TechList";

export default function PromptContainer() {
  const [categorySelected, setCategorySelected] =
    useState<TechCategory>("Frontend");
  const [tecnologySelected, setTecnologySelected] = useAtom(tecnologiesAtom);
  const [experiences] = useAtom(experienceAtom);
  const [, setProjectIdeas] = useAtom(projectIdeasAtom);
  const [prompt, setPrompt] = useAtom(promptAtom);

  const toggleTechnology = (tech: Tech) => {
    if (tecnologySelected.includes(tech.name)) {
      setTecnologySelected(
        tecnologySelected.filter((selectedTech) => selectedTech !== tech.name)
      );
    } else {
      setTecnologySelected([...tecnologySelected, tech.name]);
    }
  };

  const deleteTechnology = (tech: string) => {
    setTecnologySelected(
      tecnologySelected.filter((selectedTech) => selectedTech !== tech)
    );
  };

  const handleGenerateIdeas = () => {
    setProjectIdeas([]);
    generateIdeas(tecnologySelected, experiences, setProjectIdeas, prompt);
    const section = document.getElementById("result");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col items-center w-1/2 h-full ml-4">
        <div className="flex-col justify-center items-center p-4">
          <h1 className="text-3xl font-medium text-white text-center">
            Technologies Selector
          </h1>
          <h2 className="text-lg font-thin text-center text-white">
            Select the technologies you want to work with in your project
          </h2>
        </div>

        <div className="flex w-full h-1/2">
          <TechCategories
            categories={Object.keys(techData) as TechCategory[]}
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
          <div className="w-full h-full border border-[#4b4580] p-2 overflow-y-auto flex-grow rounded-lg">
            <TechList
              techs={[...techData[categorySelected]]}
              selectedTechnologies={tecnologySelected}
              toggleTechnology={toggleTechnology}
            />
          </div>
        </div>
        <div className="w-full mt-3 text-white px-4">
          <p className="font-medium text-xl mb-2">Technologies Selected:</p>
          <div className="flex flex-wrap gap-2 h-24 overflow-y-auto">
            {tecnologySelected.map((tech, index) => (
              <div
                onClick={() => deleteTechnology(tech)}
                key={index}
                className="p-2 bg-gradient-to-r h-fit from-blue-500 to-indigo-500 shadow-lg rounded-lg cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center p-4  w-full">
          <ExperienceDeveloper />
        </div>
      </div>
      <div className="relative flex flex-col items-start justify-start w-1/2 h-full p-4">
        <div className="flex-col justify-center items-center w-full mb-4">
          <h1 className="text-3xl font-medium text-white text-center">
            Custom prompt
          </h1>
          <h2 className="text-lg font-thin text-center text-white">
            Write a custom prompt to generate your project ideas
          </h2>
        </div>
        <textarea
          className="bg-transparent w-full h-60 p-4 text-white font-thin border border-[#4b4580] rounded-lg placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          placeholder="Please enter your custom prompt in the format: 'Technologies: JavaScript, React; Experience: Junior Developer'. E.g., 'Generate project ideas for a web app using React and Node.js for a Senior Developer.'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="absolute bottom-4 right-4">
          <CustomButton title="Generate Ideas" onClick={handleGenerateIdeas} />
        </div>
      </div>
    </div>
  );
}
