var States = {
    LOADING: 0,
    MENU: 1,
    GAME: 2,
    INTRO: 3
}

var Game = Class.extend({

    init: function(){
        this.canvas = new Canvas(640,480);


        this.input = new InputHandler({
            left:     74,
            up:       73,
            right:    76,
            fire: 	  68
        });

        this.currentState = new LoadState(this);
        this.nextState = States.LOADING;
        this.lastTime = 0;
        this.delta = 0;
        this.currentTime = 0;
    },

    run: function(){
        var self = this;

        this.canvas.animate(function(){

            self.currentTime = (new Date()).getTime();
            self.delta = (self.currentTime - self.lastTime) / 1000;

            if(self.nextState !== States.NONE){
                switch(self.nextState){
                    case States.MENU:
                        self.currentState = new MenuState(self);
                        break;
                    case States.GAME:
                        self.currentState = new GameState(self);
                        break;
                    case States.INTRO:
                        self.currentState = new IntroState(self);
                        break;
                }
                self.nextState = States.NONE;
            }

            self.currentState.handleInputs(self.input);
            self.currentState.update();
            self.currentState.render(self.canvas.ctx);

            self.lastTime = self.currentTime;
        });
    }
});