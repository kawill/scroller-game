window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"}
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?

        var id = function(element){

            return document.getElementById(element);
        };

        var girl = id('girl');
        var ground = id ('ground');
        var groundPosition = {
            x:0,
            y:0
        };
        var girlPosition = {
        x:20 ,
        y: ground.offsetHeight}; //so that start above ground

        var plotObject = function(obj, coordinates) { //coordinates is an array
        // changed origin point from top left to be congruent with a classical schema
        //relocated origin point of placed objects to the bottom left
            obj.style.left = coordinates.x + 'px';
            obj.style.top = document.querySelector('body').offsetHeight - coordinates.y - obj.offsetHeight + 'px';

        };

        plotObject(ground , groundPosition);
        plotObject(girl, girlPosition);

        document.onkeydown=function(e){
            var evtobj = window.event? event : e;

            if(evtobj.keyCode==37) {  //left arrow pressed
                girlPosition.x += -1; //change x coordinate of girl by negative one
            }

            if(evtobj.keyCode==39){  //right arrow pressed
                girlPosition.x += 1; //change x coordinate of girl by positive one
            }

            plotObject(girl, girlPosition);
        }



    })

}