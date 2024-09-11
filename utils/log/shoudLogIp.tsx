import type { Post } from "~/ts/types/post.types";
import { normalizeString } from "../transformation/normalizeString";
const config = useRuntimeConfig();

export function shouldLogIp(post: Post | undefined) {
  const targetNames = config.public.targetNames;

  const normalizedAuthor = normalizeString(
    post?.author?.name || "",
  ).toLowerCase();
  const normalizedContent = normalizeString(post?.content || "").toLowerCase();

  return targetNames.some((name) => {
    const normalizedTarget = normalizeString(name).toLowerCase();
    return (
      normalizedAuthor.includes(normalizedTarget) ||
      normalizedContent.includes(normalizedTarget)
    );
  });
}

export function shouldLogIpBySearchQuery(searchQuery: string) {
  const targetNames = config.public.simpleTargetNames;

  const normalizedSearchQuery = normalizeString(searchQuery).toLowerCase();

  return targetNames.some((name) => {
    const normalizedTarget = normalizeString(name).toLowerCase();
    return normalizedSearchQuery.includes(normalizedTarget);
  });
}
