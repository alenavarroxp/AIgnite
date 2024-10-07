import { atom } from "jotai";

export interface ProjectIdea {
  title: string;
  description: string;
  exp: string;
  technologies: string[];
}

export const projectIdeasAtom = atom<ProjectIdea[]>([]);
