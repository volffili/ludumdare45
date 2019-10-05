var Lvl1State = State.extend({

    init: function(game){
        this._super(game);
        this.game = game;
        this.terrain = new Terrain(game);
        this.nut = new Nut(this.game,this.game.resources.images.nut,32*10,32*5,1);
        this.cameraX = 0;
        this.cameraY = 0;
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },

    update:function(){
        this.nut.update();


        collidingTiles = [];


    },

    render:function(ctx) {
        this.cameraX = Math.max(0, this.nut.x -ctx.width/2);
        this.cameraY = Math.max(0, this.nut.y -ctx.height/2);
        this.cameraX = Math.min(this.cameraX, this.terrain.tileSize * this.terrain.width-ctx.width);
        this.cameraY = Math.min(this.cameraY, this.terrain.tileSize * this.terrain.height-ctx.height);

        ctx.clearAll();
        this.terrain.render(ctx, this.cameraX,this.cameraY);
        this.nut.render(ctx, 1, this.cameraX, this.cameraY);
    }

});

