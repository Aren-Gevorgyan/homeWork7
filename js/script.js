// let lockButton = document.querySelector("#lock-landscape-button"),
// status = document.querySelector("#orientation-status");

// status.innerHTML = screen.orientation.type + ' mode';

// lockButton.addEventListener('click', function() {
async function setSreen() {
    console.log(1)
    if (await document.documentElement.requestFullscreen)
        await document.querySelector(".container").requestFullscreen();
    else if (await document.documentElement.webkitRequestFullScreen)
        await document.querySelector(".container").webkitRequestFullScreen();
    // set landscape-primary
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