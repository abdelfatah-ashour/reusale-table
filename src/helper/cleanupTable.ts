import { IContextTableData } from "interfaces/table";

export function cleanupTable(setTable: React.Dispatch<React.SetStateAction<IContextTableData>>) {
  setTable!(() => {
    return {
      data: [],
      loading: false,
      error: "",
      cells: [],
      accessors: [],
      tempAccessors: null,
      tempHeaders: null,
      headers: [],
      filterData: null,
    };
  });
}
