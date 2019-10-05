var Sprite = Class.extend({
    init: function(img,x,y,scale){
        this.img = img;
        this.scale = scale;
        this.x = x;
        this.y = y;
        this.xorigin = 0.5;
        this.yorigin = 0.5;
    },

    update:function(){},

    getWidth: function(){
        return this.img.width*this.scale;
    },

    getHeight: function(){
        return this.img.height*this.scale;
    },

    render:function(ctx,scale=1){
        var w = this.getWidth()*scale;
        var h = this.getHeight()*scale;
        ctx.drawImage(this.img,this.x-w*this.xorigin,this.y-h*this.yorigin,this.img.width*this.scale*scale,this.img.height*this.scale*scale);
    }
})