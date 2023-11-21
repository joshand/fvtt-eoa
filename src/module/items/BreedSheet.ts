export default class EoAItemSheet extends ItemSheet{
    get template(){
        return `systems/eoa/templates/sheets/${this.item.data.type}-sheet.html`;

    }
}