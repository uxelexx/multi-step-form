type Entries<T> = {
  [Key in keyof T]: [Key, T[Key]];
}[keyof T][];

export const getEntries = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;
