/* ------------------
PLANET GENERATOR
------------------ */

let planetGenerator = (function() {


    function createSphereFromPlanet(p) {
        let sphere = document.createElement('a-sphere');
        sphere.setAttribute('id', p.id);
        sphere.setAttribute('class', 'planet-sphere');
        sphere.setAttribute('radius', p.radius);
        sphere.setAttribute('src', p.texture);
        sphere.setAttribute('cursor-listener', "");
        return sphere;
    }

    function createRotationForPlanet(p) {
        let rotAnim = document.createElement('a-animation');
        rotAnim.setAttribute('attribute', 'rotation');
        rotAnim.setAttribute('dur', p.rotationPeriod);
        rotAnim.setAttribute('to', '0 360 0');
        rotAnim.setAttribute('repeat', 'indefinite');
        rotAnim.setAttribute('easing', 'linear');
        rotAnim.setAttribute('fill', 'forwards');
        return rotAnim;
    }

    function generateRotatingPlanet(p) {
        //let sphere = createSphereFromPlanet(planets[p]);
        let sphere = document.getElementById(p);

        if (sphere) {

            sphere.setAttribute('position', p.position);
            let radius = planets[p].radius;
            sphere.setAttribute('geometry', 'primitive: sphere; radius: ' + radius +';');
            // Using geometry attr because setting radius attr directly doesn't work
            // i.e. "sphere.setAttribute('radius', p.radius);" doesn't work

            sphere.setAttribute('material', 'src: url(' + planets[p].texture +')');
            // Using material attr because setting src attr directly doesn't work
            // i.e. "sphere.setAttribute('src', p.texture);" doesn't work

            sphere.setAttribute('class', 'planet-sphere');
            // Useful to hide/show planets
            
            let rotAnim = createRotationForPlanet(planets[p]);
            sphere.append(rotAnim);
        }
        return sphere;
    }

    function moveElement(element, position) {
        element.setAttribute('position', position);
        return element;
    }

    function init() {

        // Create container entity (mandatory)
        let allPlanetsContainer = document.querySelector('#allPlanetsContainer');

        for (var p in planets) {

            if (planets.hasOwnProperty(p)) {
                let sphere = generateRotatingPlanet(p);
                if (sphere) {
                    moveElement(sphere, planets[p].defaultPosition);
                }
                //allPlanetsContainer.append(sphere);
            }
        }

        let planetEntities = utils.getAllPlanets();
        planetEntities.forEach(function(p) {

            let planetId = p.getAttribute('id');

            // Set the sphere's essential attributes
            //p.setAttribute('position', planets[p.id].defaultPosition);
            //p.setAttribute('radius', planets[p.id].radius);
            //p.setAttribute('src', planets[p.id].texture);

            // Set rotation animation

            let text = document.createElement('a-entity');
            // text.setAttribute('class', 'planet-name');
            // text.setAttribute('material', 'color: white');
            // text.setAttribute('text', 'text: ' + planets[p.id].id);
            // text.setAttribute('position', planets[p.id].textPosition);
            // text.setAttribute('visible', 'false');
            // text.setAttribute('id', 'planet-name-' + planets[p.id].id);

            //text.innerHTML = '<a-animation attribute="visible" begin="showPlanetName" to="true"></a-animation>';

            //let entity = document.querySelector('#' + planetId + '-entity');
            //entity.append(text);

            let camera = document.querySelector('a-camera');
            camera.append(text);

        });
        // Append animation
        //<a-animation attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite" easing="linear" fill="forwards"></a-animation>
    }

    return {
        init: init
    }
})();
