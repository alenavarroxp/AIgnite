import { VscGithub } from "react-icons/vsc";

export default function GitHubBadge() {
  return (
    <div className="z-10 text-white text-sm  absolute top-2 right-0 cursor-pointer">
        <a
          href="https://github.com/alenavarroxp"
          className="flex items-center gap-1 group"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-l-lg transform translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
            <div className="relative z-10 bg-transparent flex items-center gap-1 p-2 ">
              <VscGithub size={20} />
              <p>alenavarroxp</p>
            </div>
          </div>
        </a>
      </div>
  )
}
