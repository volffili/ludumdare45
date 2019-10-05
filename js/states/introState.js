var IntroState = State.extend({
    init: function(game){
        this._super(game);
        this.totalScale = 0.8;
        this.sprites = [];
        //planet
        var ctx = this.game.canvas.ctx;
        this.sprites.push(new Sprite(this.game.resources.images.planet,ctx.width/2,ctx.height/2,this.totalScale));
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },

    update:function(){ },

    render:function(ctx){
        this.totalScale += 0.03*this.game.delta;
        ctx.clearAll();
        ctx.fillStyle = '#ff00ff';

        for(var i in this.sprites){
            var sprite = this.sprites[i];
            sprite.scale = this.totalScale;
            sprite.render(ctx);
        }
    }

});