/* ------------------
RENDERER
------------------ */

let renderer = (function () {
  let sky
  let exitText
  let exitButton
  let camera
  let infoContainer
  let infoDiscovery
  let infoTravel
  let infoSpecificity

  function init() {
    exitText = document.getElementById('exitText')
    exitButton = document.getElementById('exitButton')
    sky = document.querySelector('a-sky')
    camera = document.querySelector('a-camera')
    infoContainer = document.getElementById('info')
    infoDiscovery = document.getElementById('info-discovery')
    infoTravel = document.getElementById('info-travel')
    infoSpecificity = document.getElementById('info-specificity')
  }

  function createMoveAnim(from, to, triggerEvent) {
    let moveAnim = document.createElement('a-animation')
    moveAnim.setAttribute('begin', triggerEvent)
    moveAnim.setAttribute('attribute', 'position')
    moveAnim.setAttribute('from', from)
    moveAnim.setAttribute('to', to)
    moveAnim.setAttribute('dur', '2000')
    moveAnim.setAttribute('fill', 'both')
    return moveAnim
  }

  function moveToInitPos(element, initPos, animate) {
    let currentPosition = element.getAttribute('position')
    let c = vectorHelper.getPositionFromVector(currentPosition)
    if (animate) {
      let moveToInitPosAnim = createMoveAnim(c, initPos, 'moveToInitPos')
      element.append(moveToInitPosAnim)
      element.emit('moveToInitPos')
    }
  }

  function moveToFocus(element, initPos, presentFace, animate) {
    let focusPos_init = new THREE.Vector3(0, 20, -40)
    let yAxis = new THREE.Vector3(0, 1, 0)
    let angle = camera.getAttribute('rotation')
    let angleRad = (angle.y * 2 * Math.PI) / 360

    let focusPos_updated = focusPos_init.applyAxisAngle(yAxis, angleRad)

    let c = new THREE.Vector3(
      focusPos_updated.x / 2,
      focusPos_updated.y / 2 + 5,
      focusPos_updated.z / 2
    )

    if (presentFace) {
      element.setAttribute('rotation', camera.getAttribute('rotation'))
    }

    if (animate) {
      let moveTowardsUserAnim = createMoveAnim(
        initPos,
        vectorHelper.getPositionFromVector(c),
        'moveTowardsUser'
      )
      element.append(moveTowardsUserAnim)
      element.emit('moveTowardsUser')
    } else {
      let updatedPos = initPos.applyAxisAngle(yAxis, angleRad)
      element.setAttribute(
        'position',
        vectorHelper.getPositionFromVector(updatedPos)
      )
    }
  }

  //
  // LEAVE BUTTON
  //

  function updateLeaveButton(mode) {
    let exitTextPos_init = new THREE.Vector3(-2.9, -7.7, -40)
    let exitButtonPos_init = new THREE.Vector3(-0, -7.4, -42)
    if (mode === MODE.VISIT) {
      moveToFocus(exitText, exitTextPos_init, true, false)
      moveToFocus(exitButton, exitButtonPos_init, true, false)
      showLeaveButton()
    } else {
      hideLeaveButton()
    }
  }

  function showLeaveButton() {
    utils.show(exitText)
    utils.show(exitButton)
  }

  function hideLeaveButton() {
    utils.hide(exitText)
    utils.hide(exitButton)
  }

  //
  // PLANETS
  //

  function updatePlanets(mode, planet) {
    let allPlanets = utils.getAllPlanetElements()

    if (mode === MODE.VISIT) {
      let planetEl = document.getElementById(planet.id)
      growPlanetRadius(planetEl)
      moveToFocus(planetEl, planet.defaultPosition, false, true)
      utils.hideAll(allPlanets)
      utils.show(planetEl)
    } else {
      utils.showAll(allPlanets)
      allPlanets.forEach(function (pEl) {
        moveToInitPos(pEl, planets[pEl.id].defaultPosition, true)
        updateRadius(pEl, planets[pEl.id].radius)
      })
    }
  }

  function updateRadius(sphereEl, newRadius) {
    sphereEl.setAttribute('radius', newRadius)
  }

  function growPlanetRadius(planet) {
    document
      .querySelector('#' + planet.id)
      .setAttribute('radius', selectedPlanetRadius)
  }

  //
  // PLANET NAME
  //

  function updatePlanetName(mode, planet) {
    let planetName = document.getElementById('planetName')
    let namePos_init = new THREE.Vector3(-2, 6, -20)

    if (mode === MODE.VISIT) {
      let textAttribute = 'text: ' + planet.id.toUpperCase()
      planetName.setAttribute('text', textAttribute)
      moveToFocus(planetName, namePos_init, true, false)
      planetName.setAttribute('visible', 'true')
    } else {
      utils.hide(planetName)
    }
  }

  //
  // PLANET INFO
  //

  function updatePlanetInfo(mode, planet) {
    let infoPos_init = new THREE.Vector3(-6.4, 2.4, -40)
    let yAxis = new THREE.Vector3(0, 1, 0)
    let angle = camera.getAttribute('rotation')
    let angleRad = (angle.y * 2 * Math.PI) / 360
    let infoPos_updated = infoPos_init.applyAxisAngle(yAxis, angleRad)

    if (mode === MODE.VISIT) {
      console.log('Show Info ' + planet.id)

      if (state.selectedPlanet?.id !== 'earth') {
        infoDiscovery.setAttribute(
          'text',
          'text: Discovered in ' + planets[planet.id].discovery + '; size: 1;'
        )
      } else {
        infoDiscovery.setAttribute('text', '')
      }

      if (state.selectedPlanet?.distanceToEarth) {
        infoTravel.setAttribute(
          'text',
          'text: ' +
            planets[planet.id].distanceToEarth +
            ' light-years away; size: 1;'
        )
      } else {
        infoTravel.setAttribute('text', '')
      }

      infoSpecificity.setAttribute(
        'text',
        'text: Specificity: ' + planets[planet.id].specificity + '; size: 1;'
      )

      infoContainer.setAttribute(
        'position',
        vectorHelper.getPositionFromVector(infoPos_updated)
      )
      infoContainer.setAttribute('rotation', camera.getAttribute('rotation'))
      // only along y
      utils.show(infoContainer)
    } else {
      utils.hide(infoContainer)
    }
  }

  //
  // SKY
  //

  function updateSky(mode) {
    if (mode === MODE.VISIT) {
      sky.emit('darkenSky')
    } else {
      sky.emit('resetSky')
    }
  }

  function updateView(mode, planet) {
    updateSky(mode)
    updateLeaveButton(mode)
    updatePlanets(mode, planet)
    if (planet) {
      updatePlanetName(mode, planet)
      updatePlanetInfo(mode, planet)
    }
  }

  return {
    init: init,
    updateView: updateView
  }
})()
