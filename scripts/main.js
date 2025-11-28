function openFile() {
    var path = '';
    var platform = navigator.platform.toLowerCase();

    if (platform.includes('win')) {
        path = 'file:///S:/CurricShared/Get Work/Wozniak/Year_10_DIGT';
    } else if (platform.includes('mac')) {
        path = 'file:///Users/Shared/CurricShared/Get Work/Wozniak/Year_10_DIGT';
    } else if (platform.includes('linux')) {
        path = 'file:///home/user/CurricShared/Get Work/Wozniak/Year_10_DIGT';
    }

    window.open(path, 'newwindow', 'width=1000,height=618');
}

function openImage(url) {
    var img = new Image();
    img.onload = function() {
        var width = img.width * 1.0;
        var height = img.height * 1.0;
        window.open(url, 'newwindow', 'width=' + width + ',height=' + height);
    };
    img.src = url;
}