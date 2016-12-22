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

            document.querySelector('#' + state.currentPlanet.id).setAttribute('radius', radiusFocus);
            //unify radius

            // let arr = state.currentPlanet.defaultPosition.split(" ");

            // let x = parseFloat(arr[0]);
            // let y = parseFloat(arr[1]);
            // let z = parseFloat(arr[2]);

            // console.log(x, y, z);

            let a = new THREE.Vector3(0, 20, -40);
            let yAxis = new THREE.Vector3(0, 1, 0);
            let angle = document.querySelector('a-camera').getAttribute('rotation');
            let angleRad = angle.y * 2 * Math.PI / 360;
            let b = a.applyAxisAngle(yAxis, angleRad);
            let c = b.divideScalar(1.05);


            document.querySelector('#' + state.currentPlanet.id).setAttribute('position', c);

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

                document.querySelector('#' + state.lastPlanet.id).setAttribute('radius', state.lastPlanet.radius);

                // document.querySelector('#' + state.lastCurrentPlanet.id).emit('moveBack');


                document.querySelector('#' + state.lastPlanet.id).setAttribute('position', state.lastPlanet.defaultPosition);
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
