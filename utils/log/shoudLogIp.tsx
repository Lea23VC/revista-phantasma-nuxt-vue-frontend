import type { Post } from "~/ts/types/post.types";
import { normalizeString } from "../transformation/normalizeString";

export function shouldLogIp(post: Post | undefined, config: any) {
  const targetNames = config.public.targetNames?.split(",") || [];

  const normalizedAuthor = normalizeString(
    post?.author?.name || "",
  ).toLowerCase();
  const normalizedContent = normalizeString(post?.content || "").toLowerCase();

  return targetNames.some((name: string) => {
    const normalizedTarget = normalizeString(name).toLowerCase();
    return (
      normalizedAuthor.includes(normalizedTarget) ||
      normalizedContent.includes(normalizedTarget)
    );
  });
}

export function shouldLogIpBySearchQuery(searchQuery: string, config: any) {
  const targetNames = config.public.simpleTargetNames?.split(",") || [];

  const normalizedSearchQuery = normalizeString(searchQuery).toLowerCase();

  return targetNames.some((name: string) => {
    const normalizedTarget = normalizeString(name).toLowerCase();
    return normalizedSearchQuery.includes(normalizedTarget);
  });
}

export function shoudLogIpByAuthor(author: string, config: any) {
  const targetNames = config.public.targetNames?.split(",") || [];

  const normalizedAuthor = normalizeString(author).toLowerCase();

  return targetNames.some((name: string) => {
    const normalizedTarget = normalizeString(name).toLowerCase();
    return normalizedAuthor.includes(normalizedTarget);
  });
}
