import { Attachment } from "./attachment.types";
import { Author } from "./author.types";
import { Category } from "./category.types";
import { Media } from "./media.types";
import { PaginatorInfo } from "./pagination.types";

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
  publish_at: string;
  attachments: Attachment[];
  featured_image: Media;
  author?: Author;
  categories: Category[];
};
