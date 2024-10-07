import { TechCategory } from "../../../public/tech";

interface TechCategoriesProps {
  categories: TechCategory[];
  categorySelected: string;
  setCategorySelected: React.Dispatch<
    React.SetStateAction<
      "Frontend" | "Frameworks" | "Backend" | "Librerias" | "DevOps" | "Mobile"
    >
  >;
}

export default function TechCategories({
  categories,
  categorySelected,
  setCategorySelected,
}: TechCategoriesProps) {
  return (
    <div className="flex flex-col p-2  h-fit">
      {categories.map((category) => (
        <button
          onClick={() => setCategorySelected(category)}
          key={category}
          className={`text-white text-lg mb-2 px-8 py-2 w-32 flex justify-center items-center rounded-lg transition-colors duration-300 ${
            categorySelected === category
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
              : "hover:bg-indigo-500 hover:bg-opacity-45"
          } cursor-pointer`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
