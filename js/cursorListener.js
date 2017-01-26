// Click vs fuse - Display text on click
// cool button
// Refactor
// Templating
// Put next to earth for comparison
// UX angle calculation


/* ------------------
CURSOR LISTENER
------------------ */

let cursorListener = (function() {

    function updateState(current, last = none) {
        state.currentPlanet = current;
        state.lastPlanet = last;
    }

    function isPlanet(element) {
        // Or with class?
        return (planets[element.id]? true: false);
    }

    function isLeaveButton(element) {
        return (element === document.querySelector('#leaveButton') 
            || element === document.querySelector('#leaveButtonPlane'));
    }

    // To be called hen DOM is ready
    function init() {

        AFRAME.registerComponent('cursor-listener', {

            init: function() {
                let that = this.el;
                let mode = idle;
                let planet = none;

                this.el.addEventListener('click', function() {

                    // this.el is the entity on which cursor-listener is present as attribute (= the spheres)
                    // Click is like gaze

                    console.log("click");

                    if (isLeaveButton(that)) {
                        //updateState(none, state.currentPlanet);

                        console.log("that's a leave button");

                        // if ('speechSynthesis' in window) {
                        //     speechSynthesis.cancel();
                        // }
                    }
                    if (isPlanet(that)) {
                        // updateState(planets[this.id]);
                        console.log("that's a planet");
                        mode = "visit";
                        planet = planets[that.id];

                        // if ('speechSynthesis' in window) {
                        //     let name = planets[this.id].name;
                        //     let specificity = planets[this.id].specificity;
                        //     let text = name + ". " + specificity;
                        //     let msg = new SpeechSynthesisUtterance();
                        //     msg.voice = voices[66]; // ["Google UK English Female"];
                        //     msg.rate = 0.9;
                        //     msg.text = text;
                        //     speechSynthesis.speak(msg);
                        // }
                    }
                    renderer.updateView(mode, planet);
                    // renderer.updateView("observe", planetId);
                    // renderer.updateView("observe", planetId);
                    // renderer.updateView("observe", planetId);
                });
            }
        });
    }

    return {
        updateState: updateState,
        init: init
    }

})();
