const radiusFocus = 120;

let state = {
    focusedPlanet: "none"
};

function updateState() {

}



// Hover: 
// cursor changes and planet halo

// Click: info


AFRAME.registerComponent('cursor-listener', {

    init: function() {

        const cursor = document.querySelector('a-cursor');

        console.log(this);

        this.el.addEventListener('mouseleave', function(){
        	// console.log("leave");
        	// 	if (cursor) {
        	// 		cursor.setAttribute('color', 'palegreen');
        	// 	}
        		// cursor
        	 //              <a-animation begin="cursor-fusing" easing="ease-out-back" attribute="scale"
          //      fill="forwards" from="1 1 1" to="4 4 4" dur="880"></a-animation>
          //     <a-animation begin="cursor-fusing" easing="ease-out-back" attribute="color"
          //      fill="forwards" from="palegreen" to="red" dur="880"></a-animation>
        });

        this.el.addEventListener('click', function() {
            // this.el is the entity
            // this becomes this.el
            // click is like gaze

            this.setAttribute('color', 'white'); // this is the sphere... ie the entity

            // Todo:
            // Add good cursor transitions
            // Add good object transitions when selected
            // Remove transitions when relevant 
            // Display text on click

            // this.setAttribute('radius', radiusFocus);
            //cursor.setAttribute('color', 'red');
        });
    }
});

// Init Animations
