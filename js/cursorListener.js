// Todo today:
// Better init only based on data (not on dom classes)
//OK Position generator
// Click vs fuse - Display text on click
// Fix move transition
// Enrich content
// Better text display

// Refactor
// Templating

// function updateState() {
// }
// Cool animation that doesn't work:
// let skyAnimation = document.querySelector('#skyAnimation');
// skyAnimation.setAttribute('from', 'whitesmoke');
// skyAnimation.setAttribute('to', planets[this.id].color);
// console.log("skyAnimation", skyAnimation);
// sky.setAttribute('color', planets[this.id].color);


//     init: function() {

//         // this.el.addEventListener('mouseleave', function() {
//         //     // state.currentPlanet = 'none';
//         //     // renderer().updateView();
//         // });
//         // just on hover: showPlanetName

//         let that = this.el;

//         this.el.addEventListener('click', function() {
//             // this.el is the entity (= the sphere)
//             // this becomes this.el
//             // click is like gaze

//             if (that === document.querySelector('#leaveButton')) {
//                 state.lastCurrentPlanet = state.currentPlanet;
//                 state.currentPlanet = 'none';
//             }

//             //console.log(this.id + ' is stared at or clicked on.');

//             if (planets[this.id]) {
//                 state.currentPlanet = planets[this.id];
//             }

//             renderer.updateView();
//         });
//     }̱


/* ------------------
CURSOR LISTENER
------------------ */

// when ready:
let cursorListener = (function() {

    // function updateState() {
        
    // }

    function init() {
        console.log('init');

        AFRAME.registerComponent('cursor-listener', {
            init: function() {

                let that = this.el;

                this.el.addEventListener('click', function() {

                    console.log('click that', that);
                    //             // this.el is the entity (= the sphere)
                    //             // this becomes this.el
                    //             // click is like gaze
                    //console.log(that + ' is stared at or clicked on.');

                    if (that === document.querySelector('#leaveButton')) {
                        state.lastCurrentPlanet = state.currentPlanet;
                        state.currentPlanet = 'none';
                    }

                    if (planets[this.id]) {
                        state.currentPlanet = planets[this.id];
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
