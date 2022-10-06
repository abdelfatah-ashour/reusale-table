import { moveElementArray } from "helper/moveElementsArray";
import { useTable } from "hooks/useTable";
import { IUseTable } from "interfaces/table";
import "./style.sass";

export function UpAndDownColumnsOnTable() {
  const { setTable, headers, accessors }: IUseTable = useTable();

  function onClick(direction: string) {
    let result = moveElementArray(headers, accessors, direction);
    setTable!(prev => {
      return {
        ...prev,
        tempHeaders: result.tempHeaders,
        tempAccessors: result.tempAccessors,
      };
    });
  }

  return (
    <div className="up_and_down">
      <button onClick={() => onClick("UP")}>up</button>
      <button onClick={() => onClick("DOWN")}>down</button>
    </div>
  );
}
