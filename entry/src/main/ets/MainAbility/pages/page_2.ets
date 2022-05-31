@Entry
@Component
struct Page_2 {
  @State value: number = 0
  rating_value : number = 4.3;
  build() {
    Column(){
      Flex({ direction: FlexDirection.Row,justifyContent: FlexAlign.SpaceBetween }) {
        // Text('Hello world').fontSize(50)
        Button({ type: ButtonType.Normal, stateEffect: true }) {
          Image($r("app.media.arr")).width(30).height(30)
        }.width(40).height(40).backgroundColor(0xF5F5F5).borderRadius(5)
        Text('Detail').fontSize(18).padding(5).fontWeight(FontWeight.Bold)
        Button({ type: ButtonType.Normal, stateEffect: true }) {
          Image($r("app.media.dots")).width(38).height(38)
        }.width(40).height(40).backgroundColor(0xF5F5F5).borderRadius(5)
      }.width('100%').height('10%')

      Stack({alignContent: Alignment.BottomEnd}) {
        Image($r("app.media.shoes2")).width(320).height(250).align(Alignment.Center)
        Column(){
          Flex({direction: FlexDirection.Column,alignItems:ItemAlign.Center,justifyContent: FlexAlign.SpaceEvenly}) {
            Flex({direction: FlexDirection.Row,justifyContent: FlexAlign.SpaceAround }){
              Rating({ rating: this.rating_value }).stars(1).width(17).height(17)

              Text('4.5').fontSize(15).fontColor(Color.White)
            }.width('100%').height(18)
            Text('200 Reviews').fontSize(12).fontColor(Color.White)
          }.backgroundColor(0x1A1C23).borderRadius(9).padding(3).width(63).height(63)
        }.backgroundColor(Color.White).borderRadius(10).padding({top:2}).width(70).height(70)
      }.width('100%').height(250).backgroundColor(0xFFC0CB).borderRadius(12).align(Alignment.BottomEnd)
      Row(){}.width(20).height(2)
      Flex({direction: FlexDirection.Column,justifyContent: FlexAlign.SpaceBetween }){
        Text('Running Unisex Shoes').fontSize(18).fontWeight(FontWeight.Bold)
        Text('$2,200').fontSize(15).fontWeight(FontWeight.Bold).fontColor(0x1B1B1C)
      }.width('100%').height(80).padding({top:16,bottom:16 })
      Column(){
        Text("These white open sandals shoes give you all the comfort of sandals but with the cushioning support of a running shoe.").fontSize(12).fontColor(0xDCDCDC)
        Text("The dual straps adjust to keep your feet secure, and the ").fontSize(12).fontColor(0xDCDCDC)
        Row(){
          Text('velcro fasteners make this shoe a breeze to').fontSize(12).fontColor(0xDCDCDC)
          Text('Read More...').fontSize(12)
        }.width('100%').height(10)
      }.width('100%').height(80).padding({bottom:12})
      Flex({direction: FlexDirection.Row,justifyContent: FlexAlign.SpaceBetween }){
        Text('Color').fontSize(16).fontWeight(FontWeight.Bold)
        Button({ type: ButtonType.Circle, stateEffect: true }){
          Button({ type: ButtonType.Circle, stateEffect: true }){

          }.backgroundColor(Color.White).width(13)
        }.backgroundColor(0x1E90FF).width(25)
        Button({ type: ButtonType.Circle, stateEffect: true }){

        }.backgroundColor(Color.Yellow).width(25)
        Button({ type: ButtonType.Circle, stateEffect: true }){

        }.backgroundColor(0xDB7093).width(25)
        Counter() {
          Text(this.value.toString()).fontSize(14).fontWeight(FontWeight.Bold)
        }.backgroundColor(0xF5F5F5).onInc(() => this.value++)
        .onDec(() => {
          if (this.value != 1) {
            this.value--
          }
        })
      }.width('100%').height(50)
      Flex({direction: FlexDirection.Column,justifyContent: FlexAlign.SpaceBetween }){
        Text('Available Sizes').fontSize(15).fontWeight(FontWeight.Bold)
        Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Stretch, justifyContent: FlexAlign.SpaceBetween })
        {
          Button('6 inches', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0xF5F5F5).width(69).height(35).fontColor(Color.Black).fontSize(9)
          Button('7 inches', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0xF5F5F5).width(68).fontColor(0x000000).fontSize(9).fontWeight(FontWeight.Bold)
          Button('8 inches', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0x0083D8).width(68).fontSize(9).fontWeight(FontWeight.Bold)
          Button('9 inches', { type: ButtonType.Normal }).borderRadius(6).backgroundColor(0xF5F5F5).width(68).fontColor(0x000000).fontSize(9).fontWeight(FontWeight.Bold)
        }.backgroundColor(Color.White).width('100%').height(50)

      }.width('100%').height(110).padding({bottom:16})
      Flex({direction: FlexDirection.Row,justifyContent: FlexAlign.SpaceBetween}){
        Button({ type: ButtonType.Circle, stateEffect: true }) {
          Image($r("app.media.heart3")).width(40).height(40)
        }.width(40).height(40).backgroundColor(Color.White)
        Flex({direction: FlexDirection.Row, alignItems: ItemAlign.Center,justifyContent: FlexAlign.SpaceAround}){
          Text('Add to Cart').fontSize(16).fontWeight(FontWeight.Bold).fontColor(Color.White)
          Button({ type: ButtonType.Circle, stateEffect: true }) {
            Image($r("app.media.bag")).width(20).height(20)
          }.width(40).height(40).backgroundColor(0xF5F5F5)

        }.backgroundColor(0x0083D8).width(220).height(50).borderRadius(8)
      }.width('100%').height(90).padding({bottom:12,left:8,right:8})




    }.padding(20)

  }
}