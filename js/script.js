// let lockButton = document.querySelector("#lock-landscape-button"),
// status = document.querySelector("#orientation-status");

// status.innerHTML = screen.orientation.type + ' mode';

// lockButton.addEventListener('click', function() {
async function setSreen() {
    if (await document.documentElement.requestFullscreen)
        await document.querySelector(".container").requestFullscreen();
    else if (await document.documentElement.webkitRequestFullScreen)
        await document.querySelector(".container").webkitRequestFullScreen();

    screen.orientation.lock("landscape-primary")
        .then(function() {})
        .catch(function(error) {
            alert(error);
        });
}

setSreen();

// });