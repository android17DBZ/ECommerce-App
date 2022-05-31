/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************************************************************************************!*\
  !*** ../../../../../../../../DevEcoStudioProjects/APPinterface/entry/src/main/ets/MainAbility/pages/page.ets?entry ***!
  \*********************************************************************************************************************/
class Page extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__value = new ObservedPropertySimple(0, this, "value");
        this.rating_value = 4.3;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.value !== undefined) {
            this.value = params.value;
        }
        if (params.rating_value !== undefined) {
            this.rating_value = params.rating_value;
        }
    }
    aboutToBeDeleted() {
        this.__value.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get value() {
        return this.__value.get();
    }
    set value(newValue) {
        this.__value.set(newValue);
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
        Text.create('Detail');
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
        Stack.create({ alignContent: Alignment.BottomEnd });
        Stack.width('100%');
        Stack.height(250);
        Stack.backgroundColor(0xFFC0CB);
        Stack.borderRadius(12);
        Stack.align(Alignment.BottomEnd);
        Image.create({ "id": 16777236, "type": 20000, params: [] });
        Image.width(320);
        Image.height(250);
        Image.align(Alignment.Center);
        Column.create();
        Column.backgroundColor(Color.White);
        Column.borderRadius(10);
        Column.padding({ top: 2 });
        Column.width(70);
        Column.height(70);
        Flex.create({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceEvenly });
        Flex.backgroundColor(0x1A1C23);
        Flex.borderRadius(9);
        Flex.padding(3);
        Flex.width(63);
        Flex.height(63);
        Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceAround });
        Flex.width('100%');
        Flex.height(18);
        Rating.create({ rating: this.rating_value });
        Rating.stars(1);
        Rating.width(17);
        Rating.height(17);
        Rating.pop();
        Text.create('4.5');
        Text.fontSize(15);
        Text.fontColor(Color.White);
        Text.pop();
        Flex.pop();
        Text.create('200 Reviews');
        Text.fontSize(12);
        Text.fontColor(Color.White);
        Text.pop();
        Flex.pop();
        Column.pop();
        Stack.pop();
        Row.create();
        Row.width(20);
        Row.height(2);
        Row.pop();
        Flex.create({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween });
        Flex.width('100%');
        Flex.height(80);
        Flex.padding({ top: 16, bottom: 16 });
        Text.create('Running Unisex Shoes');
        Text.fontSize(18);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Text.create('$2,200');
        Text.fontSize(15);
        Text.fontWeight(FontWeight.Bold);
        Text.fontColor(0x1B1B1C);
        Text.pop();
        Flex.pop();
        Column.create();
        Column.width('100%');
        Column.height(80);
        Column.padding({ bottom: 12 });
        Text.create("These white open sandals shoes give you all the comfort of sandals but with the cushioning support of a running shoe.");
        Text.fontSize(12);
        Text.fontColor(0xDCDCDC);
        Text.pop();
        Text.create("The dual straps adjust to keep your feet secure, and the ");
        Text.fontSize(12);
        Text.fontColor(0xDCDCDC);
        Text.pop();
        Row.create();
        Row.width('100%');
        Row.height(10);
        Text.create('velcro fasteners make this shoe a breeze to');
        Text.fontSize(12);
        Text.fontColor(0xDCDCDC);
        Text.pop();
        Text.create('Read More...');
        Text.fontSize(12);
        Text.pop();
        Row.pop();
        Column.pop();
        Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween });
        Flex.width('100%');
        Flex.height(50);
        Text.create('Color');
        Text.fontSize(16);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
        Button.backgroundColor(0x1E90FF);
        Button.width(25);
        Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
        Button.backgroundColor(Color.White);
        Button.width(13);
        Button.pop();
        Button.pop();
        Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
        Button.backgroundColor(Color.Yellow);
        Button.width(25);
        Button.pop();
        Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
        Button.backgroundColor(0xDB7093);
        Button.width(25);
        Button.pop();
        Counter.create();
        Counter.backgroundColor(0xF5F5F5);
        Counter.onInc(() => this.value++);
        Counter.onDec(() => {
            if (this.value != 1) {
                this.value--;
            }
        });
        Text.create(this.value.toString());
        Text.fontSize(14);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Counter.pop();
        Flex.pop();
        Flex.create({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween });
        Flex.width('100%');
        Flex.height(110);
        Flex.padding({ bottom: 16 });
        Text.create('Available Sizes');
        Text.fontSize(15);
        Text.fontWeight(FontWeight.Bold);
        Text.pop();
        Flex.create({ direction: FlexDirection.Row, alignItems: ItemAlign.Stretch, justifyContent: FlexAlign.SpaceBetween });
        Flex.backgroundColor(Color.White);
        Flex.width('100%');
        Flex.height(50);
        Button.createWithLabel('6 inches', { type: ButtonType.Normal });
        Button.borderRadius(6);
        Button.backgroundColor(0xF5F5F5);
        Button.width(69);
        Button.height(35);
        Button.fontColor(Color.Black);
        Button.fontSize(9);
        Button.pop();
        Button.createWithLabel('7 inches', { type: ButtonType.Normal });
        Button.borderRadius(6);
        Button.backgroundColor(0xF5F5F5);
        Button.width(68);
        Button.fontColor(0x000000);
        Button.fontSize(9);
        Button.fontWeight(FontWeight.Bold);
        Button.pop();
        Button.createWithLabel('8 inches', { type: ButtonType.Normal });
        Button.borderRadius(6);
        Button.backgroundColor(Color.Blue);
        Button.width(68);
        Button.fontSize(9);
        Button.fontWeight(FontWeight.Bold);
        Button.pop();
        Button.createWithLabel('9 inches', { type: ButtonType.Normal });
        Button.borderRadius(6);
        Button.backgroundColor(0xF5F5F5);
        Button.width(68);
        Button.fontColor(0x000000);
        Button.fontSize(9);
        Button.fontWeight(FontWeight.Bold);
        Button.pop();
        Flex.pop();
        Flex.pop();
        Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween });
        Flex.width('100%');
        Flex.height(90);
        Flex.padding({ bottom: 12, left: 8, right: 8 });
        Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
        Button.width(40);
        Button.height(40);
        Button.backgroundColor(Color.White);
        Image.create({ "id": 16777230, "type": 20000, params: [] });
        Image.width(40);
        Image.height(40);
        Button.pop();
        Flex.create({ direction: FlexDirection.Row, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceAround });
        Flex.backgroundColor(Color.Blue);
        Flex.width(220);
        Flex.height(50);
        Flex.borderRadius(8);
        Text.create('Add to Cart');
        Text.fontSize(16);
        Text.fontWeight(FontWeight.Bold);
        Text.fontColor(Color.White);
        Text.pop();
        Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
        Button.width(40);
        Button.height(40);
        Button.backgroundColor(0xF5F5F5);
        Image.create({ "id": 16777222, "type": 20000, params: [] });
        Image.width(20);
        Image.height(20);
        Button.pop();
        Flex.pop();
        Flex.pop();
        Column.pop();
    }
}
loadDocument(new Page("1", undefined, {}));

/******/ })()
;
//# sourceMappingURL=page.js.map