$(document).ready(function() {

    $('#ok').click(function() {
        if (document.documentElement.requestFullscreen)
            document.querySelector(".container").requestFullscreen();
        else if (document.documentElement.webkitRequestFullScreen)
            document.querySelector(".container").webkitRequestFullScreen();

        screen.orientation.lock("landscape-primary")
            .then(function() {


            })
            .catch(function(error) {
                alert(error);
            });
    })

})