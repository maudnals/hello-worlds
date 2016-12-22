// Todo today:
//OK Better init only based on data (not on dom classes)
//OK Position generator
//OK Fix move transition
// Click vs fuse - Display text on click
// Enrich content
// Better text display
// cool button
// Refactor
// Templating
// put next to earth for comparison
// UX angle calculation
// Smooth transition



// function updateState() {
// }
// Cool animation that doesn't work:
// let skyAnimation = document.querySelector('#skyAnimation');
// skyAnimation.setAttribute('from', 'whitesmoke');
// skyAnimation.setAttribute('to', planets[this.id].color);
// console.log("skyAnimation", skyAnimation);
// sky.setAttribute('color', planets[this.id].color);


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
