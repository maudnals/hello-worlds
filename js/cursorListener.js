// Todo today:
// Refactor
// Better init only based on data (not on dom classes)
// Position generator
// Click vs fuse - Display text on click
// Layout: organize planets by cluster
// Fix move transition
// Enrich content

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
// let cursorListener = function() {}
AFRAME.registerComponent('cursor-listener', {

    init: function() {

        // this.el.addEventListener('mouseleave', function() {
        //     // state.currentPlanet = 'none';
        //     // renderer().updateView();
        // });

        // just on hover: showPlanetName

        let that = this.el;

        this.el.addEventListener('click', function() {
            // this.el is the entity (= the sphere)
            // this becomes this.el
            // click is like gaze
            
            if (that === document.querySelector('#leaveButton')){
                state.lastCurrentPlanet = state.currentPlanet;
                state.currentPlanet = 'none';
                renderer().updateView();
            }

            //console.log(this.id + ' is stared at or clicked on.');

            if (planets[this.id]) {
                state.currentPlanet = planets[this.id];
            }

            renderer().updateView();
        });
    }
});
