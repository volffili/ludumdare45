var NullState = State.extend({

    init: function(game){
        this._super(game);
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },
    update:function(){},
    render:function(ctx){}

});