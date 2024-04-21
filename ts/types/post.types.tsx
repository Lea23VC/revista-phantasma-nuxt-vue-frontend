import type { Attachment } from "./attachment.types";
import type { Author } from "./author.types";
import type { Category } from "./category.types";
import type { Media } from "./media.types";
import type { PaginatorInfo } from "./pagination.types";

export type PostPaginator = {
  paginatorInfo: PaginatorInfo;
  data: Post[];
};

export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  content_without_html: string;
  content_images: string[];
  publish_at: string;
  attachments: Attachment[];
  featured_image: Media;
  author?: Author;
  categories: Category[];
};
