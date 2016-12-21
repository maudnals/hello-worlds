// Todo today:
// Refactor
// Better init only based on data
// Click vs fuse - Display text on click
// Layout: organize planets by cluster
// Enrich content



// Tech learnings: 
// Everything must be an entity
// Animations (+ transitions) are tricky. esp .visibility
// Document.addEventListener("DOMContentLoaded"

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

// let cursorListener = function() {}
AFRAME.registerComponent('cursor-listener', {

    init: function() {
        console.log("test", this);

        this.el.addEventListener('mouseleave', function() {
            state.currentPlanet = 'none';
            renderer().updateView();
        });

        // just on hover: showPlanetName

        this.el.addEventListener('click', function() {
            // this.el is the entity (= the sphere)
            // this becomes this.el
            // click is like gaze

            console.log(this.id + ' is stared at or clicked on.');

            if (planets[this.id]) {
                state.currentPlanet = planets[this.id];
            }

            renderer().updateView();
        });
    }
});
