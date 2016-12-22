/* ------------------
RENDERER
------------------ */


let renderer = (function() {

    let sky;
    let leaveButton;

    function init() {
        leaveButton = document.querySelector('#leaveButton');
        //this.sky = document.querySelector("a-sky");
        sky = document.querySelector("a-sky");
        // this.skky = document.querySelector("a-sky");
        // this.tss = document.querySelector("a-sky");
        //console.log('sky', this.sky);
    }

    function updatePlanets() {
        if (utils().checkObserving()) {

            // Unify radius
            document.querySelector('#' + state.currentPlanet.id).setAttribute('radius', radiusFocus);

            let a = new THREE.Vector3(0, 20, -40);
            let yAxis = new THREE.Vector3(0, 1, 0);
            let angle = document.querySelector('a-camera').getAttribute('rotation');
            let angleRad = angle.y * 2 * Math.PI / 360;
            let b = a.applyAxisAngle(yAxis, angleRad);
            let c = b.divideScalar(2);

            let currentPosition = document.querySelector('#' + state.currentPlanet.id).getAttribute('position');

            let sphere = document.querySelector('#' + state.currentPlanet.id);
            let moveAnim = document.createElement('a-animation');
            //moveAnim.setAttribute('id', 'mb-' + planets[p].id);
            moveAnim.setAttribute('begin', 'moveBack');
            moveAnim.setAttribute('attribute', 'position');
            moveAnim.setAttribute('from', state.currentPlanet.defaultPosition);
            moveAnim.setAttribute('to', vectorHelper.getPositionFromVector(c));
            moveAnim.setAttribute('dur', '2000');
            moveAnim.setAttribute('fill', 'both');
            sphere.append(moveAnim);


            // let mbAnimation = document.querySelector('#' + 'mb-' + state.currentPlanet.id);
            // mbAnimation.setAttribute('from', state.currentPlanet.defaultPosition);
            // mbAnimation.setAttribute('to', '0 10 -20');

            // mbAnimation.setAttribute('to', vectorHelper.getPositionFromVector(c));

            //console.log("FOCUS mbAnimation", mbAnimation);
            // Emit animated event
            document.querySelector('#' + state.currentPlanet.id).emit('moveBack');



            // Hide all other planets
            let otherPlanets = utils().getOtherPlanets();
            otherPlanets.forEach(p => {
                p.setAttribute('visible', 'false');
                //p.emit('hidePlanet');
            });

        } else {
            // Make all planets visible
            let allPlanets = utils().getAllPlanets();
            allPlanets.forEach(p => {
                p.setAttribute('visible', 'true');
                //p.emit('showPlanet');
            });

            if (state.lastPlanet !== none) {

                let currentPosition = document.querySelector('#' + state.lastPlanet.id).getAttribute('position');
                let x = vectorHelper.getPositionFromVector(currentPosition);

                let sphere = document.querySelector('#' + state.lastPlanet.id);
                let moveAnim = document.createElement('a-animation');
                moveAnim.setAttribute('begin', 'moveB');
                moveAnim.setAttribute('attribute', 'position');
                moveAnim.setAttribute('from', x);
                moveAnim.setAttribute('to', state.lastPlanet.defaultPosition);
                moveAnim.setAttribute('dur', '2000');
                moveAnim.setAttribute('fill', 'both');
                sphere.append(moveAnim);


                // Emit animated event
                document.querySelector('#' + state.lastPlanet.id).emit('moveB');
                document.querySelector('#' + state.lastPlanet.id).setAttribute('radius', state.lastPlanet.radius);
            }

        }
    }

    function showLeaveButton() {
        leaveButton.setAttribute('visible', 'true');
    }

    function hideLeaveButton() {
        leaveButton.setAttribute('visible', 'false');
    }

    function showPlanetName(planetId) {
        let planetName = document.querySelector('#planet-name-' + planetId);
        if (planetName) {
            planetName.setAttribute('visible', 'true');
        }
    }

    function hidePlanetName(planetId) {
        let planetName = document.querySelector('#planet-name-' + planetId);
        if (planetName) {
            planetName.setAttribute('visible', 'false');
        }
    }

    function updateText() {
        if (utils().checkObserving()) {
            showPlanetName(state.currentPlanet.id);
            showLeaveButton();
        } else {
            let allPlanets = utils().getAllPlanets();
            allPlanets.forEach(p => {
                hidePlanetName(p.id);
            });
            hideLeaveButton();
        }
    }

    function updateSky() {
        if (utils().checkObserving()) {
            sky.emit('darkenSky');
        } else {
            sky.emit('resetSky');
        }
    }

    function updateView() {
        console.log('update view');
        updateText();
        updateSky();
        updatePlanets();
    }

    return {
        init: init,
        updateView: updateView
    }

})();
