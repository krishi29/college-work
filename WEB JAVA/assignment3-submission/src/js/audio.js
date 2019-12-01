// Data for the "HTML Audio" Page

var audio = {
    controls: true,
    source: [
        {
            src:
                'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3',
            type: 'audio/mpeg'
        },
        {
            src:
                'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg',
            type: 'audio/ogg'
        }
    ]
};
var myDiv = document.getElementById('audio');
var audioelement = document.createElement('audio');
audioelement.controls = audio.controls;
for (i = 0; i < audio.source.length; i++) {
    var sourceelement = document.createElement('source');
    sourceelement.src = audio.source[i].src;
    sourceelement.type = audio.source[i].type;
    audioelement.appendChild(sourceelement);
}
myDiv.appendChild(audioelement);
