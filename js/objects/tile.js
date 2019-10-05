var Tile = Class.extend({

    init: function(tileType){
        this.tileType=tileType;
        this.size = 32;
    },

    render:function(ctx, x, y){
        /*ctx.drawImage(tileset,x,y,w,h,64,ys,ws,hs);*/
        if(this.tileType==1){
            ctx.fillStyle    = '#ffb15c';
        }
        else if(this.tileType==2){
            ctx.fillStyle    = '#6bafff';
        }
        else{
            ctx.fillStyle    = '#0000ff';
        }

        ctx.fillRect(x, y, this.size, this.size);
    }

});