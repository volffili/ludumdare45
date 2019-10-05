var Lvl1State = State.extend({

    init: function(game){
        console.log("Creating lvl1");
        this._super(game);
        this.tiles = loadTiles();
        console.log("Terrain loaded")
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },

    update:function(){

    },
    render:function(ctx){
        ctx.clearAll();
        for(i = 0; i < this.tiles.length; i++){
            row = this.tiles[i];
            for(j=0; j<row.length;j++){
                tile = this.tiles[i][j];
                tile.render(ctx, 10,10);
            }
        }
    }

});

function loadTiles(){
    debugger;
    var tiles=[];
    for(i=0;i<10;i++){
        var row = [];
        for(j=0;j<10;j++){
            var tileType=0;
            var tile = new Tile(tileType);
            row.push(tile)
        }
        tiles.push(row)
    }
    return tiles;
}