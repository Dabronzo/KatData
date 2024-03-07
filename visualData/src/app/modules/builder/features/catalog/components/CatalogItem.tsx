import React, { useState } from "react";
import { CatalogItem } from "../../../../../types/energyCarries";
import { DataChip } from "../../../../../types/builder";
import ChipBuilder from "../../../constructors/chipBuilder";
import { useAppDispatch } from "../../../../../hooks";
import { addChipToSelection } from "../../../store/builderSlice";


type Props = {
    name: string;
    items: CatalogItem[]
}

const CatalogList = ({name, items}: Props) => {

  const dispatch = useAppDispatch();

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const createChip = (item: CatalogItem): DataChip => {
      const newChip = new ChipBuilder(item).build(); 
      return newChip;
    }


   return (
    <>
    <button type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
        {name}
    </button>
    {isCollapsed && (
        <ul className="ml-4 pl-2 border-l border-gray-500">
        {items.map((item) => (
          <li key={item.Key} className="flex justify-between items-center">
            <div>
              <strong>{item.Title}</strong>
            </div>
            <button 
              type="button" 
              className="hover:underline focus:outline-none" 
              onClick={() => {
                const newChip = createChip(item);
                dispatch(addChipToSelection(newChip));
              }}
              >
                + Add
              </button>
          </li>
        ))}
      </ul>
    )}
    
  </>
   )
};

export default CatalogList;