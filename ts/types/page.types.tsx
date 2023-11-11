import { Media } from "./media.types";

export type Page = {
  id: number;
  title: string;
  slug: string;
  content?: string;
  background_image?: Media;
};
