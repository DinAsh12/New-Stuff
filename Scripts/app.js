/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function () {
    "use strict"

    //functional scope
    let AboutButton;

    //About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut() {
        event.currentTarget.style.opacity = 1;
    }

    function HomeContecnt() {
        //Homecontent function scope
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        //About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    /*function ReturnPI() {
        return Math.PI;
    }*/


    function AboutContent() {
        //let number = ReturnPI();
        //console.log("My funky number: " + myNumber);

        let paragraph = document.getElementById("paragraph");

        let mySentence = "Hello, Harkirat here."

        paragraph.textContent = paragraph;
        paragraph.textContent = mySentence;
    }

    function Start() {
        // local variable
        let title = document.title;

        switch (title) {
            case "COMP125 - Home":
                HomeContecnt();
                break;

            case "COMP125 - About":
                AboutContent();

                /*let myNumber = ReturnPI;
                console.Log(myNumber);*/
                break;

            default:
                break;
        }

        //functions inside functions
        /*function outer() {
            let myOuterVariable = 30;
            function innere() {
                function deepInner() {
                    let deepInnerVariable = true;
                    function reallyDeepInside() {
                        function OKThisIsReallyDeep() {
                            let myOuterVariable = "Hello";
                        }
                    }
                }
            }
        }*/

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);
    }

    window.addEventListener("load", Start);
    //window.onload = Start;
})();