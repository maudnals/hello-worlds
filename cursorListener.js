AFRAME.registerComponent('cursor-listener', {
  init: function(){
    this.el.addEventListener('click', function(){ //this.el is the entity
      //Click is like gaze
      this.setAttribute('color', 'white'); // this is the sphere... ie the entity
    });
  }
});
