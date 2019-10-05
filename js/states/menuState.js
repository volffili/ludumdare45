var MenuState = State.extend({
    init: function(game){
        this._super(game);
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },

    update:function(){

    },

    render:function(ctx){
        ctx.clearAll();
        ctx.fillStyle    = '#ff00ff';
        ctx.drawImage(this.game.resources.images.planet,0,0);
    }

});