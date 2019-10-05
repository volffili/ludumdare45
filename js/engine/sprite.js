var Sprite = Class.extend({
    init: function(img,x,y,scale=1,angle=0){
        this.img = img;
        this.scale = scale;
        this.x = x;
        this.y = y;
        this.xorigin = 0.5;
        this.yorigin = 0.5;
        this.angle = angle;
    },

    update:function(){},

    getWidth: function(){
        return this.img.width*this.scale;
    },

    getHeight: function(){
        return this.img.height*this.scale;
    },

    render:function(ctx,scale=1, cameraX=0, cameraY=0){
        ctx.save();
        var w = this.getWidth()*scale;
        var h = this.getHeight()*scale;
        ctx.translate(this.x-cameraX,this.y-cameraY);
        ctx.rotate(this.angle*Math.PI/180);
        ctx.drawImage(this.img,-w*this.xorigin,-h*this.yorigin,w*scale,h*scale);
        ctx.restore();
    }
})