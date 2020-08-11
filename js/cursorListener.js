// Click vs fuse - Display text on click
// cool button
// Refactor
// Templating
// Put next to earth for comparison
// UX angle calculation

/* ------------------
CURSOR LISTENER
------------------ */

let cursorListener = (function () {
  function updateState(current, last = null) {
    state.currentPlanet = current
    state.lastPlanet = last
  }

  function isPlanet(element) {
    return planets[element.id];
  }

  // To be called hen DOM is ready
  function init() {
    AFRAME.registerComponent("cursor-listener", {
      init: function () {
        // el is the entity on which cursor-listener is present as attribute (= the spheres)
        let { el } = this;
        let mode = idle;
        let planet = none;

        el.addEventListener("click", function () {
          // Click is like gaze

          if (isPlanet(el)) {
            mode = "visit";
            planet = planets[el.id];
          }
          renderer.updateView(mode, planet);
        });
      },
    });
  }

  return {
    updateState: updateState,
    init: init,
  };
})();
