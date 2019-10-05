var Lvl1State = State.extend({

    init: function(game){
        this._super(game);
        this.terrain = new Terrain(game);
        this.nut = new Nut(this.game,this.game.resources.images.nut,32*10,32*5,1);
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },

    update:function(){
        this.nut.update();
    },

    render:function(ctx) {
        ctx.clearAll();
        this.terrain.render(ctx, 0,0);
        this.nut.render(ctx);
    }

});

