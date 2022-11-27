
let playlistbtn = document.querySelector(".playlist-btn");
let playlistToggal = document.querySelector(".play-list-hide");
let closebtn = document.querySelector(".close-playlist");
//heart
let heartbtn = document.querySelector(".heart-btnn i");
//mute btn
let unmutebtn = document.querySelector(".o-icon-u");
//song Name
let songName = document.querySelector(".song-Name");
//artiest
let songArtiest = document.querySelector(".Artiest-name");
//Image
let songImage = document.querySelector(".song-Img");
// music
let songAudio = document.querySelector(".Music-src");
//play pouse btn
let playpousebtn = document.querySelector(".play-pouse-btn");
//play pouse btn Icon
let playpouseIcon = document.querySelector(".play-pouse-btn i");
//music peervius btn
let mpreuves = document.querySelector(".music-perveus");
//music next btn
let mnext = document.querySelector(".music-next");
//main-duration
let mainduration = document.querySelector(".main-duration");
//current duration
let currentduration = document.querySelector(".current-duration");
//progress-baar-width
let progressbaarWhidth = document.querySelector(".progress-baar-width");
//progressAriya
let progressAriya = document.querySelector(".progress-baar");
//playlistS
//laylist song Name
// let platListsName = document.querySelector(".p-s-Name");
// //playlist artist name
// let platListsAname = document.querySelector(".p-s-a-name");
// //playlist song duration
// let platListsduration = document.querySelector(".p-s-duration");
// //playlist song Img
// let platListsImg = document.querySelector(".p-s-img");

//all music 
let allMusic = [{
    name: "landscape",
    Artist: "jarico",
    Image: "./image/benner/landscape-jarico.png",
    src: "./audio/2.mp3"
},
{
    name: "on on",
    Artist: "Cartoon",
    Image: "./image/benner/on-on=cartoon.png",
    src: "./audio/3.mp3"
},
{
    name: "fade",
    Artist: "Alan Walker",
    Image: "./image/benner/on-on=cartoon.png",
    src: "./audio/4.mp3"
},
{
    name: "Candyland",
    Artist: "Tobu",
    Image: "./image/benner/candyland-tobu.png",
    src: "./audio/5.mp3"
},
{
    name: "Spectre",
    Artist: "Alan Walker",
    Image: "./image/benner/on-on=cartoon.png",
    src: "./audio/6.mp3"
},
{
    name: "vision",
    Artist: "Elektronomia",
    Image: "./image/benner/on-on=cartoon.png",
    src: "./audio/7.mp3"
}
]
//music load
let MusicIndex = 4;
window.addEventListener("load", () => {
    loadmusic(MusicIndex); //calling loading 
});

//load music function
function loadmusic(indexNumg) {
    songName.innerText = allMusic[indexNumg - 1].name;
    songArtiest.innerText = allMusic[indexNumg - 1].Artist;
    songImage.src = allMusic[indexNumg - 1].Image;
   songAudio.src = allMusic[indexNumg - 1].src;

}

// play list toggal
playlistbtn.addEventListener("click", () => {
    playlistToggal.classList.add("play-list-toogle");
    playlistToggal.classList.remove("play-list-hide");
});
//close btn 
closebtn.addEventListener("click", () => {
    playlistToggal.classList.remove("play-list-toogle");
});

//heart btn
heartbtn.addEventListener("click", () => {
    heartbtn.classList.toggle("o-icon-F");
    heartbtn.classList.toggle("o-icon-f");
});
// Mute btn
unmutebtn.addEventListener("click", () => {
    unmutebtn.classList.toggle("o-icon-u");
    unmutebtn.classList.toggle("o-icon-l");
});
//play pouse btn
playpousebtn.addEventListener("click" , ()=>{
playpousefun();
});
function playpousefun(){
if (songAudio.paused || songAudio.currentTime <= 0) {
    songAudio.play();
    playpouseIcon.classList.remove("o-icon-o");
    playpouseIcon.classList.add("o-icon-h");
}
else{
    songAudio.pause();
    playpouseIcon.classList.add("o-icon-o");
    playpouseIcon.classList.remove("o-icon-h");
}
}
//pervius btn
mpreuves.addEventListener("click" , ()=>{
    MusicIndex--;
    MusicIndex < 1 ? MusicIndex = allMusic.length : MusicIndex = MusicIndex;
    loadmusic(MusicIndex);
    playpousefun();
    songAudio.play();
});

//next btn
mnext.addEventListener("click" , ()=>{
MusicIndex++;
MusicIndex > allMusic.length ? MusicIndex = 1 : MusicIndex = MusicIndex;
loadmusic(MusicIndex);
playpousefun();
songAudio.play();
});

//music sink baar 
songAudio.addEventListener("timeupdate", () => {
    let prograse = parseInt(
        (songAudio.currentTime / songAudio.duration) * 100
    );
    progressbaarWhidth.style.width = `${prograse}%`;
    songImage.style.transform = `rotate(${prograse}deg)`;

    // transform: rotate(45deg);
    //Audio Total time
    songAudio.addEventListener("loadeddata", () => {
        let audioduration = songAudio.duration;
        let totalmin = Math.floor(audioduration / 60);
        let totalsec = Math.floor(audioduration % 60);
        if (totalsec < 10) {
            totalsec = `0${totalsec}`;
        }
        mainduration.innerText = `${totalmin}:${totalsec}`;
        
    });

    //currentTime current time
    let audiocurrentTime = songAudio.currentTime;
    let currentmin = Math.floor(audiocurrentTime / 60);
    let currentsec = Math.floor(audiocurrentTime % 60);
    if (currentsec < 10) {
        currentsec = `0${currentsec}`;
    }
    currentduration.innerText = `${currentmin}:${currentsec}`;


});

//--progress ariya click to music 
progressAriya.addEventListener("click", (e) => {
    let progaresswidthvell = progressAriya.clientWidth; //gatting whidth in progress bar
    let cilckedoffsetXvalue = e.offsetX; //gatting offset X value
    let songDuration = songAudio.duration; //song totale dduration
    songAudio.currentTime = (cilckedoffsetXvalue / progaresswidthvell) * songDuration;
     playpousefun();
   songAudio.play();
});
///play list music
// window.addEventListener("load", () => {
//     playlistm(MusicIndex); //calling loading 
// });
// function playlistm(indexNumg) {
//     platListsName.innerText = allMusic[indexNumg - 1].name;
//     platListsAname.innerText = allMusic[indexNumg - 1].Artist;
//     platListsImg.src = allMusic[indexNumg - 1].Image;
// //    platListsduration.src = allMusic[indexNumg - 1].src;

// }