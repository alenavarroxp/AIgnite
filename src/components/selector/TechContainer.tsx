import { useState } from "react";
import { TechCategory, techData } from "../../../public/tech";
import { Tech } from "../../types/Tech";
import TechCategories from "./TechCategories";
import TechList from "./TechList";

export default function TechContainer() {
  const [categorySelected, setCategorySelected] =
    useState<TechCategory>("Frontend");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const toggleTechnology = (tech: Tech) => {
    console.log(tech);
  };

  return (
    <div className="flex flex-col items-center h-full w-1/2 ">
      <h1 className="text-center text-xl font-medium text-white mt-6 w-full p-2 mb-2 ">
        Tecnologies Selector
      </h1>
      <div className="flex w-full h-full">
        <TechCategories
          categories={Object.keys(techData) as TechCategory[]}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <div className=" w-full rounded-lg h-1/2 border border-[#4b4580] p-2">
          <TechList techs={[...techData[categorySelected]]} />
        </div>
      </div>
    </div>
  );
}
