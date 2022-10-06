import { useTable } from "hooks/useTable";
import { IUseTable, ICellElement } from "interfaces/table";
import { ChangeEvent } from "react";
import "./style.sass";

export function CustomDisplayHeaderOnTable() {
  const { headers, setTable, tempHeaders, cells }: IUseTable = useTable();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    let result: ICellElement = cells.filter(element => element.header === e.target.value)[0];

    if (e.target.checked) {
      // select header
      if (tempHeaders) {
        setTable!(prev => {
          return {
            ...prev,
            tempHeaders: !prev.tempHeaders!.includes(result.header)
              ? [...prev.tempHeaders!, result.header]
              : [...prev.tempHeaders!],
            tempAccessors: !prev.tempAccessors!.includes(result.accessor)
              ? [...prev.tempAccessors!, result.accessor]
              : [...prev.tempAccessors!],
          };
        });
      } else {
        setTable!(prev => {
          return {
            ...prev,
            tempHeaders: [e.target.value],
            tempAccessors: [result.accessor],
          };
        });
      }
    } else {
      setTable!(prev => {
        return {
          ...prev,
          tempHeaders: prev.tempHeaders!.filter(element => element !== result.header),
          tempAccessors: prev.tempAccessors!.filter(element => element !== result.accessor),
        };
      });
    }
  }

  return (
    <div>
      {headers.map((accessor: string) => {
        return (
          <div key={accessor} className="display_headers">
            <input
              type="checkbox"
              name=""
              id={accessor}
              value={accessor}
              onChange={onChange}
              checked={tempHeaders?.includes(accessor)}
            />
            <label htmlFor={accessor}>{accessor}</label>
          </div>
        );
      })}
    </div>
  );
}
