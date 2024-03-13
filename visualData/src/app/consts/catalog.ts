import { EnergyType, ProductItem } from "../types/energyCarries";

export const PRODUCTITEMS: ProductItem[] = [
    {
        title: 'Eletricity - (TJ)',
        value: EnergyType.ELETRICITY
    },
    {
        title: 'Heat - (TJ)',
        value: EnergyType.HEAT
    },
    {
        title: 'Eletricity and Heat - (TJ)',
        value: EnergyType.BOTH
    },
]