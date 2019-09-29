

var GetRandomColor = function () {
    var color = generateRandomColor();
    $('.blazor-card').css('background-color', color);
};

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.ShowAlertJsMethod = (message) => {
    alert(message);
}

window.ShowMessageFromCSharp = () => {
    DotNet.invokeMethodAsync('BlazorApp_Server', 'GetMessage')
        .then(message => {
            alert(message);
        });
}