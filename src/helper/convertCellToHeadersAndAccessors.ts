import { ICellTable } from "interfaces/table";

export function convertCellToHeadersAndAccessors(cells: ICellTable[]) {
  // return headers with array of string like ["id" , "first name" , "last name"]
  let headers: string[] = cells.map(({ header }) => header);

  // return accessors with array of string like ["id" , "first_name" , "last_name"]
  let accessors: string[] = cells.map(({ accessor }) => accessor);
  return { headers, accessors };
}
