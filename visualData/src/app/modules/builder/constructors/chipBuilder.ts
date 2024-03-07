import { DataChip } from "../../../types/builder";
import { CatalogItem } from "../../../types/energyCarries";


class ChipBuilder {

    private chipData: DataChip ={
        verboseName: '',
        dataValue: '',
        color: '',
        unity: '',
        dataType: '',
    }

    constructor(private energyCarrie: CatalogItem) {}

    private setColor() {
        switch (this.energyCarrie.Key) {
            case 'E006560':
                this.chipData.color = '#FF0000'
            break;
            case 'E006461':
                this.chipData.color ='#FF0000'
            break;
            case 'E006534':
                this.chipData.color = '#FF0000'
            break;
        }
    }

    private setUnity() {
        this.chipData.unity = 'TJ'
    }

    private setDataType() {
        this.chipData.dataType = 'STRING'
    }

    build(): DataChip {
        this.chipData.dataValue = this.energyCarrie.Key;
        this.chipData.verboseName = this.energyCarrie.Title;
        this.setColor();
        this.setUnity();
        this.setDataType();

        return this.chipData;

    }
}


export default ChipBuilder;