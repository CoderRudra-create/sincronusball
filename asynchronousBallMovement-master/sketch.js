var database,canvas
var allPlayers,playerCount,gameState=0
var form, game, player
function setup(){
    database=firebase.database ()
    createCanvas(500,500);
game=new Game()
game.getState()
game.start()

}

function draw(){
   if (playerCount==4){
       game.updateState(1)
   }
   if (gameState==1)
   {
       clear()
       game.play()
   }
}


