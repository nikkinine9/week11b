function getWelcome() {
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
            //the request is completed, now check its status
            if (ajaxRequest.status == 200) {
                //turn JSON into object
                var jsonObj = JSON.parse(ajaxRequest.responseText);

                //get random object from array
                var randomMessagesArray = jsonObj.randomMessages;
                var randomIndex = Math.floor(
                    Math.random() * randomMessagesArray.length
                );
                var messageObj = randomMessagesArray[randomIndex];

                //use that object to set content and color
                document.getElementById("welcome").innerHTML = messageObj.message;
                document.getElementById("welcome").style.color = messageObj.color;
            } else {
                console.log("Status error: " + ajaxRequest.status);
            }
        } else {
            console.log("Ignored readyState: " + ajaxRequest.readyState);
        }
    };
    ajaxRequest.open(
        "GET",
        "https://happycoding.io/tutorials/javascript/example-ajax-files/random-welcomes.json"
    );
    ajaxRequest.send();
}