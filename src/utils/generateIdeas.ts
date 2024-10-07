import { GoogleGenerativeAI } from "@google/generative-ai";
import { ProjectIdea } from "./atoms/projectIdeaAtom";

export async function generateIdeas(
  tech: string[],
  exps: string[],
  setProjectIdeas: (ideas: ProjectIdea[]) => void
) {
  console.log(tech, exps);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  // Obtén el modelo generativo
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    You are an expert in generating creative and suitable project ideas for developers based on their experience level and preferred technologies. 
    I will provide you with an array of technologies and a specific experience level (e.g., Junior, Senior, etc.). 
    I need you to generate project ideas that are tailored to that experience level, ensuring the ideas are neither too simple nor too complex for the given experience. 
    Each idea should include at least one or more of the provided technologies, and ideally match as many as possible while staying feasible. 

    Return the response in the following JSON format:
    {
      "title": "Project Title",
      "description": "A detailed description of the project, highlighting the problem it solves, the features it should have, and why it is a good fit for the given experience level and selected technologies.",
      "exp": "Experience level (e.g., Junior, Mid-Level, Senior, etc.)",
      "technologies": ["Array of relevant technologies from the provided list that can be used for the project"]
    }

    Here are the inputs you will need:
    - Experience: ${exps.join(", ") || "None"}
    - Technologies: ${tech.join(", ") || "None"}

    Generate 3 project ideas based on these inputs, ensuring that the project ideas are well-suited to the developer's experience and involve the listed technologies wherever relevant.
  `;

  console.log("Prompt sent to AI:", prompt);
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();

  console.log("Response text:", text);

  // Limpia el texto para quitar el prefijo ` ```json`
  const cleanText = text.replace(/```json\s*/, '').replace(/```/, '').trim();

  try {
    const projectIdeas: ProjectIdea[] = JSON.parse(cleanText);
    setProjectIdeas(projectIdeas);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    console.log("Cleaned response was:", cleanText);
  }
}
