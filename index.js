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

var pathToData = "visitorInfo.visitorName";
lpTag.agentSDK.get(pathToData, onSuccess, onError);

var cmdName = lpTag.agentSDK.cmdNames.write;
var data = { text: "hello world"};
lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
