// Data for the "HTML Video" Page

var video = {
    controls: true,
    width: 320,
    height: 240,
    source: [
        {
            src:
                'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4',
            type: 'video/mp4'
        },
        {
            src:
                'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg',
            type: 'video/ogg'
        }
    ]
};

var myDiv = document.getElementById('videoDiv');
var videoElement = document.createElement('video');
videoElement.height = video.height;
videoElement.width = video.width;
if (video.controls) {
    videoElement.controls = true;
}
for (var i = 0; i < video.source.length; i++) {
    var sourceElement = document.createElement('source');
    sourceElement.src = video.source[i].src;
    sourceElement.type = video.source[i].type;
    videoElement.appendChild(sourceElement);
}
myDiv.appendChild(videoElement);
