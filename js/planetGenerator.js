let planetGenerator = (function () {
  function init() {
    let planetElements = utils.getAllPlanetElements()
    planetElements.forEach((p) => {
      const id = p.getAttribute('id')
      const { radius, defaultPosition, texture, rotationPeriod } = planets[id]
      p.setAttribute('position', defaultPosition)
      p.setAttribute('material', 'src: url(' + texture + ')')
      p.setAttribute('radius', radius)
      p.setAttribute('animation', {
        property: 'rotation',
        to: '0 360 0',
        dur: rotationPeriod,
        easing: 'linear',
        loop: true,
        repeat: 'indefinite',
        fill: 'forwards'
      })
    })
  }

  return {
    init: init
  }
})()
