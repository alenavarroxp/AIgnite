import AIgnite from "../AIgnite";
import CustomButton from "../CustomButton";
import GitHubBadge from "../GitHubBadge";

export default function PrincipalPage() {
  const scrollToStart = () => {
    const section = document.getElementById("start");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="text-white flex-col flex justify-center items-center">
          <AIgnite />
          <p className="text-lg font-light">
            Inspire, Create, & Ignite your Imagination
          </p>
        </div>
        <div className="mt-5">
          <CustomButton onClick={scrollToStart} />
        </div>
      </div>
      <GitHubBadge />
    </div>
  );
}
