export function queryClient(name: string, query: () => Promise<any>) {
  const fetchMap = new Map<string, Promise<any>>();
  if (!fetchMap.has(name)) {
    fetchMap.set(name, query());
  }
  return fetchMap.get(name)!;
}
