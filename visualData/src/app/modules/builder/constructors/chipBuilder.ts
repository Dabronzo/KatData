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

    private setColorAndName() {
        switch (this.energyCarrie.Key) {
            case 'E006560': // Natural Gas
                this.chipData.color = '#D0D6B5';
                this.chipData.verboseName = this.energyCarrie.Title;
            break;
            case 'E006461': // Coal
                this.chipData.color ='#96939B';
                this.chipData.verboseName = this.energyCarrie.Title;
            break;
            case 'E006534': // Oil
                this.chipData.color = '#987284';
                this.chipData.verboseName = this.energyCarrie.Title;
            break;
            case 'E006590': // Sun power
                this.chipData.color = '#EDCFAB';
                this.chipData.verboseName = this.energyCarrie.Title;
            break;
            case 'E006588': // Wind Power
                this.chipData.color = '#78E3FD';
                this.chipData.verboseName = this.energyCarrie.Title;
            break;
            case 'E006587': // Water power
                this.chipData.color = '#78E3FD';
                this.chipData.verboseName = this.energyCarrie.Title;
            break;
            case 'E006566': // BioMass
                this.chipData.color = '#34F6F2';
                this.chipData.verboseName = this.energyCarrie.Title;
            break;
            case 'E006602': // Nuclear Power
                this.chipData.color = '#7d53de';
                this.chipData.verboseName = this.energyCarrie.Title;
            break;
            case 'E006620': // total fossil
                this.chipData.color = '#E2E2DF';
                this.chipData.verboseName = 'Total Fossil';
            break;
            case 'E006621': // other fossil
                this.chipData.color = '#7059B1';
                this.chipData.verboseName ='Other Fossil';
            break;
            case 'E006565':
                this.chipData.color = '#079C5C';
                this.chipData.verboseName = 'Total Renewable';
            break;
            case 'E006622':
                this.chipData.color = '#C62F78';
                this.chipData.verboseName = 'Other Carries'
            

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
        this.setColorAndName();
        // this.setUnity();
        this.setDataType();

        return this.chipData;

    }
}


export default ChipBuilder;