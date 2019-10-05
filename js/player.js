var Player = Sprite.extend({

    anim:{
        move:{
            start: 0,
            end: 6,
            speed: 0.1
        },
        idle:{
            start: 7,
            end: 12,
            speed: 7
        },
        backslide:{
            start: 13,
            end: 15,
            speed: 0.1
        },
        chew:{
            start: 16,
            end: 22,
            speed: 0.1
        },
        attack:{
            start: 23,
            end: 30,
            speed: 0.1
        }
    },


    init: function(game,x,y){
        this.game = game;
        this._super(game.resources.images.player,x,y,2,0,21,21);
        this.friction = Math.pow(0.82,60);
        this.xmov = 0;
        this.ymov = 0;
        this.xacc = 0;
        this.yacc = 0;
        this.currentAnim = this.anim.idle;
        this.frame = this.currentAnim.start;
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