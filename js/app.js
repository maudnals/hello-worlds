// let myCursor;
cursorListener.init();
let voices;
let idle = "idle";
let over = "over";
let visit = "visit";

document.addEventListener('DOMContentLoaded', function() {
    //cursor = document.getElementById("cursor");
    // myCursor = document.getElementById("cursor");
    planetGenerator.init();
    renderer.init();
    utils.init();

    // cursor.addEventListener('mouseenter', function(event) {
    //     console.log("mouseenter", event.detail.intersectedEl.id);
    //     if (event.detail.intersectedEl.className === "planet-sphere") {
    //     	document.getElementById('leaveButtonPlane').setAttribute("material", material="color: mediumspringgreen; opacity: 0.3;");
    //         let planetId = event.detail.intersectedEl.id;
    //         console.log("display name");
    //         renderer.updateViewFuse(planetId);
    //     }
    // });

    // cursor.addEventListener('mouseenter', function(event) {
    //     console.log("mouseenter", event.detail.intersectedEl.id);
    //     if (event.detail.intersectedEl.id === "leaveButtonPlane") {
    //         event.detail.intersectedEl.setAttribute("material", material="color: mediumspringgreen; opacity: 0.55;");
    //         //renderer.updateViewFuse(planetId);
    //     }
    // });

    // cursor.addEventListener('mouseleave', ... // Not needed

});

window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
}
