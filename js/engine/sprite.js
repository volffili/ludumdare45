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

    render:function(ctx){
        var w = this.img.width*this.scale;
        var h = this.img.height*this.scale;
        ctx.drawImage(this.img,this.x-w*this.xorigin,this.y-h*this.yorigin,this.img.width*this.scale,this.img.height*this.scale);
    }
})