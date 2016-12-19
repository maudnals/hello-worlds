AFRAME.registerComponent('cursor-listener', {
    init: function() {

        this.el.addEventListener('click', function() { //this.el is the entity
            //Click is like gaze
            console.log(this.el);

            this.setAttribute('color', 'white'); // this is the sphere... ie the entity

            document.querySelector("a-cursor").setAttribute("color", "red");
        });
    }
});
