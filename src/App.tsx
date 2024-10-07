import PrincipalPage from "./components/pages/PrincipalPage";
import SecondPage from "./components/pages/SecondPage";
import ThirdPage from "./components/pages/ThirdPage";

function App() {
  return (
    <div className="relative min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-blue-950">
      <div className="absolute inset-0 bg-[url('assets/bg.svg')] bg-cover opacity-50" />

      <div className="flex flex-col w-full h-screen justify-center items-center">
        <PrincipalPage />
      </div>
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <SecondPage />
      </div>
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <ThirdPage />
      </div>
    </div>
  );
}

export default App;
