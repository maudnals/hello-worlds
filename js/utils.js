/* ------------------
UTILS
------------------ */

let utils = (function() {

    let leaveButton;

    function init() {
        leaveButton = document.querySelector('#leaveButton');
    }

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
        init: init,
    	getAllPlanets: getAllPlanets,
    	getOtherPlanets: getOtherPlanets,
    	checkObserving: checkObserving,
        leaveButton: leaveButton
    }
})();
