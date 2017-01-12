// Todo today:

//OK Better init only based on data (not on dom classes)
//OK Position generator
//OK Fix move transition
//OK Better text display
//OK Smooth transition
//OK Enrich content

// Click vs fuse - Display text on click
// cool button
// Refactor
// Templating
//rotate planet (see example earth)
// put next to earth for comparison
// UX angle calculation


/* ------------------
CURSOR LISTENER
------------------ */

let cursorListener = (function() {

    function updateState(current, last = none) {
        state.currentPlanet = current;
        state.lastPlanet = last;
    }

    // To be called hen DOM is ready
    function init() {

        AFRAME.registerComponent('cursor-listener', {

            init: function() {
                let that = this.el;
                this.el.addEventListener('click', function() {

                    // this.el is the entity on which cursor-listener is present as attribute (= the spheres)
                    // Click is like gaze

                    if (that === document.querySelector('#leaveButton')) {
                        updateState(none, state.currentPlanet);

                        if ('speechSynthesis' in window) {
                            speechSynthesis.cancel();
                        }
                    }
                    if (planets[this.id]) {
                        updateState(planets[this.id]);


                        if ('speechSynthesis' in window) {
                            let name = planets[this.id].name;
                            let specificity = planets[this.id].specificity;
                            let text = name + specificity;
                            let msg = new SpeechSynthesisUtterance();

                            let voices = window.speechSynthesis.getVoices();
                            msg.voice = voices[66];
                            // msg.voice = voices["Google UK English Female"];

                            msg.rate = 0.9;
                            //https://codepen.io/SteveJRobertson/pen/emGWaR

                            //msg.pitch = $('#pitch').val();
                            msg.text = text;
                            speechSynthesis.speak(msg);
                        }
                    }
                    renderer.updateView();
                });
            }
        });
    }

    return {
        init: init
    }

})();
