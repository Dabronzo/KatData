import React, { useState } from "react";
import CatalogList from "./CatalogItem";
import { useAppSelector } from "../../../../../hooks";
import { selectFossilCarries, selectNuclearCarries, selectOthersCarries, selectRenewableCarries } from "../store/catalogSlice";


const Catalog = () => {

    const fossilData = useAppSelector(selectFossilCarries);
    const renewableData = useAppSelector(selectRenewableCarries);
    const nuclearData = useAppSelector(selectNuclearCarries);
    const otherData = useAppSelector(selectOthersCarries);

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };


    return (
        <div>
            <button 
                type="button" 
                onClick={toggleCollapse} 
                className="text-blue-500 hover:underline focus:outline-none"
            >
                Energy Carries {isCollapsed ? 'E' : 'C'}
            </button>
            {isCollapsed && (
                <div className="max-h-80 overflow-y-auto">
                
                <div className="ml-4">
                    <CatalogList
                    name='Fossil'
                    items={fossilData}
                    />
                </div>
                <div className="ml-4">
                    <CatalogList
                        name="Renewable"
                        items={renewableData}
                    />
                </div>
                <div className="ml-4">
                     <CatalogList
                        name="Nuclear"
                        items={nuclearData}
                    />
                </div>
                <div className="ml-4">
                     <CatalogList
                        name="Other"
                        items={otherData}
                    />
                </div>
                </div>
            )}
        </div>
    );

};

export default Catalog;