import { useContext } from "react";
import { TableContext } from "context/contextTable";
import { IContextTable, IUseTable } from "interfaces/table";

export function useTable(): IUseTable {
  const { tableContext, setTableContext } = useContext<IContextTable>(TableContext);

  return {
    data: tableContext.data || [],
    cells: tableContext.cells,
    setTable: setTableContext,
    filteredData: tableContext.filterData || [],
    headers: tableContext.headers || [],
    accessors: tableContext.accessors || [],
    tempHeaders: tableContext.tempHeaders || null,
    tempAccessors: tableContext.tempAccessors || null,
  };
}
