import AIgnite from "./components/AIgnite";
import { VscGithub } from "react-icons/vsc";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-blue-950">
      <div className="absolute inset-1 bg-[url('assets/bg.svg')] bg-cover opacity-50" />

      <div className="relative z-10 text-white font-sans text-center">
        <header>
          <AIgnite />
          <p className="text-lg font-light">
            Inspire, Create, & Ignite your Imagination
          </p>
        </header>
      </div>

      <main className="mt-5">
        <CustomButton />
      </main>

      <footer className="z-10 text-white text-sm mt-10 absolute bottom-4 left-0 cursor-pointer">
        <a
          href="https://github.com/alenavarroxp"
          className="flex items-center gap-1 group"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-r-lg transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
            <div className="relative z-10 bg-transparent flex items-center gap-1 p-2 ">
              <VscGithub size={20} />
              <p>alenavarroxp</p>
            </div>
          </div>
        </a>
      </footer>
    </div>
  );
}

export default App;
