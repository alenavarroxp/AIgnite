import { useAtom } from "jotai";
import { useState } from "react";
import { TechCategory, techData } from "../../../public/tech";
import { Tech } from "../../types/Tech";
import { tecnologiesAtom } from "../../utils/atoms/technologiesAtom";

import { experienceAtom } from "../../utils/atoms/experienceAtom";
import { projectIdeasAtom } from "../../utils/atoms/projectIdeaAtom";
import { generateIdeas } from "../../utils/generateIdeas";
import CustomButton from "../CustomButton";
import ExperienceDeveloper from "../experience/ExperienceDeveloper";
import TechCategories from "./TechCategories";
import TechList from "./TechList";

export default function TechContainer() {
  const [categorySelected, setCategorySelected] =
    useState<TechCategory>("Frontend");
  const [tecnologySelected, setTecnologySelected] = useAtom(tecnologiesAtom);
  const [experiences] = useAtom(experienceAtom);
  const [, setProjectIdeas] = useAtom(projectIdeasAtom);

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
    generateIdeas(tecnologySelected, experiences, setProjectIdeas);
    const section = document.getElementById("result");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col items-center w-1/2 h-full ">
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
      <div className="flex flex-col items-end justify-end w-1/2 h-full ">
        <div className="p-4">
          <CustomButton
            title="Generate Ideas"
            onClick={() => handleGenerateIdeas()}
          />
        </div>
      </div>
    </div>
  );
}
