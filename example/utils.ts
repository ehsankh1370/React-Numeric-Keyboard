export const classNameGenerator = (
  classes: Array<string | boolean | undefined>,
): string => {
  const classNames = classes.filter(Boolean);
  return classNames.join(' ');
};
