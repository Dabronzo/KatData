import React, { useRef, useState } from "react";
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

    const itemRef = useRef<HTMLUListElement>(null);


   return (
    <div className="bg-[#E5E4E2] mx-2 mt-2 rounded-[8px]">
      <button type="button" className="flex items-center w-full px-2 py-2" onClick={() => setIsCollapsed(!isCollapsed)}>
        <strong>{name}</strong>
        <div className="ml-auto">
          <CollapseIcon className={'' + `${!isCollapsed ? ' rotate-90' : 'rotate-180'}`} height={15} width={15} color={'#262928'} />
        </div>
      </button>
      <div className="overflow-y-hidden transition-all duration-300 " style={{  height:  isCollapsed ? itemRef.current?.getBoundingClientRect().height : 0}}>
        <ul ref={itemRef}>
          {items.map((item) => (
            <li key={item.Key} className=" mt-1 hover:bg-[#BEBFC5] transition-all duration-3000">
              <div className="px-2 py-2 flex justify-between">
                <div>
                  {item.Title}
                </div>
                <button 
                  type="button" 
                  className="hover:underline focus:outline-none" 
                  onClick={() => {
                    const newChip = createChip(item);
                    dispatch(addChipToSelection(newChip));
                  }}
                  >
                    <PlusIcon height={17} width={17} color={'#262928'} />
                  </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  </div>
   )
};

export default CatalogList;