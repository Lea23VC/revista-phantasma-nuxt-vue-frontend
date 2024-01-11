export function getPostsWhereSearchConditions(value: string) {
  let columnValue = `%${value}%`;

  const conditions = {
    OR: [
      { column: "CONTENT", operator: "LIKE", value: columnValue },
      { column: "TITLE", operator: "LIKE", value: columnValue },
    ],
  };

  return conditions;
}
