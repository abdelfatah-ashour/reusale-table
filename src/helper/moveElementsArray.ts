export function moveElementArray(tableHeaders: string[], tableAccessors: string[], direction: string) {
  let tempHeaders: string[] = tableHeaders;
  let tempAccessors: string[] = tableAccessors;

  if (direction === "UP") {
    let firstHeader = tempHeaders.shift()!;
    tempHeaders.push(firstHeader);

    let firstAccessor = tempAccessors.shift()!;
    tempAccessors.push(firstAccessor);
  }

  if (direction === "DOWN") {
    let lastHeader = tempHeaders.pop()!;
    tempHeaders.unshift(lastHeader);

    let lastAccessor = tempAccessors.pop()!;
    tempAccessors.unshift(lastAccessor);
  }

  return {
    tempHeaders,
    tempAccessors,
  };
}
