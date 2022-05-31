/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************************************************************************************!*\
  !*** ../../../../../../../../DevEcoStudioProjects/APPinterface/entry/src/main/ets/MainAbility/pages/page3.ets?entry ***!
  \**********************************************************************************************************************/
class Page3 extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('Hello World', this, "message");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    render() {
        Column.create();
        Column.padding(20);
        Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween });
        Flex.width('100%');
        Flex.height('10%');
        // Text('Hello world').fontSize(50)
        Button.createWithChild({ type: ButtonType.Normal, stateEffect: true });
        // Text('Hello world').fontSize(50)
        Button.width(40);
        // Text('Hello world').fontSize(50)
        Button.height(40);
        // Text('Hello world').fontSize(50)
        Button.backgroundColor(0xF5F5F5);
        // Text('Hello world').fontSize(50)
        Button.borderRadius(5);
        Image.create({ "id": 16777225, "type": 20000, params: [] });
        Image.width(30);
        Image.height(30);
        // Text('Hello world').fontSize(50)
        Button.pop();
        Text.create('Filter');
        Text.fontSize(18);
        Text.padding(5);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Button.createWithChild({ type: ButtonType.Normal, stateEffect: true });
        Button.width(40);
        Button.height(40);
        Button.backgroundColor(0xF5F5F5);
        Button.borderRadius(5);
        Image.create({ "id": 16777226, "type": 20000, params: [] });
        Image.width(38);
        Image.height(38);
        Button.pop();
        Flex.pop();
        Column.pop();
    }
}
loadDocument(new Page3("1", undefined, {}));

/******/ })()
;
//# sourceMappingURL=page3.js.map