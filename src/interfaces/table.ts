export interface ICellTable {
  header: string;
  accessor: string;
}

export interface IContextTableData {
  data: any[];
  loading: boolean;
  error: string;
  cells: any[];
  accessors: string[];
  tempAccessors: string[] | null;
  headers: string[];
  tempHeaders?: string[] | null;
  filteredKeys?: any[];
  filterData: any[] | null;
}

export interface IContextTable {
  tableContext: IContextTableData;
  setTableContext?: React.Dispatch<React.SetStateAction<IContextTableData>>;
}

export interface ITableProps {
  data: any[];
  cells: ICellElement[];
  loading?: boolean;
  error?: string;
  isControlled?: boolean;
}

export interface ISelectInputTableProps {
  listData: {
    label: string;
    value: string | number | readonly string[] | undefined;
  }[];
  value?: string | number | readonly string[] | undefined;
}

export interface IFilteredKeysValues {
  label: string;
  value: string | number | readonly string[] | undefined;
}

export interface IUseTable {
  data: any[];
  cells: ICellElement[];
  setTable: React.Dispatch<React.SetStateAction<IContextTableData>> | undefined;
  filteredData: any[];
  accessors: string[];
  headers: string[];
  tempHeaders: string[] | null;
  tempAccessors: string[] | null;
}

export interface ICellElement {
  header: string;
  accessor: string;
}
