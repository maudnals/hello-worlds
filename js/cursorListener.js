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
                    }
                    if (planets[this.id]) {
                        updateState(planets[this.id]);
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
