/* ------------------
UTILS
------------------ */

let utils = function() {
    function getAllPlanets() {
        return document.querySelectorAll('.planet-sphere');
    }

    function getOtherPlanets() {
        let currentPlanetId = state.currentPlanet.id;
        let otherPlanets = document.querySelectorAll('.planet-sphere:not(#' + currentPlanetId + ')');
        return otherPlanets;
    }

    function checkObserving() {
        return !(state.currentPlanet === 'none');
    }

    return {
    	getAllPlanets: getAllPlanets,
    	getOtherPlanets: getOtherPlanets,
    	checkObserving: checkObserving
    }
}
