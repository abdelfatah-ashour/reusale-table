import { useState, useEffect } from "react";
import { Table } from "components/Table";
import { cityList, codeList, countryList, dummyDataCountry } from "helper/dummyData";
import { Popup } from "components/Popup";
import { useTable } from "hooks/useTable";
import { ICellElement, IUseTable } from "interfaces/table";
import { UpAndDownColumnsOnTable } from "components/UpAndDownColumnsOnTable";
import { CustomDisplayHeaderOnTable } from "components/Buttons/CustomDisplayHeaderOnTable";
import { ButtonReset } from "components/Buttons/ButtonReset";
import { SelectFilter } from "components/Inputs/Filter";
import { cleanupTable } from "helper/cleanupTable";

export function Route2(): JSX.Element {
  const [currentPopup, setCurrentPopup] = useState<string>("");
  const { setTable }: IUseTable = useTable();

  // constants
  const filter = "FILTER";
  const custom_displayed = "CUSTOM_DISPLAYED";

  const cells: ICellElement[] = [
    {
      header: "code",
      accessor: "code",
    },
    {
      header: "street",
      accessor: "street",
    },
    {
      header: "city",
      accessor: "city",
    },
    {
      header: "country",
      accessor: "country",
    },
  ];

  function onSubmitCustomDisplay() {
    setCurrentPopup("");
  }

  useEffect(() => {
    // clean up after un mount
    return () => cleanupTable(setTable!);
  }, []);

  return (
    <>
      <Popup isOpen={currentPopup === filter} onClose={() => setCurrentPopup("")}>
        <div className="popup_displayOptions">
          <SelectFilter name="code" listFilter={codeList} label="Select code" />
          <SelectFilter name="city" listFilter={cityList} label="Select City" />
          <SelectFilter name="country" listFilter={countryList} label="Select Country" />
        </div>

        <div>
          <button onClick={() => setCurrentPopup("")}>submit</button>
          <ButtonReset />
        </div>
      </Popup>
      <Popup isOpen={currentPopup === custom_displayed} onClose={() => setCurrentPopup("")}>
        <div className="popup_displayOptions">
          <UpAndDownColumnsOnTable />
          <CustomDisplayHeaderOnTable />

          <button onClick={onSubmitCustomDisplay}>SUBMIT</button>
          <ButtonReset />
        </div>
      </Popup>
      <div>
        <div className="wrap_controller">
          <button onClick={() => setCurrentPopup(filter)}>filter</button>
          <button onClick={() => setCurrentPopup(custom_displayed)}>custom display</button>
        </div>
        <Table data={dummyDataCountry} cells={cells} isControlled />
      </div>
    </>
  );
}
