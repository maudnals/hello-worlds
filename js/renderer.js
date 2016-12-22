/* ------------------
RENDERER
------------------ */

let renderer = function() {

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

            if (state.lastCurrentPlanet !== 'none') {
                console.log(state.lastCurrentPlanet);

                document.querySelector('#' + state.lastCurrentPlanet.id).setAttribute('radius', state.lastCurrentPlanet.radius);

                // document.querySelector('#' + state.lastCurrentPlanet.id).emit('moveBack');


                document.querySelector('#' + state.lastCurrentPlanet.id).setAttribute('position', state.lastCurrentPlanet.defaultPosition);
            }

        }
    }

    function updateText() {

        //text.setAttribute('id', 'planet-name-' + planets[p.id].id);
        if (utils().checkObserving()) {
            document.querySelector('#leaveButton').setAttribute('visible', 'true');
            document.querySelector('#planet-name-' + state.currentPlanet.id).setAttribute('visible', 'true');
        } else {
            document.querySelector('#leaveButton').setAttribute('visible', 'false');
            let allPlanets = utils().getAllPlanets();
            allPlanets.forEach(p => {
                let planetName = document.querySelector('#planet-name-' + p.id);
                if (planetName) {
                    planetName.setAttribute('visible', 'false');
                }
            });
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
        updateSky();
        updatePlanets();
        updateText();
    }

    return {
        updateView: updateView
    }

};
