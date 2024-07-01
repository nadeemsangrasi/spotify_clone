var songs = [{
        name: "DEKH_LENA_Full_audio_Song.mp3",
        url: "./Songs/DEKH_LENA_Full_Video_Song__Tum_Bin_2__Arijit_Singh_&_Tulsi_Kumar__Neha_Sharma,_Aditya_&_Aashim(256k).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    {
        name: "Dil_(Full_audio).mp3",
        url: "./Songs/Dil_(Full_Video)_Raghav's_Version__Ek_Villain_Returns__John,_Disha,_Arjun,_Tara__Kaushik-Guddu(256k).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    {
        name: "Hai Chand Par Daag.mp3",
        url: "./Songs/Hai Chand Par Daag Paar Tujhme Ek Bhi_320(PaglaSongs).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    {
        name: "Kaifi_Khalil_-_Kahani_Suno.mp3",
        url: "./Songs/Kaifi_Khalil_-_Kahani_Suno_2.0_[Official_Music_Video](256k).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    {
        name: "Kaifi_Khalil_-_Mansoob.mp3",
        url: "./Songs/Kaifi_Khalil_-_Mansoob_[Official_Music_Video](256k).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    {
        name: "Kaifi_Khalil_-_Tauseep_x.mp3",
        url: "./Songs/Kaifi_Khalil_-_Tauseep_x_Urdu_Mashup_[Official_Music_Video](256k).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    {
        name: "Kesariya_-_Brahmāstra.mp3",
        url: "./Songs/Kesariya_-_Brahmāstra__Ranbir_Kapoor__Alia_Bhatt__Pritam__Arijit_Singh__Amitabh_Bhattacharya(256k).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    {
        name: "Meri_Jaan_Tune.mp3",
        url: "./Songs/Meri_Jaan_Tune_Mujhko_Pagal_Hai_Kya__King_-_Tu_Maan_Meri_Jaan__New_Punjabi_Song(256k).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    {
        name: "Talha_Anjum_-_Downers.mp3",
        url: "./Songs/Talha_Anjum_-_Downers_At_Dusk__Prod._by_Umair_(Official_Audio)(256k).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    {
        name: "Tera_Mera_Safar.mp3",
        url: "./Songs/Tera_Mera_Safar_(slowed_+Reverb)(256k).mp3",
        img: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },];
var makeResponsiveSideBar = function () {
    var hamburgerBtn = document.querySelector("#hamburger");
    var closeBtn = document.querySelector("#close");
    var sideBar = document.querySelector(".container .left");
    hamburgerBtn.addEventListener("click", function () {
        sideBar.style.left = "0%";
    });
    closeBtn.addEventListener("click", function () {
        sideBar.style.left = "-110%";
    });
};
makeResponsiveSideBar();
var playSongs = function (songs) {
    var playBtns = document.querySelectorAll(".song .btns");
    var seekBarSongName = document.querySelector("#seekBarsongTitle");
    var seekBarplayBtn = document.querySelector("#seekBarPlayBtn");
    var audio = new Audio();
    audio.src = songs[0].url;
    var index = 0;
    var forward = document.querySelector("#seekBarFowardBtn");
    var backBtn = document.querySelector("#seekBarBackBtn");
    forward.addEventListener("click", function () {
        var _a;
        index++;
        audio.src = songs[index].url;
        seekBarplayBtn.src = "./SVG/push.svg";
        audio.play();
        playBtns.forEach(function (newelem) {
            if (newelem === playBtns[index]) {
                newelem.src = "./SVG/push.svg";
            }
            else {
                newelem.src = "./SVG/playBtn.svg";
            }
        });
        var parent = playBtns[index].parentNode;
        seekBarSongName.innerHTML = (_a = parent.childNodes[2].firstChild) === null || _a === void 0 ? void 0 : _a.textContent;
    });
    backBtn.addEventListener("click", function () {
        var _a;
        if (index > 0) {
            index--;
            audio.src = songs[index].url;
            seekBarplayBtn.src = "./SVG/push.svg";
            audio.play();
            playBtns.forEach(function (newelem) {
                if (newelem === playBtns[index]) {
                    newelem.src = "./SVG/push.svg";
                }
                else {
                    newelem.src = "./SVG/playBtn.svg";
                }
            });
            var parent_1 = playBtns[index].parentNode;
            seekBarSongName.innerHTML = (_a = parent_1.childNodes[2].firstChild) === null || _a === void 0 ? void 0 : _a.textContent;
        }
    });
    playBtns.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            var _a;
            index = i;
            if (elem.parentNode !== null) {
                seekBarSongName.innerHTML =
                    (_a = elem.parentNode.childNodes[2].firstChild) === null || _a === void 0 ? void 0 : _a.textContent;
            }
            audio.src = songs[i].url;
            audio.play();
            playBtns.forEach(function (elem2) {
                if (elem == elem2) {
                    elem2.src = "./SVG/push.svg";
                    seekBarplayBtn.src = "./SVG/push.svg";
                }
                else {
                    elem2.src = "./SVG/playBtn.svg";
                }
            });
        });
    });
    var flage = 0;
    seekBarplayBtn.addEventListener("click", function () {
        if (flage == 0 && audio.currentTime !== 0) {
            seekBarplayBtn.src = "./SVG/playBtn.svg";
            audio.pause();
            playBtns.forEach(function (elem3) {
                elem3.src = "./SVG/playBtn.svg";
            });
            flage = 1;
        }
        else {
            seekBarplayBtn.src = "./SVG/push.svg";
            audio.play();
            playBtns.forEach(function (elem3) {
                if (playBtns[index] == elem3) {
                    elem3.src = "./SVG/push.svg";
                }
                else {
                    elem3.src = "./SVG/playBtn.svg";
                }
            });
            flage = 0;
        }
    });
    var seekbar = document.getElementById('seekbar');
    var volumeRange = document.getElementById('range');
    var showTime = document.querySelector("#songTime");
    var totalDuration;
    var totalMinutes;
    var totalSeconds;
    audio.addEventListener("loadedmetadata", function () {
        totalDuration = audio.duration;
        totalMinutes = Math.floor(totalDuration / 60);
        totalSeconds = Math.floor(totalDuration % 60);
    });
    audio.addEventListener("timeupdate", function () {
        seekbar.value = ((audio.currentTime / audio.duration) * 100).toString();
        var currentTime = Math.floor(audio.currentTime);
        var currentMinutes = Math.floor(currentTime / 60);
        var currentSeconds = Math.floor(currentTime % 60);
        var totalTimeString = "".concat(totalMinutes < 10 ? '0' : '').concat(totalMinutes, ":").concat((totalSeconds < 10 ? '0' : '')).concat(totalSeconds);
        var currentTimeString = "0".concat(currentMinutes, ":").concat((currentSeconds < 10 ? '0' : '')).concat(currentSeconds);
        showTime.innerHTML = "".concat(totalTimeString, " / ").concat(currentTimeString);
    });
    var volumeImg = document.querySelector("#volume");
    function volumeChangeHandler() {
        var volume = parseFloat(volumeRange.value) / 100;
        volumeImg.src = "./SVG/volume.svg";
        audio.volume = volume;
    }
    volumeRange.addEventListener('input', volumeChangeHandler);
    seekbar.addEventListener('input', function () {
        var seekTime = (audio.duration / 100) * parseFloat(this.value);
        audio.currentTime = seekTime;
    });
    volumeImg.addEventListener("click", function () {
        volumeImg.src = "./SVG/mute.svg";
        volumeRange.removeEventListener("input", volumeChangeHandler);
        volumeRange.value = (0).toString();
        audio.volume = parseInt(volumeRange.value);
        function volumeChangeHandler() {
        }
    });
};
var addSongs = function (songs) {
    var songsContainer = document.querySelector(".songs-container");
    var clutter = "";
    for (var i = 0; i < songs.length; i++) {
        clutter += "<div class=\"song\"><img src=\"./SVG/music.svg\" alt=\"img\"> <div class=\"song-title\"><p>".concat(songs[i].name, "</p></div> <h4>Play Now</h4><img id=\"").concat(i, "\" class=\"btns\" src=\"./SVG/playBtn.svg\" alt=\"img\"></div>");
    }
    songsContainer.innerHTML = clutter;
    playSongs(songs);
};
addSongs(songs);
