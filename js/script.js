let lockButton = document.querySelector("#lock-landscape-button"),
    status = document.querySelector("#orientation-status");

status.innerHTML = screen.orientation.type + ' mode';

window.addEventListener('load', function() {
    if (document.documentElement.requestFullscreen)
        document.querySelector(".container").requestFullscreen();
    else if (document.documentElement.webkitRequestFullScreen)
        document.querySelector(".container").webkitRequestFullScreen();

    screen.orientation.lock("landscape-primary")
        .then(function() {
            lockButton.style.display = 'none';
            document.querySelector(".container").style.backgroundColor = 'green';
        })
        .catch(function(error) {
            alert(error);
        });
});