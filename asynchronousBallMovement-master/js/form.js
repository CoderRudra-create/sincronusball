class Form{
    constructor(){
        this.input=createInput("enter nameTag")
        this.button=createButton("start")
        this.greeting=createElement("h2")
    }
    display(){
        var title=createElement("h1")
        title.html("speed rush")
        title.position(150,0)
      this.input.position(160,100)
      this.button.position(170,150)
      this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount()
        this.greeting.html("Hello there "+player.name+" the racer")
        this.greeting.position(350,300)
      })

    }
}