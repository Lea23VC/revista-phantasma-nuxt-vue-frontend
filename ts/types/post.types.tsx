import { Attachment } from "./attachment.types";
import { Author } from "./author.types";
import { Category } from "./category.types";
import { Media } from "./media.types";

export type PostPaginator = {
  paginatorInfo: PaginatorInfo;
  data: Post[];
};

export type PaginatorInfo = {
  count: number;
  currentPage: number;
  firstItem: number;
  hasMorePages: boolean;
  lastItem: number;
  lastPage: number;
  perPage: number;
  total: number;
};

export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  publish_at: string;
  attachments: Attachment[];
  featured_image: Media;
  author: Author;
  categories: Category[];
};
