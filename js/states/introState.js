var IntroState = State.extend({
    init: function(game){
        this._super(game);
        this.zoom = 0.8;
    },

    handleInputs:function(input){
        /*for example
        if(input.isDown("right")){ do something }*/
    },

    update:function(){

    },

    render:function(ctx){
        this.zoom += 0.0007;
        ctx.clearAll();
        ctx.fillStyle    = '#ff00ff';
        var img_planet = this.game.resources.images.planet;
        var w = img_planet.width*this.zoom;
        var h = img_planet.height*this.zoom;
        var x = (ctx.width - w)/2;
        var y = (ctx.height - h)/2;
        ctx.drawImage(img_planet,x,y,w,h);
    }

});