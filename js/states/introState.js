var IntroState = State.extend({
    init: function(game){
        this._super(game);
        this.sprites = [];

        //planet
        var ctx = this.game.canvas.ctx;
        this.planet = new Sprite(this.game.resources.images.planet,ctx.width/2,ctx.height/2-ctx.height/12);
    },

    handleInputs:function(input){ },

    update:function(){
        this.planet.scalex += this.game.delta*0.02;
        this.planet.scaley += this.game.delta*0.02;
    },

    render:function(ctx){
        ctx.clearAll();
        ctx.fillStyle = '#ff00ff';

        this.planet.render(ctx);

        ctx.font         = '20px myfont';
        ctx.fillStyle    = '#ffffff';
        ctx.textBaseline = 'middle';
        ctx.textAlign		 = "center";
        ctx.fillText('There was a lonely planet...', ctx.width/2, ctx.height/12*11);
    }

});