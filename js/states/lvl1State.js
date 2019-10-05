var Lvl1State = State.extend({

    init: function(game){
        console.log("Creating lvl1");
        this._super(game);
        this.terrain = new Terrain(game);
        console.log("Terrain loaded");
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },

    update:function(){

    },
    render:function(ctx) {
        ctx.clearAll();
        console.log("Drawing lv1");
        this.terrain.render(ctx, 10,10);
    }

});

