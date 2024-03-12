
// https://opendata.cbs.nl/ODataFeed/odata/80030ned/TypedDataSet?%24filter=((Energiedragers%20eq%20%27E006590%27)%20or%20(Energiedragers%20eq%20%27E006588%27))%20and%20((CentraleDecentraleProductie%20eq%20%27E007022%27))&%24select=ID%2C%20CentraleDecentraleProductie%2C%20Energiedragers%2C%20Perioden%2C%20ElektriciteitTJ_3&%24format=json

// https://opendata.cbs.nl/ODataFeed/odata/80030ned/TypedDataSet?%24filter=((Energiedragers%20eq%20%27E006588%27)%20or%20(Energiedragers%20eq%20%27E006590%27))&%24select=ID%2C%20CentraleDecentraleProductie%2C%20Energiedragers%2C%20Perioden%2C%20ElektriciteitTJ_3

import { Chart, EnergyType } from "../../../types/builder";

// https://opendata.cbs.nl/ODataFeed/odata/80030ned/TypedDataSet?%24

// filter secction with the energy carries

// https://opendata.cbs.nl/ODataFeed/odata/80030ned/TypedDataSet?%24filter=((Energiedragers%20eq%20%27E006602%27))select=ID%2C%20CentraleDecentraleProductie%2C%20Energiedragers%2C%20Perioden%2C%20ElektriciteitTJ_3

// filter=((Energiedragers%20eq%20%27E006560%27)%20or%20(Energiedragers%20eq%20%27E006461%27))


// select secction with the centra/uncentral, energie carrues, periode, Eletricity as value and format json

// select=ID%2C%20CentraleDecentraleProductie%2C%20Energiedragers%2C%20Perioden%2C%20ElektriciteitTJ_3&%24format=json


// the class need to list the energy carries selected and add to the filter section.
// then on the select section need to check if the chip has heat and eletricity an add to the section


const BASEURL = 'https://opendata.cbs.nl/ODataFeed/odata/80030ned/TypedDataSet?%24';

class QueryBuilder {

    constructor(private chart: Chart){}

    private getEnergyFilters() {
        const totalProduct = '%20and%20((CentraleDecentraleProductie%20eq%20%27E007022%27))'
        const filterQuery = `filter=(${
            this.chart.chips.map(chip => `(Energiedragers%20eq%20%27${encodeURIComponent(chip.dataValue)}%27)`).join('%20or%20')
          })`;
        return filterQuery + totalProduct;
    }

    private getUnitySelected() {
        const selectQuery = `&%24select=ID%2C%20CentraleDecentraleProductie%2C%20Energiedragers%2C%20Perioden%2C%20`
        if (this.chart.chips[0].unity === EnergyType.ELETRICITY) {
            return selectQuery + EnergyType.ELETRICITY
        } else {

            return selectQuery + EnergyType.HEAT
        }
    }

    build() {
        const filter = this.getEnergyFilters();
        const select = this.getUnitySelected();
        const final = `${BASEURL + filter + select + '&%24format=json'}`;
        return final;
    }
}


export default QueryBuilder;