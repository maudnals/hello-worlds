AFRAME.registerComponent('cursor-listener', {
  init: function(){
    this.el.addEventListener('click', function(){ //this.el is the entity
      console.log('gaze');
      this.setAttribute('color', 'white');
    });
  }
});
