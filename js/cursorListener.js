/* ------------------
CURSOR LISTENER
------------------ */

let cursorListener = (function () {
  function updateState(selectedPlanet) {
    state = { selectedPlanet }
  }

  function isPlanet(element) {
    return planets[element.id]
  }

  // can be called only once DOM is ready
  function init() {
    AFRAME.registerComponent('cursor-listener', {
      init: function () {
        // this = el on which cursor-listener is present as attribute (= the spheres)
        let { el } = this
        let mode = MODE.IDLE
        let planet = null

        // click is like gaze
        el.addEventListener('click', function () {
          if (isPlanet(el)) {
            mode = MODE.VISIT
            planet = planets[el.id]
          }
          renderer.updateView(mode, planet)
        })
      }
    })
  }

  return {
    updateState: updateState,
    init: init
  }
})()
