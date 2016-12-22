/* ------------------
PLANET GENERATOR
------------------ */

let planetGenerator = (function() {

    function init() {

        // Create container entity (mandatory)
        let allPlanetsContainer = document.querySelector('#allPlanetsContainer');

        for (var p in planets) {

            if (planets.hasOwnProperty(p)) {
                let sphere = document.createElement('a-sphere');
                sphere.setAttribute('id', planets[p].id);
                sphere.setAttribute('class', 'planet-sphere');
                sphere.setAttribute('position', planets[p].defaultPosition);
                sphere.setAttribute('radius', planets[p].radius);
                sphere.setAttribute('src', planets[p].texture);
                sphere.setAttribute('cursor-listener', "");

                let r = document.createElement('a-animation');
                r.setAttribute('attribute', 'rotation');
                r.setAttribute('dur', planets[p].rotationPeriod);
                r.setAttribute('to', '0 360 0');
                r.setAttribute('repeat', 'indefinite');
                r.setAttribute('easing', 'linear');
                r.setAttribute('fill', 'forwards');

                sphere.append(r);

                console.log("planetSphere", sphere);
                allPlanetsContainer.append(sphere);
            }
        }

        console.log("allPlanetsContainer", allPlanetsContainer);
        // planets.forEach(function(p) {

        //     let planetSphere = document.createElement('a-entity');
        //     planetSphere.setAttribute('id', p.id);
        //     planetSphere.setAttribute('id', 'planet-sphere');
        //     planetSphere.setAttribute('position', p.defaultPosition);
        //     planetSphere.setAttribute('radius', p.radius);
        //     planetSphere.setAttribute('src', p.texture);
        //     planetSphere.setAttribute('cursor-listener');

        //     // <a-entity id="venus-entity" class="planet-entity">
        //     //     <a-sphere id="venus" class="planet-sphere" cursor-listener>
        //     //     </a-sphere>
        //     // </a-entity>

        //     let r = document.createElement('a-animation');
        //     r.setAttribute('attribute', 'rotation');
        //     r.setAttribute('dur', p.rotationPeriod);
        //     r.setAttribute('to', '0 360 0');
        //     r.setAttribute('repeat', 'indefinite');
        //     r.setAttribute('easing', 'linear');
        //     r.setAttribute('fill', 'forwards');

        //     p.append(r);
        //     allPlanets.append(p);
        // });



        let planetEntities = utils().getAllPlanets();
        planetEntities.forEach(function(p) {
            let planetId = p.getAttribute('id');
            console.log('planetId', planetId);
            // Set the sphere's essential attributes
            //p.setAttribute('position', planets[p.id].defaultPosition);
            //p.setAttribute('radius', planets[p.id].radius);
            //p.setAttribute('src', planets[p.id].texture);

            // Set rotation animation
            let rotationAnimation = document.createElement('a-animation');
            rotationAnimation.setAttribute('attribute', 'rotation');
            rotationAnimation.setAttribute('dur', planets[p.id].rotationPeriod);
            rotationAnimation.setAttribute('to', '0 360 0');
            rotationAnimation.setAttribute('repeat', 'indefinite');
            rotationAnimation.setAttribute('easing', 'linear');
            rotationAnimation.setAttribute('fill', 'forwards');



            // where should text be? 
            // place right in front of camera
            // rotate coordinates

            // p.innerHTML = '<a-animation attribute="rotation" dur="' 
            // + planets[p.id].rotationPeriod 
            // + '" to="0 360 0" repeat="indefinite" easing="linear" fill="forwards"></a-animation>';
            let moveTowardsAnimation = document.createElement('a-animation');
            // moveTowardsAnimation.setAttribute('begin', 'click');
            // moveTowardsAnimation.setAttribute('attribute', 'position');
            // moveTowardsAnimation.setAttribute('from', planets[p.id].defaultPosition);
            // moveTowardsAnimation.setAttribute('to', '0 10 -20');
            // moveTowardsAnimation.setAttribute('dur', '2000');
            // moveTowardsAnimation.setAttribute('fill', 'both');

            let moveBackwardsAnimation = document.createElement('a-animation');
            moveBackwardsAnimation.setAttribute('begin', 'moveBack');
            moveBackwardsAnimation.setAttribute('attribute', 'position');
            moveBackwardsAnimation.setAttribute('from', '0 10 -20');
            moveBackwardsAnimation.setAttribute('to', planets[p.id].defaultPosition);
            moveBackwardsAnimation.setAttribute('dur', '2000');
            moveBackwardsAnimation.setAttribute('fill', 'both');

            p.append(rotationAnimation);
            p.append(moveTowardsAnimation);
            p.append(moveBackwardsAnimation);


            // <a-animation begin="click" attribute="position" from="280 180 -280" to="14 10 -14" dur="2000" fill="both">

            // Or let e = document.createElement('a-animation');
            // then set the animation attributes
            // then append it with p.appendChild(e);
            // Set planet name component
            let text = document.createElement('a-entity');
            text.setAttribute('class', 'planet-name');
            text.setAttribute('material', 'color: white');
            text.setAttribute('text', 'text: ' + planets[p.id].id);
            text.setAttribute('position', planets[p.id].textPosition);
            text.setAttribute('visible', 'false');
            text.setAttribute('id', 'planet-name-' + planets[p.id].id);

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
