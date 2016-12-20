// Todo:
// Fix click trigger (too fast! see what happens when just hovering a planet)
// Add good cursor transitions
// Display text on click
// Move planet closer (later)

// #1 Global layout
// #2 Cursor feedback
// #3 Selected planet: immersion and display text

// Learnings: 
// everything must be an entity
// animations are tricky. esp .visibility
// document.addEventListener("DOMContentLoaded"


// Hover: cursor changes and planet display
// Click: info
//const sky = document.querySelector('a-sky'); doesn't work when called globally -> self-calling anonymous function?

// function updateState() {
// }

// Cool animation that doesn't work:
// let skyAnimation = document.querySelector('#skyAnimation');
// skyAnimation.setAttribute('from', 'whitesmoke');
// skyAnimation.setAttribute('to', planets[this.id].color);
// console.log("skyAnimation", skyAnimation);
// sky.setAttribute('color', planets[this.id].color);


const radiusFocus = 120;

let state = {
    currentPlanet: 'none'
};

/* ------------------
UTILS
------------------ */

function getOtherPlanets() {
    let currentPlanetId = state.currentPlanet.id;
    let otherPlanets = document.querySelectorAll('.planet:not(#' + currentPlanetId + ')');
    return otherPlanets;
}

function getAllPlanets() {
    return document.querySelectorAll('.planet');
}

/* ------------------
DISPLAY
------------------ */

function checkObserving() {
    return !(state.currentPlanet === 'none');
}

function updatePlanets() {
    if (checkObserving()) {
        // Otherwise hide all other planets
        let otherPlanets = getOtherPlanets();
        otherPlanets.forEach(p => {
            p.setAttribute('visible', 'false');
            //p.emit('hidePlanet');
        });
    } else {
        // If no planet is current (= none on focus): make all visible
        let allPlanets = getAllPlanets();
        allPlanets.forEach(p => {
            p.setAttribute('visible', 'true');
            //p.emit('showPlanet');
        });
    }
}

function updateText() {
    if (checkObserving()) {
        document.querySelector('#' + state.currentPlanet.id + '-entity>.planet-name').setAttribute('visible', 'true');
    } else {
        let allPlanets = getAllPlanets();
        allPlanets.forEach(p => {
            let planetName = document.querySelector('#' + p.id + '-entity>.planet-name');
            if (planetName) {
                planetName.setAttribute('visible', 'false');
            }
        });
    }
}

function updateSky() {
    const sky = document.querySelector('a-sky');
    if (checkObserving()) {
        sky.emit('darkenSky');
    } else {
        sky.emit('resetSky');
    }
}

function updateView() {
    updateSky();
    updatePlanets();
    updateText();
    //document.querySelector('#mercury').emit('showPlanetName');
}

function intializeAll() {
    var planetEntities = getAllPlanets();
    planetEntities.forEach(function(p) {
        // should be replaced by planet-sphere
        let planetId = p.getAttribute('id');
        console.log("planetId", planetId);
        p.setAttribute('position', planets[p.id].position);
        p.setAttribute('radius', planets[p.id].radius);
        p.setAttribute('src', planets[p.id].texture);
    });
    //planetIdclass="planet" position="0 180 -400" radius="2.440" src="img/2k_mercury.jpg"
}

/* ------------------
MAIN
------------------ */

document.addEventListener("DOMContentLoaded", function() {
    intializeAll();
});

AFRAME.registerComponent('cursor-listener', {

    init: function() {
        const sky = document.querySelector('a-sky');
        //console.log(this);

        this.el.addEventListener('mouseleave', function() {
            state.currentPlanet = 'none';
            updateView();
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

            updateView();
        });
    }
});
