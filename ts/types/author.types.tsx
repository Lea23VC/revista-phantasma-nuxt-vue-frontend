import { Post } from "./post.types";

export type Author = {
  id: number;
  name: string;
  posts?: Post[];
};
