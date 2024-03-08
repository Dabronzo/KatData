import React, { useState } from "react";
import { CatalogItem } from "../../../../../types/energyCarries";
import { DataChip } from "../../../../../types/builder";
import ChipBuilder from "../../../constructors/chipBuilder";
import { useAppDispatch } from "../../../../../hooks";
import { addChipToSelection } from "../../../store/builderSlice";
import PlusIcon from "../../../../../../assets/PlusIcon";
import CollapseIcon from "../../../../../../assets/CollapseIcon";


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
    };


   return (
    <>
    <button className="flex justify-center" type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
        <strong>{name}</strong>
        <CollapseIcon className={'mt-1.5 ml-1' + `${!isCollapsed ? ' rotate-180' : ''}`} height={15} width={15} color={'#262928'} />
    </button>
    {isCollapsed && (
        <ul className="ml-4 pl-2 border-l border-gray-500">
        {items.map((item) => (
          <li key={item.Key} className="flex justify-between items-center">
            <div>
              {item.Title}
            </div>
            <button 
              type="button" 
              className="hover:underline focus:outline-none mr-2" 
              onClick={() => {
                const newChip = createChip(item);
                dispatch(addChipToSelection(newChip));
              }}
              >
                <PlusIcon height={17} width={17} color={'#262928'} />
              </button>
          </li>
        ))}
      </ul>
    )}
    
  </>
   )
};

export default CatalogList;