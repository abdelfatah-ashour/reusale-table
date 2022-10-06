import { IFilteredKeysValues } from "interfaces/table";
import { useTable } from "hooks/useTable";
import { defaultFilter } from "helper/defaultFilter";
import "./style.sass";

type SelectFilterProps = {
  listFilter: IFilteredKeysValues[];
  name: string;
  label: string;
};

export function SelectFilter({ listFilter, name, label }: SelectFilterProps) {
  const { data, setTable } = useTable();

  return (
    <div className="container_filter">
      {label ? <label htmlFor={name}>{label}</label> : null}
      <select
        id={name}
        name={name}
        onChange={e => {
          let result = defaultFilter(data, e.target.name, e.target.value);
          setTable!(prev => {
            return {
              ...prev,
              filterData: result,
            };
          });
        }}>
        {listFilter.map((element, index) => {
          return (
            <option value={element.value} key={index}>
              {element.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
