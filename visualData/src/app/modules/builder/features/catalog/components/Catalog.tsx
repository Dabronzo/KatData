import React from "react";
import CatalogList from "./CatalogItem";
import { useAppSelector } from "../../../../../hooks";
import { selectFossilCarries, selectNuclearCarries, selectOthersCarries, selectRenewableCarries } from "../store/catalogSlice";


const Catalog = () => {

    const fossilData = useAppSelector(selectFossilCarries);
    const renewableData = useAppSelector(selectRenewableCarries);
    const nuclearData = useAppSelector(selectNuclearCarries);
    const otherData = useAppSelector(selectOthersCarries);

    // const periodeData: CatalogItem  = {
    //     Key: 'PERIODE',
    //     Title: 'Date',
    //     Description: '',
    //     CategoryGroupID: 0,
    // }




    return (
        <div>
            <div 
                className="focus:outline-none"
            >
                <strong>Energy Carries</strong>
            </div>
            <div className="h-80 overflow-y-auto">
                <CatalogList
                    name='Fossil'
                    items={fossilData}
                    />
                 <CatalogList
                        name="Renewable"
                        items={renewableData}
                    />
                <CatalogList
                        name="Nuclear"
                        items={nuclearData}
                    />
                <CatalogList
                        name="Other"
                        items={otherData}
                    />
                <div className="mt-2">
                    <strong>Dimentions</strong>
                </div>
            </div>
           
        </div>
    );

};

export default Catalog;