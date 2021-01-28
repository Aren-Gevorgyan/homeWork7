// let lockButton = document.querySelector("#lock-landscape-button"),
// status = document.querySelector("#orientation-status");

// status.innerHTML = screen.orientation.type + ' mode';

// lockButton.addEventListener('click', function() {
async function setSreen() {
    console.log(1)
    if (document.documentElement.requestFullscreen)
        document.querySelector(".container").requestFullscreen();
    else if (document.documentElement.webkitRequestFullScreen)
        document.querySelector(".container").webkitRequestFullScreen();
    screen.orientation.lock("landscape-primary")
        .then(function() {
            console.log(2)
        })
        .catch(function(error) {
            alert(error);
        });
    console.log(3)
}

setSreen();

// });