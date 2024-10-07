import { useState } from "react";
import Experience from "./Experience";

export default function ExperienceDeveloper() {
  const [experience, setExperience] = useState<string[]>([]);

  const experiences = [
    "Junior Developer",
    "Mid-Level Developer",
    "Senior Developer",
    "Tech Lead",
    "CTO",
  ];

  const handleExperience = (exp: string) => {
    if (experience.includes(exp)) {
      setExperience(experience.filter((selectedExp) => selectedExp !== exp));
    } else {
      setExperience([...experience, exp]);
    }
  };
  return (
    <div className="w-full mt-2">
      <div className="flex justify-start items-center gap-1">
        <p className="text-white font-medium text-2xl">Experience</p>
      </div>
      <div className="flex justify-start items-center gap-3 mt-2">
        {experiences.map((exp) => (
          <Experience
            exp={exp}
            experiences={experience}
            handleExperience={handleExperience}
          />
        ))}
      </div>
    </div>
  );
}
