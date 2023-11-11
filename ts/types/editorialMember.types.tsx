import { Author } from "./author.types";

export type EditorialMember = {
  id: number;
  name: string;
  email: string;
  position: string;
  author?: Author;
};
