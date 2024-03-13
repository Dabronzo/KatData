import React from "react";
import CatalogCarries from "./CatalogCarries";
import { useAppSelector } from "../../../../../hooks";
import { selectFossilCarries, selectNuclearCarries, selectOthersCarries, selectRenewableCarries } from "../store/catalogSlice";
import CatalogProduct from "./CatalogProduct";


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
                <CatalogCarries
                    name='Fossil'
                    items={fossilData ? fossilData : []}
                    />
                 <CatalogCarries
                        name="Renewable"
                        items={renewableData ? renewableData : []}
                    />
                <CatalogCarries
                        name="Nuclear"
                        items={nuclearData ? nuclearData : []}
                    />
                <CatalogCarries
                        name="Other"
                        items={otherData ? otherData : []}
                    />
                <div className="mt-2">
                    <strong>Product Type</strong>
                </div>
                <CatalogProduct />
            </div>
           
        </div>
    );

};

export default Catalog;