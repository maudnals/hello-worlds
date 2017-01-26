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


    function moveToInitPos(element, initPos, animate) {
        let currentPosition = element.getAttribute('position');
        let c = vectorHelper.getPositionFromVector(currentPosition);
        //let sphere = document.querySelector('#' + planet.id);

        if (animate) {
            let moveToInitPosAnim = createMoveAnim(c, initPos, 'moveToInitPos');
            element.append(moveToInitPosAnim);
            element.emit('moveToInitPos');
        } 
    }


    function moveToFocus(element, initPos, presentFace, animate) {

        let focusPos_init = new THREE.Vector3(0, 20, -40);
        let leaveButtonPos_init = new THREE.Vector3(-2.9, -7.7, -40);
        let leaveButtonPlanePos_init = new THREE.Vector3(-0, -7.4, -42);
        let yAxis = new THREE.Vector3(0, 1, 0);
        let angle = camera.getAttribute('rotation');
        let angleRad = angle.y * 2 * Math.PI / 360;

        let focusPos_updated = focusPos_init.applyAxisAngle(yAxis, angleRad);

        let c = new THREE.Vector3(focusPos_updated.x / 2, focusPos_updated.y / 2 + 5, focusPos_updated.z / 2);

        // let namePos_init = new THREE.Vector3(-6, 10, -40);
        // let namePos_updated = namePos_init.applyAxisAngle(yAxis, angleRad);
        // let namePos_vf = new THREE.Vector3(namePos_updated.x / 4, namePos_updated.y / 4, namePos_updated.z / 4);
        // // e

        if (presentFace) {
            element.setAttribute('rotation', camera.getAttribute('rotation'));
        }

        if (animate) {
            //let el = document.querySelector('#' + element.id);
            let moveTowardsUserAnim = createMoveAnim(initPos, vectorHelper.getPositionFromVector(c), 'moveTowardsUser');
            element.append(moveTowardsUserAnim);
            element.emit('moveTowardsUser');
        } else {
            //document.getElementById(element.id).setAttribute('position', vectorHelper.getPositionFromVector(c));

            let updatedPos = initPos.applyAxisAngle(yAxis, angleRad);
            element.setAttribute('position', vectorHelper.getPositionFromVector(updatedPos));
        }

    }

    function show(element) {

    }

    function hideAllButOne(elementsToHide, elementToShow) {
        elementsToHide.forEach(function(e) {
            if (e.id !== elementToShow.id) {
                e.setAttribute('visible', 'false');
            }
        });
    }

    function showAll(elementsToShow) {
        elementsToShow.forEach(function(e) {
            e.setAttribute('visible', 'true');
        });
    }


    function updateLeaveButton(mode) {

        let leaveButtonPos_init = new THREE.Vector3(-2.9, -7.7, -40);
        let leaveButtonPlanePos_init = new THREE.Vector3(-0, -7.4, -42);

        if (mode === 'visit') {
            moveToFocus(this.leaveButton, leaveButtonPos_init, true, false);
            moveToFocus(this.leaveButtonPlane, leaveButtonPlanePos_init, true, false);
            showLeaveButton();
        } else {
            hideLeaveButton();
        }
    }


    function updatePlanets(mode, planet) {

        if (mode === 'visit') {

            let planetEl = document.getElementById(planet.id);
            growPlanetRadius(planetEl);
            moveToFocus(planetEl, planet.defaultPosition, false, true);
            hideAllButOne(utils.getAllPlanets(), planet);

        } else {

            showAll(utils.getAllPlanets());

            //showAll(utils.getAllPlanets());
            utils.getAllPlanets().forEach(function(pEl) {
                // //p.setAttribute('visible', 'true');
                // let el = document.getElementById(p.id);
                moveToInitPos(pEl, planets[pEl.id].defaultPosition, true);
                updateRadius(pEl, planets[pEl.id].radius);
            });

            // showPlanets(utils.getAllPlanets());

            // if (state.lastPlanet !== none) {
            //     moveToInitPos(state.lastPlanet);
            //     resetPlanetRadius(state.lastPlanet);
            // }

        }
    }

    function updateRadius(sphereEl, newRadius) {
        sphereEl.setAttribute('radius', newRadius);
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

    function updatePlanetName(mode, planet) {

        // let a = new THREE.Vector3(0, 20, -40);
        // let initNamePosition = new THREE.Vector3(-6, 13, -40);
        // let initOKPosition = new THREE.Vector3(-1, 4, -40);
        // let yAxis = new THREE.Vector3(0, 1, 0);
        // let angle = document.querySelector('a-camera').getAttribute('rotation');
        // let angleRad = angle.y * 2 * Math.PI / 360;
        // let b = a.applyAxisAngle(yAxis, angleRad);
        // let bPrim = initNamePosition.applyAxisAngle(yAxis, angleRad);
        // let initOKPositionPrim = initOKPosition.applyAxisAngle(yAxis, angleRad);

        // let c = new THREE.Vector3(b.x / 2, b.y / 2 + 5, b.z / 2);

        // let d = new THREE.Vector3(initOKPositionPrim.x / 4, initOKPositionPrim.y / 4, initOKPositionPrim.z / 4);

        // let e = new THREE.Vector3(bPrim.x / 4, bPrim.y / 4, bPrim.z / 4);

        // let planetName = document.querySelector('#planetName');

        if (mode === 'over' || mode === 'visit') {

            console.log("Move and show planet name " + planet.id);

            // let textAttribute = text = "text: " + state.currentPlanet.id.toUpperCase() + "; font: Cartoon Marker;"
            // planetName.setAttribute('text', textAttribute);
            // planetName.setAttribute('position', vectorHelper.getPositionFromVector(e));
            // planetName.setAttribute('rotation', camera.getAttribute('rotation'));
            // planetName.setAttribute('visible', 'true');

        } else {
            // Hide name
            // if (state.lastPlanet !== none) {
            //     let planetName = document.querySelector('#planetName');
            //     planetName.setAttribute('visible', 'false');
            // }
        }
    }


    function updatePlanetInfo(mode, planet) {
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

        if (mode === 'visit') {

            console.log("Show Info " + planet.id);

            // if (state.currentPlanet.id !== 'earth') {
            //     infoDiscovery.setAttribute('text', "text: Discovered in " 
            //         + state.currentPlanet.discovery 
            //         + "; size: 1;");
            // } else {
            //     infoDiscovery.setAttribute('text', "");
            // }

            // if (state.currentPlanet.distanceToEarth) {
            //     infoTravel.setAttribute('text', "text: " 
            //         + state.currentPlanet.distanceToEarth 
            //         + " light-years away; size: 1;");
            // } else {
            //     infoTravel.setAttribute('text', "");
            // }

            // infoSpecificity.setAttribute('text', "text: Specificity: " 
            //     + state.currentPlanet.specificity
            //     + "; size: 1;");

            // infoContainer.setAttribute('position', vectorHelper.getPositionFromVector(infoPos_updated));
            // infoContainer.setAttribute('rotation', camera.getAttribute('rotation'));
            // // only along y!!!
            // infoContainer.setAttribute('visible', 'true');

        } else {
            hideInfoContainer();
            // Hide infoContainer
            // if (state.lastPlanet !== none) {
            //     infoContainer.setAttribute('visible', 'false');
            // }
        }
    }

    function hideInfoContainer() {
        infoContainer.setAttribute('visible', 'false');
    }

    function updateSky(mode) {
        if (mode === 'visit') {
            sky.emit('darkenSky');
        } else {
            sky.emit('resetSky');
        }
    }

    // function updateViewFuse(planetId) {
    //     cursorListener.updateState(planets[planetId]);
    //     updatePlanetName();
    // }

    function updateView(mode, planet) {

        updateSky(mode);
        updateLeaveButton(mode);
        updatePlanets(mode, planet);

        // if (mode === 'visit') {
        // updatePlanetName(mode, planet);
        // updatePlanetInfo(mode, planet);
        // }
    }

    return {
        init: init,
        updateView: updateView
            //,
            //updateViewFuse: updateViewFuse
    }

})();
