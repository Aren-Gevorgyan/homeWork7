// let lockButton = document.querySelector("#lock-landscape-button"),
// status = document.querySelector("#orientation-status");

// status.innerHTML = screen.orientation.type + ' mode';

// lockButton.addEventListener('click', function() {
window.addEventListener("load", function(event) {
    alert("All resources finished loading!");
    if (document.documentElement.requestFullscreen)
        document.querySelector("#container").requestFullscreen({ navigationUI: "show" });
    else if (document.documentElement.webkitRequestFullScreen)
        document.querySelector("#container").webkitRequestFullScreen({ navigationUI: "show" });

    screen.orientation.lock("landscape-primary")
        .then(function() {
            status.innerHTML = screen.orientation.type + ' mode';
            document.querySelector("#container").style.backgroundColor = 'green';
        })
        .catch(function(error) {
            alert(error);
        });
});
// });