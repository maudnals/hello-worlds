/* ------------------
RENDERER
------------------ */


let renderer = (function() {

    let sky;
    let leaveButton;
    let camera;

    function init() {
        leaveButton = document.querySelector('#leaveButton');
        //this.sky = document.querySelector("a-sky");
        sky = document.querySelector('a-sky');
        camera = document.querySelector('a-camera');
        // this.skky = document.querySelector("a-sky");
        // this.tss = document.querySelector("a-sky");
        //console.log('sky', this.sky);
    }

    function createMoveAnim(from, to, trigger) {
        let moveAnim = document.createElement('a-animation');
        moveAnim.setAttribute('begin', trigger);
        moveAnim.setAttribute('attribute', 'position');
        moveAnim.setAttribute('from', from);
        moveAnim.setAttribute('to', to);
        moveAnim.setAttribute('dur', '2000');
        moveAnim.setAttribute('fill', 'both');
        return moveAnim;
    }

    function hidePlanets(planetsArr) {
        planetsArr.forEach(p => {
            p.setAttribute('visible', 'false');
        });
    }

    function showPlanets(planetsArr) {
        planetsArr.forEach(p => {
            p.setAttribute('visible', 'true');
        });
    }

    function hidePlanetName() {
        let planetName = document.querySelector('#planetName');
        planetName.setAttribute('visible', 'false');
    }

    function updatePlanets() {
        if (utils.checkObserving()) {

            // Unify radius
            document.querySelector('#' + state.currentPlanet.id).setAttribute('radius', radiusFocus);

            let a = new THREE.Vector3(0, 20, -40);
            let initNamePosition = new THREE.Vector3(-6, 10, -40);
            let initOKPosition = new THREE.Vector3(-1, 4, -40);
            let yAxis = new THREE.Vector3(0, 1, 0);
            let angle = document.querySelector('a-camera').getAttribute('rotation');
            let angleRad = angle.y * 2 * Math.PI / 360;
            let b = a.applyAxisAngle(yAxis, angleRad);
            let bPrim = initNamePosition.applyAxisAngle(yAxis, angleRad);
            let initOKPositionPrim = initOKPosition.applyAxisAngle(yAxis, angleRad);

            let c = new THREE.Vector3(b.x / 2, b.y / 2 + 5, b.z / 2);

            let d = new THREE.Vector3(initOKPositionPrim.x / 4, initOKPositionPrim.y / 4, initOKPositionPrim.z / 4);

            let e = new THREE.Vector3(bPrim.x / 4, bPrim.y / 4, bPrim.z / 4);

            let currentPosition = document.querySelector('#' + state.currentPlanet.id).getAttribute('position');

            let sphere = document.querySelector('#' + state.currentPlanet.id);


            let moveTowardsUserAnim = createMoveAnim(state.currentPlanet.defaultPosition, vectorHelper.getPositionFromVector(c), 'moveTowardsUser');
            sphere.append(moveTowardsUserAnim);


            let planetName = document.querySelector('#planetName');
            let textAttribute = text = "text: " + state.currentPlanet.id.toUpperCase() + "; font: Cartoon Marker;"
            planetName.setAttribute('text', textAttribute);
            planetName.setAttribute('position', vectorHelper.getPositionFromVector(e));
            planetName.setAttribute('rotation', camera.getAttribute('rotation'));
            planetName.setAttribute('visible', 'true');

            leaveButton.setAttribute('position', vectorHelper.getPositionFromVector(d));
            leaveButton.setAttribute('rotation', camera.getAttribute('rotation'));

            document.querySelector('#' + state.currentPlanet.id).emit('moveTowardsUser');



            // Hide all other planets
            let otherPlanets = utils.getOtherPlanets();
            hidePlanets(otherPlanets);

        } else {
            showPlanets(utils.getAllPlanets());

            if (state.lastPlanet !== none) {
                hidePlanetName();
                moveToInitPos(state.lastPlanet);
                updatePlanetRadius(state.lastPlanet);
            }

        }
    }

    function moveToInitPos(planet) {
        let currentPosition = document.querySelector('#' + planet.id).getAttribute('position');
        let c = vectorHelper.getPositionFromVector(currentPosition);
        let sphere = document.querySelector('#' + planet.id);
        let moveToInitPosAnim = createMoveAnim(c, planet.defaultPosition, 'moveToInitPos');
        sphere.append(moveToInitPosAnim);
        document.querySelector('#' + planet.id).emit('moveToInitPos');
    }

    function updatePlanetRadius(planet) {
        document.querySelector('#' + planet.id).setAttribute('radius', planet.radius);
    }


    function showLeaveButton() {
        leaveButton.setAttribute('visible', 'true');
    }

    function hideLeaveButton() {
        leaveButton.setAttribute('visible', 'false');
    }

    // function showPlanetName() {
    //     let planetName = document.querySelector('#' + planetName);
    //     if (planetName) {
    //         planetName.setAttribute('visible', 'true');
    //     }
    // }

    // function hidePlanetName(planetId) {
    //     let planetName = document.querySelector('#planet-name-' + planetId);
    //     if (planetName) {
    //         planetName.setAttribute('visible', 'false');
    //     }
    // }

    function updateText() {
        if (utils.checkObserving()) {
            showLeaveButton();
        } else {
            hideLeaveButton();
        }
    }

    function updateSky() {
        if (utils.checkObserving()) {
            sky.emit('darkenSky');
        } else {
            sky.emit('resetSky');
        }
    }

    function updateView() {
        console.log('update view');
        updateSky();
        updatePlanets();
        updateText();
    }

    return {
        init: init,
        updateView: updateView
    }

})();
