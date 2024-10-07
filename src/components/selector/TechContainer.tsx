import { useState } from "react";
import { TechCategory, techData } from "../../../public/tech";
import { Tech } from "../../types/Tech";
import ExperienceDeveloper from "../experience/ExperienceDeveloper";
import TechCategories from "./TechCategories";
import TechList from "./TechList";

export default function TechContainer() {
  const [categorySelected, setCategorySelected] =
    useState<TechCategory>("Frontend");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  const toggleTechnology = (tech: Tech) => {
    if (selectedTechnologies.includes(tech.name)) {
      setSelectedTechnologies(
        selectedTechnologies.filter(
          (selectedTech) => selectedTech !== tech.name
        )
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, tech.name]);
    }
  };

  return (
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
            selectedTechnologies={selectedTechnologies}
            toggleTechnology={toggleTechnology}
          />
        </div>
      </div>
      <div className="w-full mt-3 text-white px-4">
        <p className="font-medium text-xl mb-2">Technologies Selected:</p>
        <div className="flex flex-wrap gap-2 h-24  overflow-y-auto">
          {selectedTechnologies.map((tech, index) => (
            <div
              key={index}
              className="p-2 bg-gradient-to-r h-fit from-blue-500 to-indigo-500 shadow-lg rounded-lg"
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
  );
}
