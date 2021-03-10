var notificationHandler = function(data) {
    // Do something with the notifications
};

var focusHandler = function() {
    // Do something when the visitor is focused
    // Assume the visitor is focused to begin with
};

var blurHandler = function() {
    // Do something when the visitor is blurred
    // Assume the visitor is focused to begin with
};

var onSuccess = function(data) {
    if (data[data.length - 1].source == 'visitor') {
        var text = data[data.length - 1].text;
        if (text.includes("?")) {
            // Typical action to be performed when the document is ready:
            document.getElementById("info").innerHTML = text;

            // Structured Content
            var cmdName = lpTag.agentSDK.cmdNames.writeSC; // = "Write StructuredContent"
            var data = {
                json: {
                    "type": "text",
                    "text": "product name",
                    "tooltip": "text tooltip",
                    "style": {
                        "bold": true,
                        "size": "large"
                    }
                },
                metadata: [	//metadata is optional
                    {"type":"ExternalId","id":"running364"},
                    {"type":"ExternalId","id":"soccer486"}
                ]
};

lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
        }
    }
    console.log(data);
};

var onError = function(err) {
    // Do something with the error
};

lpTag.agentSDK.init({
    notificationCallback: notificationHandler,
    visitorFocusedCallback: focusHandler,
    visitorBlurredCallback: blurHandler
});

var pathToData = "chatTranscript.lines";
lpTag.agentSDK.get(pathToData, onSuccess, onError);

// Structured Content

var notifyWhenDone = function(err) {
    if (err) {
        // Do something with the error
    }
    // called when the command is completed successfully,
    // or when the action terminated with an error.

    var cmdName = "Send Notification";
    var data = {};

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
};

//var cmdName = lpTag.agentSDK.cmdNames.write;
//var data = { text: "hello world"};
//lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
