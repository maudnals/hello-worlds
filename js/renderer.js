/* ------------------
RENDERER
------------------ */


let renderer = (function() {

    let sky;
    let leaveButton;
    let leaveButtonPlane;
    let camera;
    let infoContainer;
    let infoDiscovery;
    let infoTravel;
    let infoSpecificity;

    function init() {
        leaveButton = document.querySelector('#leaveButton');
        leaveButtonPlane = document.querySelector('#leaveButtonPlane');
        sky = document.querySelector('a-sky');
        camera = document.querySelector('a-camera');
        infoContainer = document.getElementById('info');
        infoDiscovery = document.getElementById('info-discovery');
        infoTravel = document.getElementById('info-travel');
        infoSpecificity = document.getElementById('info-specificity');
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
            let leaveButtonPos_init = new THREE.Vector3(-2.9, -7.7, -40);
            let leaveButtonPlanePos_init = new THREE.Vector3(-0, -7.4, -42);
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


            let leaveButtonPlanePos_updated = leaveButtonPlanePos_init.applyAxisAngle(yAxis, angleRad);
            leaveButtonPlane.setAttribute('position', vectorHelper.getPositionFromVector(leaveButtonPlanePos_updated));
            leaveButtonPlane.setAttribute('rotation', camera.getAttribute('rotation'));


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
        leaveButtonPlane.setAttribute('visible', 'true');
    }

    function hideLeaveButton() {
        leaveButton.setAttribute('visible', 'false');
        leaveButtonPlane.setAttribute('visible', 'false');
    }

    // function updatePlanetInfo(){
        // let planetInfoPos_init = new THREE.Vector3(0, 0, -40);
        // let yAxis = new THREE.Vector3(0, 1, 0);
        
        // let planetPos = document.getElementById('earth').getAttribute('position');
        // let cameraPos = camera.getAttribute('position');

        // let cameraToPlanetVector = getVectorFromPosition(planetPos) - getVectorFromPosition(cameraPos);
    // }

    function updatePlanetName() {


        let a = new THREE.Vector3(0, 20, -40);
        let initNamePosition = new THREE.Vector3(-6, 13, -40);
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

        let planetName = document.querySelector('#planetName');

        if (utils.checkObserving() && ! planetName.getAttribute('visible')) {

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


    function updatePlanetInfo() {
        let infoPos_init = new THREE.Vector3(-6.4, 2.4, -40);
        let yAxis = new THREE.Vector3(0, 1, 0);
        let angle = camera.getAttribute('rotation');
        let angleRad = angle.y * 2 * Math.PI / 360;
        let infoPos_updated = infoPos_init.applyAxisAngle(yAxis, angleRad);
        // let initOKPositionPrim = initOKPosition.applyAxisAngle(yAxis, angleRad);

        // let c = new THREE.Vector3(b.x / 2, b.y / 2 + 5, b.z / 2);

        // let d = new THREE.Vector3(initOKPositionPrim.x / 4, initOKPositionPrim.y / 4, initOKPositionPrim.z / 4);

        //let infoPos_vf = new THREE.Vector3(infoPos_updated.x / 4, infoPos_updated.y / 4, infoPos_updated.z / 4);

        //let planetName = document.querySelector('#planetName');

        if (utils.checkObserving()) {

            if (state.currentPlanet.id !== 'earth') {
                infoDiscovery.setAttribute('text', "text: Discovered in " 
                    + state.currentPlanet.discovery 
                    + "; size: 1;");
            } else {
                infoDiscovery.setAttribute('text', "");
            }
            
            if (state.currentPlanet.distanceToEarth) {
                infoTravel.setAttribute('text', "text: " 
                    + state.currentPlanet.distanceToEarth 
                    + " light-years away; size: 1;");
            } else {
                infoTravel.setAttribute('text', "");
            }

            infoSpecificity.setAttribute('text', "text: Specificity: " 
                + state.currentPlanet.specificity
                + "; size: 1;");

            infoContainer.setAttribute('position', vectorHelper.getPositionFromVector(infoPos_updated));
            infoContainer.setAttribute('rotation', camera.getAttribute('rotation'));
            // only along y!!!
            infoContainer.setAttribute('visible', 'true');

        } else {
            if (state.lastPlanet !== none) {
                infoContainer.setAttribute('visible', 'false');
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
        //updatePlanetInfo();
    }

    function updateView() {
        //console.log('update view');
        updateSky();
        updatePlanets();
        updatePlanetName();
        updatePlanetInfo();
        updateLeaveButton();
    }

    return {
        init: init,
        updateView: updateView,
        updateViewFuse: updateViewFuse
    }

})();
