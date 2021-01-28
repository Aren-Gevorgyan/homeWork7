// let lockButton = document.querySelector("#lock-landscape-button"),
// status = document.querySelector("#orientation-status");

// status.innerHTML = screen.orientation.type + ' mode';

// lockButton.addEventListener('click', function() {
function setSreen() {
    if (document.documentElement.requestFullscreen) {
        document.querySelector(".container").requestFullscreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.querySelector(".container").webkitRequestFullScreen();
        screen.orientation.lock("landscape-primary")
            .then(function() {})
            .catch(function(error) {
                alert(error);
            });
    }
}
//dfdf
setSreen();
ScreenOrientation.lock("landscape-primary")

// });