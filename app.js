import { GoogleGenerativeAI } from "@google/generative-ai";

async function run() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 

  // Obtén el modelo generativo
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Actúa como un médico, mi consulta es la siguiente: Me duelen la zona lumbrar, ¿qué puedo hacer?";

  // Genera contenido
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text()
  console.log(text);
}

run().catch((error) => {
  console.error('Error running the AI generation:', error);
});
