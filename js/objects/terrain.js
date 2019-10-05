var Terrain = Class.extend({

    init: function (game) {
        this.game = game
        this.tileSize = 32;
        this.tiles = loadTiles(this.tileSize, game);
        this.height = this.tiles.length;
        this.width=this.tiles[0].length;


    },

    render: function (ctx, cameraX, cameraY) {

        var firstRow = Math.floor(cameraY / this.tileSize);
        var firstColl = Math.floor(cameraX / this.tileSize);

        for(i =firstRow; i<Math.min(this.height, firstRow+Math.floor(ctx.height / this.tileSize)); i++){
            row = this.tiles[i];
            for(j=firstColl; j < Math.min(this.width, firstColl+Math.floor(ctx.width / this.tileSize)); j++){
                tile = this.tiles[i][j];
                //tile.render(ctx, i*this.tileSize - cameraX, j*this.tileSize - cameraY);
                tile.render(ctx, cameraX, cameraY);
            }
        }

    }

});

function loadTiles(tileSize, game) {
    var data = [2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 1,
        1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
        2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2,
        1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2,
        2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1];

    var height = 20;
    var width = 20;
    var tiles = [];

    for (i = 0; i < height; i++) {
        var row = [];
        for (j = 0; j < width; j++) {
            var tile = new Tile(data[i * width + j], tileSize*j, tileSize*i, game);
            row.push(tile)
        }
        tiles.push(row);
    }
    return tiles;
}
