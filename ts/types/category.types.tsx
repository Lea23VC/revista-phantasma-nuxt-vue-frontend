import { Post } from "@/ts/types/post.types";
import { Media } from "@/ts/types/media.types";

export type Category = {
  id: number;
  name: string;
  slug: string;
  background: Media;
  posts: Post[];
};
