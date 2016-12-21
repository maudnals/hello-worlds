document.addEventListener("DOMContentLoaded", function() {

	sky = document.querySelector('a-sky');
    planetGenerator().init();

    let camera = document.querySelector("a-camera");
    // camera.setAttribute('position', '0 2000 0');
    // camera.setAttribute('rotation', '0 297 0');
    
    // cursorListener().init();
});