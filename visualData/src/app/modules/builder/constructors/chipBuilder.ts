import { nanoid } from "@reduxjs/toolkit";
import { DataChip, EnergyType } from "../../../types/builder";
import { CatalogItem } from "../../../types/energyCarries";


class ChipBuilder {

    private chipData: DataChip ={
        id: nanoid(),
        verboseName: '',
        dataValue: '',
        color: '',
        unity: EnergyType.ELETRICITY, // by default
        dataType: '',
    }

    constructor(private energyCarrie: CatalogItem) {}

    private setColor() {
        switch (this.energyCarrie.Key) {
            case 'E006560': // Natural Gas
                this.chipData.color = '#D0D6B5'
            break;
            case 'E006461': // Coal
                this.chipData.color ='#96939B'
            break;
            case 'E006534': // Oil
                this.chipData.color = '#987284'
            break;
            case 'E006590': // Sun power
                this.chipData.color = '#EDCFAB'
            break;
            case 'E006588': // Wind Power
                this.chipData.color = '#78E3FD'
            break;
            case 'E006587': // Water power
                this.chipData.color = '#78E3FD'
            break;
            case 'E006566': // BioMass
                this.chipData.color = '#34F6F2'
            break;
            case 'E006602': // Nuclear Power
                this.chipData.color = '#7d53de'
            break;
        }
    }

    // private setUnity() {
    //     this.chipData.unity = EnergyType.ELETRICITY
    // }

    private setDataType() {
        this.chipData.dataType = 'STRING'
    }

    build(): DataChip {
        this.chipData.dataValue = this.energyCarrie.Key;
        this.chipData.verboseName = this.energyCarrie.Title;
        this.setColor();
        // this.setUnity();
        this.setDataType();

        return this.chipData;

    }
}


export default ChipBuilder;