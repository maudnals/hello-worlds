cursorListener.init();

document.addEventListener('DOMContentLoaded', function() {

	renderer.init();
    planetGenerator().init();

    // let camera = document.querySelector('a-camera');
    // camera.setAttribute('position', '0 2000 0');
    // camera.setAttribute('rotation', '0 297 0');
    // cursorListener().init();
});