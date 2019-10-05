var Sprite = Class.extend({
    init: function(img,x,y,scale=1,angle=0,w,h){
        this.img = img;
        this.scale = scale;
        this.x = x;
        this.y = y;
        this.xorigin = 0.5;
        this.yorigin = 0.5;
        this.angle = angle;

        this.w = w || this.img.width;
        this.h = h || this.img.height;

        this.currentAnim = {
            start: 0,
            end: 0,
            speed: 0
        }
    },

    update:function(){
        this.frame += this.game.delta*this.currentAnim.speed;
        if(this.frame >= this.currentAnim.end){
            this.frame = this.currentAnim.start;
        }
    },

    getWidth: function(){
        return this.w*this.scale;
    },

    getHeight: function(){
        return this.h*this.scale;
    },

    render:function(ctx,scale=1, cameraX=0, cameraY=0){
        ctx.save();
        var w = this.getWidth()*scale;
        var h = this.getHeight()*scale;
        ctx.translate(this.x-cameraX,this.y-cameraY);
        ctx.rotate(this.angle*Math.PI/180);
        ctx.drawImage(this.img,Math.floor(this.frame*this.w/this.w)*this.w,0,this.w,this.h,-w*this.xorigin,-h*this.yorigin,w*scale,h*scale);
        ctx.restore();
    }
})