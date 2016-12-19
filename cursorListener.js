AFRAME.registerComponent('cursor-listener', {
    init: function() {

        this.el.addEventListener('click', function() {
            //this.el is the entity
            //Click is like gaze
            console.log(this.el);
            this.setAttribute('color', 'white'); // this is the sphere... ie the entity
            //console.log(this.getAttrradius);
            // var newRadius = this.getAttribute("radius") * 2;



            // Todo:
            // Add good cursor transitions
            // Add good object transitions when selected
            // Remove transitions when relevant 
            // Display text on click
            var newRadius = 120;
            console.log(newRadius);
            this.setAttribute('radius', newRadius);
            document.querySelector("a-cursor").setAttribute("color", "red");
        });
    }
});
