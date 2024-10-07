
export default function SelectedTech({ selectedTechnologies }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg text-white">Selected Technologies</h2>
      <div className="flex flex-wrap gap-2">
        {selectedTechnologies.map((tech) => (
          <span key={tech} className="bg-blue-600 text-white px-3 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
