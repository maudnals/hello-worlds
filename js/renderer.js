/* ------------------
RENDERER
------------------ */

let renderer = function() {

    function updatePlanets() {
        if (utils().checkObserving()) {
            // Hide all other planets
            let otherPlanets = utils().getOtherPlanets();
            otherPlanets.forEach(p => {
                p.setAttribute('visible', 'false');
                //p.emit('hidePlanet');
            });
            // document.querySelector('#' + state.currentPlanet.id).setAttribute('radius', radiusFocus);
        } else {
            // Make all planets visible
            let allPlanets = utils().getAllPlanets();
            allPlanets.forEach(p => {
                p.setAttribute('visible', 'true');
                //p.emit('showPlanet');
            });
        }
    }

    function updateText() {
        if (utils().checkObserving()) {
            document.querySelector('#' + state.currentPlanet.id + '-entity>.planet-name').setAttribute('visible', 'true');
        } else {
            let allPlanets = utils().getAllPlanets();
            allPlanets.forEach(p => {
                let planetName = document.querySelector('#' + p.id + '-entity>.planet-name');
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
