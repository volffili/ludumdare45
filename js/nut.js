var Nut = Sprite.extend({
    init: function(game,img,x,y,scale){
        this._super(img,x,y,scale);
        this.game = game;
        this.friction = Math.pow(0.85,60);
        this.xmov = 0;
        this.ymov = 0;
        this.xacc = 0;
        this.yacc = 0;
    },

    update:function(){
        this._super();
        this.xacc = this.game.input.isDown("right") - this.game.input.isDown("left");
        this.yacc = this.game.input.isDown("down") - this.game.input.isDown("up");

        this.norm = Math.sqrt(this.xacc*this.xacc+this.yacc*this.yacc);
        if(this.norm) {
            this.xacc /= this.norm;
            this.yacc /= this.norm;
        }

        this.xmov += this.xacc*this.game.delta*40;
        this.ymov += this.yacc*this.game.delta*40;
        this.xmov *= Math.pow(this.friction,this.game.delta);
        this.ymov *= Math.pow(this.friction,this.game.delta);
        this.x += this.xmov;
        this.y += this.ymov;
    }
});