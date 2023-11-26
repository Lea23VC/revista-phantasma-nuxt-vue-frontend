export default function getWhereHasCondition(
  value: string,
  column = "NAME",
  operator = "LIKE",
) {
  const condition = { column: column, operator: operator, value: `%${value}%` };
  return condition;
}
