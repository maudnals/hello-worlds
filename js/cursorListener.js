// Todo today:
//OK Better init only based on data (not on dom classes)
//OK Position generator
// Click vs fuse - Display text on click
// Fix move transition
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

// when ready:
let cursorListener = (function() {

    function updateState(current, last = none) {
        state.currentPlanet = current;
        state.lastPlanet = last;
    }

    function init() {
        console.log('init');

        AFRAME.registerComponent('cursor-listener', {
            init: function() {

                let that = this.el;

                this.el.addEventListener('click', function() {

                    //             // this.el is the entity (= the sphere)
                    //             // this becomes this.el
                    //             // click is like gaze
                    // console.log(that + ' is stared at or clicked on.');

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
