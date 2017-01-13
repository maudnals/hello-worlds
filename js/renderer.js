/* ------------------
RENDERER
------------------ */


let renderer = (function() {

    let sky;
    let leaveButton;
    let camera;

    function init() {
        leaveButton = document.querySelector('#leaveButton');
        sky = document.querySelector('a-sky');
        camera = document.querySelector('a-camera');
    }

    function createMoveAnim(from, to, triggerEvent) {
        let moveAnim = document.createElement('a-animation');
        moveAnim.setAttribute('begin', triggerEvent);
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

    function getCurrentCameraFocusPoint() {

    }

    // function getCurrentPosFromInitPos(initPos){

    // }

    // function getCurrentPos(element){
    //     return getCurrentPosFromInitPos(element.initPos);
    // }

    // On rotate camera
    // update all elements pos?
    // No too expensive


    function updatePlanets() {
        if (utils.checkObserving()) {

            growPlanetRadius(state.currentPlanet);

            let focusPos_init = new THREE.Vector3(0, 20, -40);
            let leaveButtonPos_init = new THREE.Vector3(-1, -2, -40);
            let yAxis = new THREE.Vector3(0, 1, 0);
            let angle = camera.getAttribute('rotation');
            let angleRad = angle.y * 2 * Math.PI / 360;

            let focusPos_updated = focusPos_init.applyAxisAngle(yAxis, angleRad);

            let c = new THREE.Vector3(focusPos_updated.x / 2, focusPos_updated.y / 2 + 5, focusPos_updated.z / 2);

            let namePos_init = new THREE.Vector3(-6, 10, -40);
            let namePos_updated = namePos_init.applyAxisAngle(yAxis, angleRad);
            let namePos_vf = new THREE.Vector3(namePos_updated.x / 4, namePos_updated.y / 4, namePos_updated.z / 4);
            // e

            let sphere = document.querySelector('#' + state.currentPlanet.id);
            let moveTowardsUserAnim = createMoveAnim(state.currentPlanet.defaultPosition, vectorHelper.getPositionFromVector(c), 'moveTowardsUser');
            sphere.append(moveTowardsUserAnim);
            document.querySelector('#' + state.currentPlanet.id).emit('moveTowardsUser');

            let leaveButtonPos_updated = leaveButtonPos_init.applyAxisAngle(yAxis, angleRad);
            leaveButton.setAttribute('position', vectorHelper.getPositionFromVector(leaveButtonPos_updated));
            leaveButton.setAttribute('rotation', camera.getAttribute('rotation'));




            hidePlanets(utils.getOtherPlanets());

        } else {
            showPlanets(utils.getAllPlanets());

            if (state.lastPlanet !== none) {
                moveToInitPos(state.lastPlanet);
                resetPlanetRadius(state.lastPlanet);
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

    function resetPlanetRadius(planet) {
        document.querySelector('#' + planet.id).setAttribute('radius', planet.radius);
    }

    function growPlanetRadius(planet) {
        document.querySelector('#' + planet.id).setAttribute('radius', radiusFocus);
    }


    function showLeaveButton() {
        leaveButton.setAttribute('visible', 'true');
    }

    function hideLeaveButton() {
        leaveButton.setAttribute('visible', 'false');
    }

    function updatePlanetName() {





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


        if (utils.checkObserving()) {

            let planetName = document.querySelector('#planetName');
            let textAttribute = text = "text: " + state.currentPlanet.id.toUpperCase() + "; font: Cartoon Marker;"
            planetName.setAttribute('text', textAttribute);
            planetName.setAttribute('position', vectorHelper.getPositionFromVector(e));
            planetName.setAttribute('rotation', camera.getAttribute('rotation'));
            planetName.setAttribute('visible', 'true');

        } else {
            if (state.lastPlanet !== none) {
                let planetName = document.querySelector('#planetName');
                planetName.setAttribute('visible', 'false');
            }
        }
    }

    function updateLeaveButton() {
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

    function updateViewFuse(planetId) {
        cursorListener.updateState(planets[planetId]);
        updatePlanetName();
    }

    function updateView() {
        //console.log('update view');
        updateSky();
        updatePlanets();
        updatePlanetName();
        updateLeaveButton();
    }

    return {
        init: init,
        updateView: updateView,
        updateViewFuse: updateViewFuse
    }

})();
