/**
 * Created by jasonnatividad on 3/29/17.
 */
"use strict";





(function(){



    document.addEventListener("keyup", playSound,false);

    var sounds = document.getElementsByTagName("audio");

    var allKeys = document.querySelectorAll(".key");

    //var dataKeys = document.querySelectorAll("[data-key='65']");

    console.log(dataKeys[0]);

    console.log(sounds);



    function playSound(keyPressed) {

        switch (keyPressed.key) {
            case "a":
                sounds[0].play();
                break;
            case "s":
                sounds[1].play();
                break;
            case "d":
                sounds[2].play();
                break;
            case "f":
                sounds[3].play();
                break;

            case "g":
                sounds[4].play();
                break;
            case "h":
                sounds[5].play();
                break;

            case "j":
                sounds[6].play();
                break;

            case "k":
                sounds[7].play();
                break;

            case "l":
                sounds[8].play();
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }



    }



})();