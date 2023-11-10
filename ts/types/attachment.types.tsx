import { Media } from "./media.types";
import { Post } from "./post.types";

export type Attachment = {
  title: string;
  description: string;
  post?: Post;
  files: Media[];
  position: "start" | "end";
  created_at: string;
  updated_at: string;
};
