export default function getWhereHasCondition(
  value: string,
  column = "NAME",
  operator = "LIKE",
) {
  let columnValue = value;
  if (operator === "LIKE") {
    columnValue = `%${value}%`;
  }

  const condition = { value: columnValue, column: column, operator: operator };
  return condition;
}
