window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        // start app?

        var id = function(element) {

            return document.getElementById(element);
        };



        var ground = id('ground');

        var groundPosition = {
            x: 0,
            y: 0
        };

        var girl = {
            id: id('girl'),
            x: 20,
            y: ground.offsetHeight,
            velocity: 20
        }; //so start above ground


        var plotObject = function(obj, coordinates) { //coordinates is an array
            // changed origin point from top left to be congruent with a classical schema
            //relocated origin point of placed objects to the bottom left
            obj.style.left = coordinates.x + 'px';
            obj.style.top = document.querySelector('body').offsetHeight - coordinates.y - obj.offsetHeight + 'px';

        };

        plotObject(ground, groundPosition);
        plotObject(girl.id, girl);

        document.onkeydown = function(e) {
            var evtobj = window.event ? event : e;

            if (evtobj.keyCode == 37) { //left arrow pressed
                girl.x += -5; //change x coordinate of girl by negative one
            }

            if (evtobj.keyCode == 39) { //right arrow pressed
                girl.x += 5; //change x coordinate of girl by positive one
            }

            // if(evtobj.keyCode==38) {  //up arrow pressed
            //     girlPosition.y += 5;
            // }

            // if(evtobj.keyCode==40?) {  //down arrow pressed
            //     girlPosition.y += 5;
            // }

            plotObject(girl.id, girl);
        }

        document.onkeyup = function() { //function fires one at a time instead of keydown  all the time
            var evtobj = window.event ? event : e


            if (evtobj.keyCode == 38 && girl.velocity === 20) { //allowed to move if v == 20


                var gravity = -1;

                var jump = setInterval(function() {
                    girl.y += girl.velocity;
                    plotObject(girl.id, girl);
                    girl.velocity += gravity;

                    if (girl.velocity <= -21) {
                        girl.velocity = 20
                        clearInterval(jump)
                    }
                }, 50); //up arrow pressed

            }


        }

    })

}
