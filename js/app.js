cursorListener.init();
let voices;

document.addEventListener('DOMContentLoaded', function() {
    planetGenerator.init();
    renderer.init();
    utils.init();
});

window.speechSynthesis.onvoiceschanged = function(){
	voices = window.speechSynthesis.getVoices();
}
