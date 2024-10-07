import { useState } from "react";
import { TechCategory, techData } from "../../../public/tech";
import { Tech } from "../../types/Tech";
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
    <div className="flex flex-col items-center h-full w-1/2 ">
      <div className="flex-col justify-center items-center  p-4">
        <h1 className="text-3xl font-medium text-white text-center">
          Technologies Selector
        </h1>
        <h2 className="text-lg font-thin text-center text-white">
          Select the technologies you want to work with in your project
        </h2>
      </div>

      <div className="flex w-full h-full">
        <TechCategories
          categories={Object.keys(techData) as TechCategory[]}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <div className=" w-full rounded-lg h-1/2 border border-[#4b4580] p-2 overflow-y-auto">
          <TechList
            techs={[...techData[categorySelected]]}
            selectedTechnologies={selectedTechnologies}
            toggleTechnology={toggleTechnology}
          />
        </div>
      </div>
    </div>
  );
}
