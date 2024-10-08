import { GoogleGenerativeAI } from "@google/generative-ai";
import { ProjectIdea } from "./atoms/projectIdeaAtom";

export async function generateIdeas(
  tech: string[],
  exps: string[],
  setProjectIdeas: (ideas: ProjectIdea[]) => void,
  prompt: string | undefined
) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Prompt que incluye el prompt del usuario
  const geminiPrompt = `
    You are an expert in generating creative and suitable project ideas for developers based on their experience level and preferred technologies.
    I will provide you with an array of technologies and a specific experience level (e.g., Junior, Senior, etc.).
    I need you to generate project ideas that are tailored to that experience level, ensuring the ideas are neither too simple nor too complex for the given experience.
    Each idea should include at least one or more of the provided technologies and should be feasible.

    Please return **6 project ideas** in the following JSON format:
    [
      {
        "title": "Project Title",
        "description": "A brief description of the project, ideally 2-3 sentences.",
        "exp": "Experience level (e.g., Junior Developer, Mid-Level Developer, Senior Developer, etc.)",
        "technologies": ["Array of relevant technologies from the provided list that can be used for the project"]
      }
    ]

    Here are the inputs you will need:
    - Experience: ${exps.join(", ") || "None"}
    - Technologies: ${tech.join(", ") || "None"}

    ${prompt ? `Custom Prompt: ${prompt}` : "Please generate project ideas based on the given inputs."}
    
    Generate 9 project ideas based on these inputs, ensuring that the project ideas are well-suited to the developer's experience and involve the listed technologies wherever relevant.
`;

  const result = await model.generateContent(geminiPrompt);
  const response = await result.response;
  const text = await response.text();

  console.log("Response text:", text);

  // Limpia el texto para quitar el prefijo ` ```json`
  const cleanText = text
    .replace(/```json\s*/, "")
    .replace(/```/, "")
    .trim();

  // Define valores por defecto
  const defaultProjectIdeas: ProjectIdea[] = [
    {
      title: "Default Project Title",
      description: "Default description of the project.",
      exp: "Junior Developer",
      technologies: ["JavaScript"],
    },
    {
      title: "Default Project Title 2",
      description: "Default description of the project 2.",
      exp: "Mid-Level Developer",
      technologies: ["Python"],
    },
    // Agrega más ideas por defecto según sea necesario
  ];

  try {
    // Intenta parsear la respuesta JSON
    const projectIdeas: ProjectIdea[] = JSON.parse(cleanText);

    // Validar la estructura de cada idea
    const validatedIdeas = projectIdeas.map((idea) => {
      if (
        typeof idea.title === "string" &&
        typeof idea.description === "string" &&
        typeof idea.exp === "string" &&
        Array.isArray(idea.technologies)
      ) {
        return idea; // Retorna la idea válida
      }
      return defaultProjectIdeas[0]; // Retorna el primer valor por defecto si no es válida
    });

    setProjectIdeas(validatedIdeas);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    // Si hay un error, establece la lista de ideas en los valores por defecto
    setProjectIdeas(defaultProjectIdeas);
  }
}
