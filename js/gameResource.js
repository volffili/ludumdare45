var GameResources = Class.extend({
    init: function(callbackAfterLoad){
        this.imgRoot = "images/";
        this.imagesToLoad = {
            planet: "planet.png",
            cloud: "cloud.png",
            tileset: "tileset.png"
        };

        this.images = {};
        this.callbackAfterLoad = callbackAfterLoad;
        this.loadImages();
    },

    loadImages: function(){
        for(idx in this.imagesToLoad){
            var img = new Image();
            img.src = this.imgRoot+this.imagesToLoad[idx];
            img.onload = this.testLoadingDone.bind(this);
            this.images[idx] = img;
        }
    },

    testLoadingDone: function(){
        if(Object.keys(this.images).length >= Object.keys(this.imagesToLoad).length) {
            this.callbackAfterLoad();
        }
    },

});
