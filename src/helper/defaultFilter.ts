export function defaultFilter(data: any[], name: string, value: string) {
  return data.filter(e => (value !== "all" ? e[name].toLowerCase().includes(value.toLowerCase()) : e)).map(e => e);
}
