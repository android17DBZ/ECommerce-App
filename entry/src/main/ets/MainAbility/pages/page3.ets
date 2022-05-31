@Entry
@Component
struct Page3 {
  @State price: number = 1000

  build() {
    Column(){
      Flex({ direction: FlexDirection.Row,justifyContent: FlexAlign.SpaceBetween }) {
        // Text('Hello world').fontSize(50)
        Button({ type: ButtonType.Normal, stateEffect: true }) {
          Image($r("app.media.arr")).width(30).height(30)
        }.width(40).height(40).backgroundColor(0xF5F5F5).borderRadius(5)
        Text('Filter').fontSize(18).padding(5).fontWeight(FontWeight.Bold)
        Button({ type: ButtonType.Normal, stateEffect: true }) {
          Image($r("app.media.dots")).width(38).height(38)
        }.width(40).height(40).backgroundColor(0xF5F5F5).borderRadius(5)
      }.width('100%').height('10%')
      Flex({direction: FlexDirection.Column,justifyContent: FlexAlign.SpaceBetween }){
        Text('Gender').fontSize(16).fontWeight(FontWeight.Bold).width('100%')
        Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Stretch, justifyContent: FlexAlign.SpaceAround })
        {
          Button('Male', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0x0083D8).width(68).fontSize(14).fontWeight(FontWeight.Bold)
          Button('Female', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0xF5F5F5).width(79).height(35).fontColor(Color.Black).fontSize(14).fontWeight(FontWeight.Bold)
          Button('Both', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0xF5F5F5).width(68).fontColor(0x000000).fontSize(14).fontWeight(FontWeight.Bold)

         // Button('9 inches', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0xF5F5F5).width(68).fontColor(0x000000).fontSize(9).fontWeight(FontWeight.Bold)
        }.width('100%').height(100).padding({left:15,right:15,top:25})

      }.width('100%').height(110).padding({bottom:10})
      Flex({direction: FlexDirection.Column,justifyContent: FlexAlign.SpaceBetween }){

        Text('Category').fontSize(15).fontWeight(FontWeight.Bold)

        Flex({direction: FlexDirection.Row,alignItems: ItemAlign.Center,justifyContent: FlexAlign.SpaceBetween }){
          Text('Select Category').fontSize(13).fontWeight(FontWeight.Bold)
          Button({ type: ButtonType.Normal, stateEffect: true }) {
            Image($r("app.media.arr2")).width(25).height(25)
          }.width(25).height(25).backgroundColor(0xF5F5F5).borderRadius(4)
        }.backgroundColor(0xF5F5F5).width('100%').height(30).borderRadius(4).padding({left:14,right:14})
      }.width('100%').height(115).padding({bottom:40})
//
      Flex({direction: FlexDirection.Column,justifyContent: FlexAlign.SpaceBetween }){

        Text('Brand').fontSize(15).fontWeight(FontWeight.Bold)

        Flex({direction: FlexDirection.Row,alignItems: ItemAlign.Center,justifyContent: FlexAlign.SpaceBetween }){
          Text('Select Brand').fontSize(13).fontWeight(FontWeight.Bold)
          Button({ type: ButtonType.Normal, stateEffect: true }) {
            Image($r("app.media.arr2")).width(25).height(25)
          }.width(25).height(25).backgroundColor(0xF5F5F5).borderRadius(4)
        }.backgroundColor(0xF5F5F5).width('100%').height(30).borderRadius(4).padding({left:14,right:14})
      }.width('100%').height(115).padding({bottom:40})
      Text('Price').fontSize(16).fontWeight(FontWeight.Bold).width('100%')
      Row(){
        Slider({value:1000,min:0,max:10000,step:100,style:SliderStyle.OutSet}).blockColor(0x0083D8).trackColor(Color.Gray).selectedColor(0x0083D8).showSteps(true).showTips(true).onChange((value: number, mode: SliderChangeMode) => {this.price = value})
      }.width('100%').height(90).padding({bottom:10})
      Flex({direction: FlexDirection.Column,justifyContent: FlexAlign.SpaceBetween }){
        Text('Sizes').fontSize(16).fontWeight(FontWeight.Bold)
        Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Stretch, justifyContent: FlexAlign.SpaceBetween })
        {
          Button('6 inches', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0xF5F5F5).width(69).height(35).fontColor(Color.Black).fontSize(9)
          Button('7 inches', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0xF5F5F5).width(68).fontColor(0x000000).fontSize(9).fontWeight(FontWeight.Bold)
          Button('8 inches', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0x0083D8).width(68).fontSize(9).fontWeight(FontWeight.Bold)
          Button('9 inches', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0xF5F5F5).width(68).fontColor(0x000000).fontSize(9).fontWeight(FontWeight.Bold)
        }.backgroundColor(Color.White).width('100%').height(50)

      }.width('100%').height(140).padding({bottom:40})
      Flex({direction: FlexDirection.Row,justifyContent: FlexAlign.SpaceAround }){
        Button('Clear All',{type: ButtonType.Normal, stateEffect: true }).borderRadius(6).fontColor(Color.Black).fontSize(16).backgroundColor(0xF5F5F5).width(140).height(40)
        Button('Add',{type: ButtonType.Normal, stateEffect: true }).borderRadius(6).fontColor(Color.White).fontSize(16).backgroundColor(0x0083D8).width(140).height(40)

      }

    }.padding(20)
  }
}