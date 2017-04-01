/**
 * Created by jasonnatividad on 3/29/17.
 */
"use strict";





(function(){



    document.addEventListener("keydown", playSound,false);

    document.addEventListener("keyup",removeHighlight,false);

    var sounds = document.getElementsByTagName("audio");

    var allKeys = document.querySelectorAll(".key");

    var keyA = document.getElementById("key-a");



    console.log(allKeys[0]);

    //var dataKeys = document.querySelectorAll("[data-key='65']");

    //console.log(dataKeys[0]);

    console.log(sounds);



    function playSound(keyPressed) {

        switch (keyPressed.key) {
            case "a":
                sounds[0].play();
                highlight(allKeys[0]);
                break;
            case "s":
                sounds[1].play();
                highlight(allKeys[1]);
                break;
            case "d":
                sounds[2].play();
                highlight(allKeys[2]);
                break;
            case "f":
                sounds[3].play();
                highlight(allKeys[3]);
                break;

            case "g":
                sounds[4].play();
                highlight(allKeys[4]);
                break;
            case "h":
                sounds[5].play();
                highlight(allKeys[5]);
                break;

            case "j":
                sounds[6].play();
                highlight(allKeys[6]);
                break;

            case "k":
                sounds[7].play();
                highlight(allKeys[7]);
                break;

            case "l":
                sounds[8].play();
                highlight(allKeys[8]);
                break;
            default:
                console.log('Sorry, we are out of ' + keyPressed + '.');
        }



    }

    function highlight(key) {
        key.className += " playing";
        //key.className = "key";
    }


    function removeHighlight() {
        //allKeys[0].className = "key";
        //allKeys[1].className = "key";

        for (var i = 0; i < allKeys.length; i++) {

            allKeys[i].className = "key";
        }
    }



})();