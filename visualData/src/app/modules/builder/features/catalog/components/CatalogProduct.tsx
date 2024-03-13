import React, { useRef, useState } from 'react';
import CollapseIcon from '../../../../../icons/CollapseIcon';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { productTypeSelector, setProductType } from '../store/catalogSlice';
import { PRODUCTITEMS } from '../../../../../consts/catalog';
import RadioProducts from '../../../../common/components/RadioProducts';





const CatalogProduct = () => {


    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const selectedOption = useAppSelector(productTypeSelector);
    const dispatch = useAppDispatch()


    const itemRef = useRef<HTMLUListElement>(null);


    return(
        <div className="bg-[#E5E4E2] mx-2 mt-2 rounded-[8px]">
            <button type="button" className="flex items-center w-full px-2 py-2" onClick={() => setIsCollapsed(!isCollapsed)}>
                <strong>{selectedOption.title}</strong>
                <div className="ml-auto">
                <CollapseIcon className={'' + `${!isCollapsed ? ' rotate-90' : 'rotate-180'}`} height={15} width={15} color={'#262928'} />
                </div>
            </button>
            <div className="overflow-y-hidden transition-all duration-300 " style={{  height:  isCollapsed ? itemRef.current?.getBoundingClientRect().height : 0}}>
            <RadioProducts
                options={PRODUCTITEMS}
                selectedOption={selectedOption.value}
                onChange={(productObj) => dispatch(setProductType(productObj))}
                />
            </div>
        </div>
    )
};

export default CatalogProduct;