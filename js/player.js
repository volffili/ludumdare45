var Player = Sprite.extend({

    anim:{
        move:{
            start: 0,
            end: 6,
            speed: 10
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
            speed: 10
        }
    },


    init: function(game,x,y){
        this.state = 'idle';
        this.game = game;
        this._super(game.resources.images.player,x,y,2,2,0,21,21);
        this.friction = Math.pow(0.82,60);
        this.xmov = 0;
        this.ymov = 0;
        this.xacc = 0;
        this.yacc = 0;
        this.currentAnim = this.anim.idle;
        this.frame = this.currentAnim.start;
        this.energy = 100;
    },

    animateIdleOrMove: function(){
        var speed = Math.sqrt(this.xmov*this.xmov+this.ymov*this.ymov)
        this.currentAnim = speed > 1 ? this.anim.move : this.anim.idle;
    },

    jump: function(){
        this.norm = Math.sqrt(this.xmov*this.xmov+this.ymov*this.ymov);
        this.xmov = this.xmov/this.norm*this.game.delta*1500;
        this.ymov = this.ymov/this.norm*this.game.delta*1500;
    },

    walk: function(){
        this.xacc = this.game.input.isDown("right") - this.game.input.isDown("left");
        this.yacc = this.game.input.isDown("down") - this.game.input.isDown("up");

        this.norm = Math.sqrt(this.xacc*this.xacc+this.yacc*this.yacc);
        if(this.norm) {
            this.xacc /= this.norm;
            this.yacc /= this.norm;
        }

        this.xmov += this.xacc*this.game.delta*40*(((this.frame)%6)/6+0.1);
        this.ymov += this.yacc*this.game.delta*40*(((this.frame)%6)/6+0.1);
    },

    updateVars: function(){
        this.xmov *= Math.pow(this.friction,this.game.delta);
        this.ymov *= Math.pow(this.friction,this.game.delta);
        this.prevx = this.x;
        this.prevy = this.y;
        this.x += this.xmov;
        this.y += this.ymov;

        if (this.frame >= this.currentAnim.end) {
            this.frame = this.currentAnim.start;
        }
        this.scalex = (this.xmov < 0) ? -2 : 2;
    },

    update:function(terrain){
        this._super();

        this.energy -= 1* this.game.delta;
        this.frame += this.game.delta * this.currentAnim.speed;

        switch(this.state){
            case 'idle':
            case 'move':
                this.walk();
                this.animateIdleOrMove();

                if(this.game.input.isDown("fire") )
                    this.state = 'attack';
            break;
            case 'attack':
                this.jump();
                this.currentAnim = this.anim.attack;
                this.frame = this.currentAnim.start;
                this.state = 'inair';
            break;
            case 'inair':

                if (this.frame >= this.currentAnim.end) {
                    this.state = 'move';
                    this.currentAnim = this.anim.idle;
                    this.frame = this.currentAnim.start;
                }

            break;
        }

        this.updateVars();
        this.checkCollisions(terrain);

    },

    checkCollisions: function(terrain){
        var collidingTiles = terrain.getCollidingTiles(this);

        for(var i=0; i<collidingTiles.length;++i){
            var tile = collidingTiles[i];
            if (tile.tileType == 3){
                console.log("fire");
                this.x = this.prevx;
                this.y = this.prevy;
            } else if(tile.tileType == 4){
                tile.tileType = 1;
                this.energy += 10;
            } else if(tile.tileType == 5){
                this.energy -= 10 * this.game.delta;
            }
        }

    }
});