var IntroState = State.extend({
    init: function(game){
        this._super(game);
        this.totalScale = 0.8;
        this.sprites = [];
        //planet
        var ctx = this.game.canvas.ctx;
        this.planet = new Sprite(this.game.resources.images.planet,ctx.width/2,ctx.height/2-ctx.height/12,1);

    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },

    update:function(){
    },

    render:function(ctx){

        this.totalScale += this.game.delta*0.02;
        ctx.clearAll();
        ctx.fillStyle = '#ff00ff';

        this.planet.render(ctx,this.totalScale);


        ctx.font         = '20px myfont';
        ctx.fillStyle    = '#ffffff';
        ctx.textBaseline = 'middle';
        ctx.textAlign		 = "center";
        ctx.fillText('There was a lonely planet...', ctx.width/2, ctx.height/12*11);




    }

});