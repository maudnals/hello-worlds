// Todo:
// Fix click trigger (too fast! see what happens when just hovering a planet)
// Add good cursor transitions
// Add good object transitions when selected
// Remove transitions when relevant 
// Display text on click

// Hover: cursor changes and planet display
// Click: info
//const sky = document.querySelector('a-sky');

// function updateState() {
// }


const radiusFocus = 120;

let state = {
    currentPlanet: 'none'
};

// Helpers

function getOtherPlanets() {
    let currentPlanetId = state.currentPlanet.id;
    let otherPlanets = document.querySelectorAll('.planet:not(#' + currentPlanetId + ')');
    return otherPlanets;
}

function getAllPlanets() {
    return document.querySelectorAll('.planet');
}


AFRAME.registerComponent('cursor-listener', {

    init: function() {

        const cursor = document.querySelector('a-cursor');
        const sky = document.querySelector('a-sky');

        console.log(this);

        this.el.addEventListener('mouseleave', function() {
            state.currentPlanet = 'none';
            sky.emit('resetSky');
            updateVisibility();
        });

        this.el.addEventListener('click', function() {
            // this.el is the entity (= the sphere)
            // this becomes this.el
            // click is like gaze

            console.log(this.id);

            //this.setAttribute('color', 'white'); // this is the sphere... ie the entity


            if (planets[this.id]) {

                state.currentPlanet = planets[this.id];

                // let skyAnimation = document.querySelector('#skyAnimation');
                // skyAnimation.setAttribute('from', 'whitesmoke');
                // skyAnimation.setAttribute('to', planets[this.id].color);
                // console.log("skyAnimation", skyAnimation);
                // sky.setAttribute('color', planets[this.id].color);

                sky.emit('darkenSky');
                updateVisibility();
            }

        });
    }
});

function updateVisibility() {
    if (state.currentPlanet === 'none') {
        // If no planet is current (= none on focus): make all visible
        let allPlanets = getAllPlanets();
        allPlanets.forEach(p => {
            p.setAttribute('visible', 'true');
        });

    } else {
        // Otherwise hide all other planets
        let otherPlanets = getOtherPlanets();
        otherPlanets.forEach(p => {
            p.setAttribute('visible', 'false');
        });
    }
}
