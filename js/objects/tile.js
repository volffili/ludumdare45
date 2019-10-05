var Tile = Class.extend({

    init: function(tileType,img){
        this.tileType=tileType;2
        this.size = 32;
    },

    render:function(ctx, x, y){
        ctx.drawImage(tileset,x,y,w,h,64,ys,ws,hs);
        ctx.fillRect(x, y, this.size, this.size);
    }

});