class Player{
    constuctor(){
        this.name=null 
        this.distance=0
        this.rank=null
        this.index=null
    }
    getCount(){
        var playerCountRef=database.ref ("playerCount")
        playerCountRef.on("value",(data)=>{
            playerCount=data.val()
        })

    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })

    }
     static getPlayersInfo(){
        var playerInfoRef=database.ref ("players")
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val()
        })

    }
}