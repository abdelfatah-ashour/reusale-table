import { IPropsChildren } from "interfaces/global";
import { IContextTable, IContextTableData } from "interfaces/table";
import { createContext, useState } from "react";

export const contextTableData: IContextTableData = {
  data: [],
  loading: false,
  error: "",
  cells: [],
  accessors: [],
  tempAccessors: null,
  tempHeaders: null,
  headers: [],
  filteredKeys: [],
  filterData: [],
};

export const TableContext = createContext<IContextTable>({
  tableContext: {
    data: [],
    loading: false,
    error: "",
    cells: [],
    accessors: [],
    tempAccessors: null,
    headers: [],
    tempHeaders: null,
    filteredKeys: [],
    filterData: [],
  },
  setTableContext: () => {},
});

export function TableProvider({ children }: IPropsChildren): JSX.Element {
  const [tableContext, setTableContext] = useState<IContextTableData>({
    data: [],
    loading: false,
    error: "",
    cells: [],
    accessors: [],
    tempAccessors: null,
    headers: [],
    tempHeaders: null,
    filterData: null,
  });

  return <TableContext.Provider value={{ tableContext, setTableContext }}>{children}</TableContext.Provider>;
}
