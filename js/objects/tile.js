var Tile = Class.extend({

    init: function (tileType, x, y, game) {
        this.tileType = tileType;
        this.x = x;
        this.y = y;
        this.size = 32;
        this.game = game;
    },

    render: function (ctx, cameraX, cameraY) {
        ctx.drawImage(this.game.resources.images.tileset, ((this.tileType - 1) * this.size)+1, 1, this.size-2, this.size-2, this.x - cameraX, this.y - cameraY, this.size, this.size);
    }

});