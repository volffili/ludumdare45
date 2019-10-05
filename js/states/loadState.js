var LoadState = State.extend({

    init: function(game){
        this._super(game);
        this.game.resources = new GameResources(this.afterLoad.bind(this));
    },

    afterLoad: function(){
        console.log("going to menu");
        this.game.nextState = States.LVL1;
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },
    update:function(){},
    render:function(ctx){}
});