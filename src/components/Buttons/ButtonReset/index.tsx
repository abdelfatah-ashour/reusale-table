import { convertCellToHeadersAndAccessors } from "helper/convertCellToHeadersAndAccessors";
import { useTable } from "hooks/useTable";

export function ButtonReset() {
  const { cells, setTable } = useTable();
  const { accessors, headers } = convertCellToHeadersAndAccessors(cells);
  function onReset() {
    setTable!(prev => {
      return {
        ...prev,
        accessors: accessors,
        headers: headers,
        tempHeaders: null,
        tempAccessors: null,
      };
    });
  }

  return <button onClick={onReset}>RESET</button>;
}
