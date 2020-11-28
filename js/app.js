function getWelcome() {
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
            if (ajaxRequest.status == 200) {
                document.getElementById("welcome").innerHTML = ajaxRequest.responseText;
            } else {
                console.log("Status error: " + ajaxRequest.status);
            }
        } else {
            console.log("Ignored readyState: " + ajaxRequest.readyState);
        }
    };
    ajaxRequest.open(
        "GET",
        "https://happycoding.io/tutorials/javascript/example-ajax-files/simple-welcome.txt"
    );
    ajaxRequest.send();
}