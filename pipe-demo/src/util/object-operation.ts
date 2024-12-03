export const omit = <T extends object, R extends PropertyKey = keyof T>(
  obj: T,
  ...keys: R[]
) => {
  const iterator = Object.entries(obj);
  const leftItems = iterator.filter(([key]) => !keys.includes(key as R));
  return Object.fromEntries(leftItems) as Omit<T, R>;
};
