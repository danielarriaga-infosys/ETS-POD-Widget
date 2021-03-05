lpTag.agentSDK.init({
    notificationCallback: notificationHandler,
    visitorFOcusedCallback: focusHandler,
    visitorBlurredCallback: blurHander
});

var pathToData = "visitorInfo.visitorName";
lpTag.agentSDK.get(pathToData, onSuccess, onError);

var cmdName = lpTag.agentSDK.cmdNames.write;
var data = { text: "hello world"};
lpTag.agentSDK.command(cmdName, data, notifyWhenDone);