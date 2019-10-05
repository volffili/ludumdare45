var Lvl1State = State.extend({

    init: function(game){
        this._super(game);
        this.game = game;
        this.terrain = new Terrain(game);
        this.player = new Player(this.game,320,160);
        this.cameraX = 0;
        this.cameraY = 0;
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },

    update:function(){
        this.player.update();


        collidingTiles = [];


    },

    render:function(ctx) {
        this.cameraX = Math.max(0, this.player.x -ctx.width/2);
        this.cameraY = Math.max(0, this.player.y -ctx.height/2);
        this.cameraX = Math.min(this.cameraX, this.terrain.tileSize * this.terrain.width-ctx.width);
        this.cameraY = Math.min(this.cameraY, this.terrain.tileSize * this.terrain.height-ctx.height);

        ctx.clearAll();
        this.terrain.render(ctx, this.cameraX,this.cameraY);
        this.player.render(ctx, 1, this.cameraX, this.cameraY);
    }

});

