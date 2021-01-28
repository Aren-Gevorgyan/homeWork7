let lockButton = document.querySelector("#lock-landscape-button"),
    status = document.querySelector("#orientation-status");

status.innerHTML = screen.orientation.type + ' mode';

// upon lock to landscape-primary mode
document.querySelector("#lock-landscape-button").addEventListener('click', function() {
    if (document.documentElement.requestFullscreen)
        document.querySelector(".container").requestFullscreen();
    else if (document.documentElement.webkitRequestFullScreen)
        document.querySelector(".container").webkitRequestFullScreen();

    screen.orientation.lock("landscape-primary")
        .then(function() {
            // lockButton.style.display = 'none';
            document.querySelector("#container").style.backgroundColor = 'green';
        })
        .catch(function(error) {
            alert(error);
        });
});