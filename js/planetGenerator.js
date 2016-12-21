/* ------------------
PLANET GENERATOR
------------------ */

let planetGenerator = function() {

    function init(){
        let planetEntities = utils().getAllPlanets();
        planetEntities.forEach(function(p) {
            let planetId = p.getAttribute('id');
            console.log('planetId', planetId);
            // Set the sphere's essential attributes
            p.setAttribute('position', planets[p.id].position);
            p.setAttribute('radius', planets[p.id].radius);
            p.setAttribute('src', planets[p.id].texture);
            // Set rotation animation
            let rotationAnimation = document.createElement('a-animation');
            rotationAnimation.setAttribute('attribute', 'rotation');
            rotationAnimation.setAttribute('dur', planets[p.id].rotationPeriod);
            rotationAnimation.setAttribute('to', '0 360 0');
            rotationAnimation.setAttribute('repeat', 'indefinite');
            rotationAnimation.setAttribute('easing', 'linear');
            rotationAnimation.setAttribute('fill', 'forwards');

            // p.innerHTML = '<a-animation attribute="rotation" dur="' 
            // + planets[p.id].rotationPeriod 
            // + '" to="0 360 0" repeat="indefinite" easing="linear" fill="forwards"></a-animation>';
            let moveTowardsAnimation = document.createElement('a-animation');
            moveTowardsAnimation.setAttribute('begin', 'click');
            moveTowardsAnimation.setAttribute('attribute', 'position');
            moveTowardsAnimation.setAttribute('from', planets[p.id].position);
            moveTowardsAnimation.setAttribute('to', '20 2010 -10');
            moveTowardsAnimation.setAttribute('dur', '2000');
            moveTowardsAnimation.setAttribute('fill', 'both');

            //let camera = document.get..
            //let rotation = camera.getAttribute('rotation');

            p.append(rotationAnimation);
            p.append(moveTowardsAnimation);


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
            text.setAttribute('visible', 'true');

            text.innerHTML = '<a-animation attribute="visible" begin="showPlanetName" to="true"></a-animation>';

            let entity = document.querySelector('#' + planetId + '-entity');
            entity.append(text);


            // let camera = document.querySelector('a-camera');
            // came.append(text);
            //mercury-entity
            //     <a-entity class="planet-name" material="color: white" text="text: Mercury" position="-1 16 -28" visible="false">
            //     <a-animation attribute="visible" begin="showPlanetName" to="true"></a-animation>
            // </a-entity>

        });
        // Append animation
        //<a-animation attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite" easing="linear" fill="forwards"></a-animation>
    }

    return {
        init: init
    }
}
