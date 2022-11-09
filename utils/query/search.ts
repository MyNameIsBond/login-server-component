const fetchMap = new Map<string, Promise<any>>();
export function queryClient(name: string, query: () => Promise<any>) {
  if (!fetchMap.has(name)) {
    fetchMap.set(name, query());
  }
  return fetchMap.get(name)!;
}
