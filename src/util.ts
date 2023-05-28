/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export function chunk<T extends any[]>(arr: T, size: number): T[] {
  return arr.reduce(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    (newarr, _, i) => (i % size ? newarr : [...newarr, arr.slice(i, i + size)]),
    [] as T[][],
  );
}

export const checkRequiredFields = (obj: object) => {
  const missingEntries = Object.entries(obj).filter(([_k, v]) => v == null);
  if (missingEntries.length > 0) {
    throw new Error(`Missing required fields: ${missingEntries.map(([k, _v]) => k).join(", ")}`);
  }
};
