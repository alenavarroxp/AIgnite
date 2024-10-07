export default function CustomButton() {
  return (
    <button className="relative px-6 py-3 mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-75 blur-md rounded-full"></span>
      <span className="relative z-10 font-medium text-lg">Get Started</span>
    </button>
  );
}
