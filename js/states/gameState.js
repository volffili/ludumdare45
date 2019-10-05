var GameState = State.extend({
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
        ctx.fillStyle    = '#0000ff';
        ctx.fillRect(20, 20, 150, 400);
    }

});