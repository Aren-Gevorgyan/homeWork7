$(document).ready(function() {

    $('#ok').click(function() {
        if (document.documentElement.requestFullscreen)
            document.querySelector("#container").requestFullscreen();
        else if (document.documentElement.webkitRequestFullScreen)
            document.querySelector("#container").webkitRequestFullScreen();

        screen.orientation.lock("landscape-primary")
            .then(function() {
                _LOCK_BUTTON.style.display = 'none';
                _UNLOCK_BUTTON.style.display = 'block';
            })
            .catch(function(error) {
                alert(error);
            });
    })

    document.addEventListener('fullscreenchange', exitHandler);
    document.addEventListener('webkitfullscreenchange', exitHandler);
    document.addEventListener('mozfullscreenchange', exitHandler);
    document.addEventListener('MSFullscreenChange', exitHandler);

    function exitHandler() {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            ///fire your event
            alert(5);
        }
    }

})