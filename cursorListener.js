// Todo:
// Fix click trigger (too fast! see what happens when just hovering a planet)
// Add good cursor transitions
// Display text on click
// Move planet closer (later)
        // replace .planet by .planet-sphere for understanding
// Layout: organize planets by cluster
// Add sun and other habitable planets and cool stuff

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
    let planetEntities = getAllPlanets();
    planetEntities.forEach(function(p) {
        let planetId = p.getAttribute('id');
        console.log('planetId', planetId);
        // Set the sphere's essential attributes
        p.setAttribute('position', planets[p.id].position);
        p.setAttribute('radius', planets[p.id].radius);
        p.setAttribute('src', planets[p.id].texture);
        // Set rotation animation
        let rotationAnimation = document.createElement('a-animation');
        rotationAnimation.setAttribute('attribute', 'rotation');
        rotationAnimation.setAttribute('dur', planets[p.id].rotationPeriod);
        rotationAnimation.setAttribute('to', '0 360 0');
        rotationAnimation.setAttribute('repeat', 'indefinite');
        rotationAnimation.setAttribute('easing', 'linear');
        rotationAnimation.setAttribute('fill', 'forwards');

        // p.innerHTML = '<a-animation attribute="rotation" dur="' 
        // + planets[p.id].rotationPeriod 
        // + '" to="0 360 0" repeat="indefinite" easing="linear" fill="forwards"></a-animation>';
        let moveTowardsAnimation = document.createElement('a-animation');
        moveTowardsAnimation.setAttribute('begin', 'click');
        moveTowardsAnimation.setAttribute('attribute', 'position');
        moveTowardsAnimation.setAttribute('from', planets[p.id].position);
        moveTowardsAnimation.setAttribute('to', '14 10 -14');
        moveTowardsAnimation.setAttribute('dur', '2000');
        moveTowardsAnimation.setAttribute('fill', 'both');

        //let camera = document.get..
        //let rotation = camera.getAttribute('rotation');

        p.append(rotationAnimation);
        p.append(moveTowardsAnimation);


        // <a-animation begin="click" attribute="position" from="280 180 -280" to="14 10 -14" dur="2000" fill="both">

        // Or let e = document.createElement('a-animation');
        // then set the animation attributes
        // then append it with p.appendChild(e);
        // Set planet name component
        let text = document.createElement('a-entity');
        text.setAttribute('class', 'planet-name');
        text.setAttribute('material', 'color: white');
        text.setAttribute('text', 'text: ' + planets[p.id].id);
        text.setAttribute('position', planets[p.id].textPosition);
        text.setAttribute('visible', 'false');

        text.innerHTML = '<a-animation attribute="visible" begin="showPlanetName" to="true"></a-animation>';

        let entity = document.querySelector('#' + planetId + '-entity');
        entity.append(text);


        // let camera = document.querySelector('a-camera');
        // came.append(text);
        //mercury-entity
            //     <a-entity class="planet-name" material="color: white" text="text: Mercury" position="-1 16 -28" visible="false">
            //     <a-animation attribute="visible" begin="showPlanetName" to="true"></a-animation>
            // </a-entity>

    });
    // Append animation
    //<a-animation attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite" easing="linear" fill="forwards"></a-animation>
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
