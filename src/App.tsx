import PrincipalPage from "./components/pages/PrincipalPage";
import SecondPage from "./components/pages/SecondPage";

function App() {
  return (
    <div className="relative min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-blue-950 pointer-events-auto">
      <div className="absolute inset-0 bg-[url('assets/bg.svg')] bg-cover opacity-50" />

      {/* Primera "página" - PrincipalPage */}
      <div className="flex flex-col w-full h-screen justify-center items-center pointer-events-auto">
        <PrincipalPage />
      </div>
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <SecondPage />
      </div>
    </div>
  );
}

export default App;
