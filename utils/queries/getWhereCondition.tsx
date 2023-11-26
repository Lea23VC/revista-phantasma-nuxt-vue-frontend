export function getPostsWhereSearchConditions(value: string) {
  let columnValue = `%${value}%`;

  const conditions = {
    column: "TITLE",
    operator: "LIKE",
    value: columnValue,
    OR: [{ column: "CONTENT", operator: "LIKE", value: columnValue }],
  };

  return conditions;
}
