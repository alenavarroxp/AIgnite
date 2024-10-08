import { useEffect } from "react";
import PrincipalPage from "./components/pages/PrincipalPage";
import SecondPage from "./components/pages/SecondPage";
import ThirdPage from "./components/pages/ThirdPage";

function App() {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      const sections = document.querySelectorAll(".section");
      let currentSectionIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Verifica si la sección está en el viewport
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionIndex = index;
        }
      });

      if (event.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) {
          window.scrollTo({
            top:
              sections[currentSectionIndex + 1].getBoundingClientRect().top +
              window.scrollY,
            behavior: "smooth",
          });
        }
      } else if (event.deltaY < 0) {
        // Scroll hacia arriba
        if (currentSectionIndex > 0) {
          window.scrollTo({
            top:
              sections[currentSectionIndex - 1].getBoundingClientRect().top +
              window.scrollY,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-blue-950">
      <div className="absolute inset-0 bg-[url('assets/bg.svg')] bg-cover opacity-50" />
      <div className="flex flex-col w-full h-screen justify-center items-center section">
        <PrincipalPage />
      </div>
      <div className="flex flex-col w-full h-screen justify-center items-center section">
        <SecondPage />
      </div>
      <div className="flex flex-col w-full h-screen justify-center items-center section">
        <ThirdPage />
      </div>
    </div>
  );
}

export default App;
