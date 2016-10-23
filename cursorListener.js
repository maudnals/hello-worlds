AFRAME.registerComponent('cursor-listener',{
  init: function(){
    this.el.addEventListener('click', function(){
      console.log('gaze' + iterator);
    });
  }
});
