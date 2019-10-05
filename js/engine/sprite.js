var Sprite = Class.extend({
    init: function(img,x,y,scalex=1,scaley=1,angle=0,w,h){
        this.w = w || img.width;
        this.h = h || img.height;
        this.img = img;
        this.scalex = scalex;
        this.scaley = scaley;
        this.x = x;
        this.y = y;
        this.xorigin = 0.5;
        this.yorigin = 0.5;
        this.angle = angle;

        this.frame = 0;
        this.currentAnim = {
            start: 0,
            end: 0,
            speed: 0
        }
    },

    update:function(){

    },

    render:function(ctx,scale=1,cameraX=0, cameraY=0){
        ctx.save();
        ctx.translate(this.x-cameraX,this.y-cameraY);
        ctx.rotate(this.angle*Math.PI/180);
        ctx.scale(this.scalex,this.scaley);
        var xsource = Math.floor(this.frame*this.w/this.w)*this.w;
        ctx.drawImage(this.img,xsource,0,this.w,this.h,-this.w*this.xorigin,-this.h*this.yorigin,this.w,this.h);
        ctx.restore();
    }

})