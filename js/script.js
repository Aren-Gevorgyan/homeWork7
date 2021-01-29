$(document).ready(function() {

    $('#ok').click(function() {
        if (document.documentElement.requestFullscreen)
            await document.querySelector(".container").requestFullscreen();
        else if (document.documentElement.webkitRequestFullScreen)
            await document.querySelector(".container").webkitRequestFullScreen();

        screen.orientation.lock("landscape-primary")
            .then(function() {
                lockButton.style.display = 'none';
                document.querySelector(".container").style.backgroundColor = 'green';
            })
            .catch(function(error) {
                alert(error);
            });
    })

})