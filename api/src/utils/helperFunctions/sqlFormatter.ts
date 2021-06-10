/** Allows to use multiline sql strings using backticks */
export const sqlFormatter = (sql: string): string => {
  const regex = /[\s]{2,}|[\n]/g;
  return sql.replace(regex, ' ');
};
