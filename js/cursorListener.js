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

  // To be called hen DOM is ready
  function init() {
    AFRAME.registerComponent('cursor-listener', {
      init: function () {
        // this = el on which cursor-listener is present as attribute (= the spheres)
        let { el } = this
        let mode = idle
        let planet = null

        el.addEventListener('click', function () {
          // Click is like gaze
          if (isPlanet(el)) {
            mode = 'visit'
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
