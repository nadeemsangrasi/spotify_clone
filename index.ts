




type Songs = {
  name: string;
  url: string;
  img: string;
};
let songs: Songs[] = [{
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
},]

let makeResponsiveSideBar = (): void => {
  let hamburgerBtn = document.querySelector("#hamburger") as HTMLImageElement
  let closeBtn = document.querySelector("#close") as HTMLImageElement
  let sideBar = document.querySelector(".container .left") as HTMLDivElement
  hamburgerBtn.addEventListener("click", () => {
    sideBar.style.left = "0%";
  });

  closeBtn.addEventListener("click", () => {
    sideBar.style.left = "-110%";
  });

}
makeResponsiveSideBar()

let playSongs = (songs: Songs[]): void => {
  let playBtns: NodeListOf<HTMLImageElement> =
    document.querySelectorAll(".song .btns");
  let seekBarSongName = document.querySelector("#seekBarsongTitle") as any;
  let seekBarplayBtn = document.querySelector("#seekBarPlayBtn") as HTMLImageElement;
  let audio: HTMLAudioElement = new Audio();
  audio.src = songs[0].url
  let index: number = 0;


  let forward = document.querySelector("#seekBarFowardBtn") as HTMLImageElement;
  let backBtn = document.querySelector("#seekBarBackBtn") as HTMLImageElement
  forward.addEventListener("click", () => {
    index++;
    audio.src = songs[index].url;
    seekBarplayBtn.src = "./SVG/push.svg";
    audio.play();
    playBtns.forEach((newelem) => {
      if (newelem === playBtns[index]) {
        newelem.src = "./SVG/push.svg";
      } else {
        newelem.src = "./SVG/playBtn.svg";
      }
    });

    let parent = playBtns[index].parentNode as ParentNode;
    seekBarSongName.innerHTML = parent.childNodes[2].firstChild?.textContent;

  });
  backBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      audio.src = songs[index].url;
      seekBarplayBtn.src = "./SVG/push.svg";
      audio.play();
      playBtns.forEach((newelem) => {
        if (newelem === playBtns[index]) {
          newelem.src = "./SVG/push.svg";
        } else {
          newelem.src = "./SVG/playBtn.svg";
        }
      });
      let parent = playBtns[index].parentNode as ParentNode;
      seekBarSongName.innerHTML = parent.childNodes[2].firstChild?.textContent;
    }
  });
  playBtns.forEach((elem, i): void => {
    elem.addEventListener("click", (): void => {
      index = i;
      if (elem.parentNode !== null) {
        seekBarSongName.innerHTML =
          elem.parentNode.childNodes[2].firstChild?.textContent;
      }
      audio.src = songs[i].url;
      audio.play();
      playBtns.forEach(elem2 => {
        if (elem == elem2) {
          elem2.src = "./SVG/push.svg";
          seekBarplayBtn.src = "./SVG/push.svg";
        }
        else {
          elem2.src = "./SVG/playBtn.svg";

        }

      })
    })

  });

  let flage: number = 0;
  seekBarplayBtn.addEventListener("click", (): void => {
    if (flage == 0 && audio.currentTime !== 0) {
      seekBarplayBtn.src = "./SVG/playBtn.svg";
      audio.pause();
      playBtns.forEach((elem3): void => {
        elem3.src = "./SVG/playBtn.svg";
      });

      flage = 1;

    } else {
      seekBarplayBtn.src = "./SVG/push.svg";
      audio.play();
      playBtns.forEach((elem3): void => {
        if (playBtns[index] == elem3) {
          elem3.src = "./SVG/push.svg";
        } else {
          elem3.src = "./SVG/playBtn.svg";
        }
      });
      flage = 0;
    }
  });


  let seekbar = document.getElementById('seekbar') as HTMLInputElement;
  let volumeRange = document.getElementById('range') as HTMLInputElement;
  let showTime = document.querySelector("#songTime") as HTMLParagraphElement;

  let totalDuration: number;
  let totalMinutes: number;
  let totalSeconds: number;

  audio.addEventListener("loadedmetadata", () => {
    totalDuration = audio.duration;
    totalMinutes = Math.floor(totalDuration / 60);
    totalSeconds = Math.floor(totalDuration % 60);
  });

  audio.addEventListener("timeupdate", () => {
    seekbar.value = ((audio.currentTime / audio.duration) * 100).toString();
    let currentTime = Math.floor(audio.currentTime);
    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    let totalTimeString = `${totalMinutes < 10 ? '0' : ''}${totalMinutes}:${(totalSeconds < 10 ? '0' : '')}${totalSeconds}`;
    let currentTimeString = `0${currentMinutes}:${(currentSeconds < 10 ? '0' : '')}${currentSeconds}`;
    showTime.innerHTML = `${totalTimeString} / ${currentTimeString}`;
  });

  let volumeImg = document.querySelector("#volume") as HTMLImageElement
  function volumeChangeHandler() {
    let volume = parseFloat(volumeRange.value) / 100;
    volumeImg.src = "./SVG/volume.svg"
    audio.volume = volume;
  }
  volumeRange.addEventListener('input', volumeChangeHandler);


  seekbar.addEventListener('input', function () {
    const seekTime = (audio.duration / 100) * parseFloat(this.value);
    audio.currentTime = seekTime;
  });

  volumeImg.addEventListener("click", () => {
    volumeImg.src = "./SVG/mute.svg"
    volumeRange.removeEventListener("input", volumeChangeHandler)
    volumeRange.value = (0).toString()
    audio.volume = parseInt(volumeRange.value)

    function volumeChangeHandler() {
    }


  })


};
let addSongs = (songs: Songs[]): void => {
  let songsContainer = document.querySelector(
    ".songs-container"
  ) as HTMLDivElement;
  let clutter = "";
  for (let i = 0; i < songs.length; i++) {
    clutter += `<div class="song"><img src="./SVG/music.svg" alt="img"> <div class="song-title"><p>${songs[i].name}</p></div> <h4>Play Now</h4><img id="${i}" class="btns" src="./SVG/playBtn.svg" alt="img"></div>`;
  }
  songsContainer.innerHTML = clutter;
  playSongs(songs);
};

addSongs(songs);
