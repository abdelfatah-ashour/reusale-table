import React, { useEffect, useContext } from "react";
import { convertCellToHeadersAndAccessors } from "helper/convertCellToHeadersAndAccessors";
import { IContextTable, ITableProps } from "interfaces/table";
import { TableContext } from "context/contextTable";
import { useTable } from "hooks/useTable";
import "./style.sass";

function TableUI({
  data: dataTable = [],
  cells: cellsTable = [],
  loading = false,
  error = "",
  isControlled = false,
}: ITableProps) {
  const { tableContext, setTableContext } = useContext<IContextTable>(TableContext);
  const { headers, tempHeaders, accessors, tempAccessors } = useTable();

  // render UI
  function TableHeader(): JSX.Element {
    return (
      <thead>
        <tr>
          {isControlled && (tempHeaders?.length || headers!.map.length) ? <th></th> : null}
          {!tempHeaders ? (
            <>
              {headers.map((header: string) => {
                return <th key={header}>{header}</th>;
              })}
            </>
          ) : (
            <>
              {tempHeaders.map((header: string) => {
                return <th key={header}>{header}</th>;
              })}
            </>
          )}
        </tr>
      </thead>
    );
  }

  function TableBody(): JSX.Element {
    if (tableContext.filterData)
      return (
        <tbody>
          {tableContext.filterData.length ? (
            <>
              {tableContext.filterData.map((Obj: any, index: number) => {
                return (
                  <tr key={Obj.id}>
                    {isControlled && (tempHeaders?.length || headers!.map.length) ? (
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                    ) : null}
                    {tableContext.accessors.map((accessor: string) => {
                      return <td key={accessor}>{Obj[accessor]}</td>;
                    })}
                  </tr>
                );
              })}
            </>
          ) : (
            <tr className="no_data_found">
              <td>no data filtered</td>
            </tr>
          )}
        </tbody>
      );

    return (
      <tbody>
        {tableContext.data.map((Obj: any, index: number) => {
          return (
            <tr key={index}>
              {isControlled && (tempHeaders?.length || headers!.map.length) ? (
                <td key={Obj.id}>
                  <input type="checkbox" name="" id="" />
                </td>
              ) : null}
              {!tempAccessors ? (
                <>
                  {accessors!.map((accessor: string) => {
                    return <td key={accessor}>{Obj[accessor]}</td>;
                  })}
                </>
              ) : (
                <>
                  {tempAccessors!.map((accessor: string) => {
                    return <td key={accessor}>{Obj[accessor]}</td>;
                  })}
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    );
  }

  useEffect(() => {
    // store headers and accessors
    const { accessors, headers } = convertCellToHeadersAndAccessors(cellsTable);
    setTableContext!(prev => {
      return {
        ...prev,
        cells: cellsTable,
        accessors: accessors,
        headers: headers,
      };
    });
  }, []);

  useEffect(() => {
    // store data
    setTableContext!(prev => {
      return {
        ...prev,
        data: dataTable,
        loading,
        error,
      };
    });
  }, [dataTable]);

  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
}

export const Table = React.memo(TableUI);
