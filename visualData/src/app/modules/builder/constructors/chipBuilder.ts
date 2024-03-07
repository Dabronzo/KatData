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
                this.chipData.color = '#3498db'
            break;
            case 'E006461':
                this.chipData.color ='#4d4d4d'
            break;
            case 'E006534':
                this.chipData.color = '#704214'
            break;
            case 'E006590':
                this.chipData.color = '#ffd700'
            break;
            case 'E006588':
                this.chipData.color = '#87ceeb'
            break;
            case 'E006587':
                this.chipData.color = '#006994'
            break;
            case 'E006566':
                this.chipData.color = '#8b4513'
            break;
            case 'E006602':
                this.chipData.color = '#00ff00'
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