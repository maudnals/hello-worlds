/* ------------------
UTILS
------------------ */

let utils = (function () {
  function init() {
    leaveButton = document.querySelector('#leaveButton')
  }
  function getAllPlanetElements() {
    return document.querySelectorAll('.planet-sphere')
  }

  function show(element) {
    element.setAttribute('visible', true)
  }

  function hide(element) {
    element.setAttribute('visible', false)
  }

  function showAll(elements) {
    elements.forEach((e) => show(e))
  }

  function hideAll(elements) {
    elements.forEach((e) => hide(e))
  }

  return {
    init: init,
    getAllPlanetElements: getAllPlanetElements,
    show: show,
    showAll: showAll,
    hide: hide,
    hideAll: hideAll
  }
})()
