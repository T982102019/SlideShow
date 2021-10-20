let count = 1;
const src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");

function left() {
  count --;
  let URL;
  if(count==0) {
    count = 19;
    thumbnailsElement.children[0].classList.remove("selected");
  } else {
    thumbnailsElement.children[count].classList.remove("selected");
  }
  if(count<10) {
    URL = src + "0" + count + ".jpg";
  } else {
    URL = src + count + ".jpg";
  }
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[count-1].classList.add("selected");
}

function right() {
  count ++;
  let URL;
  if(count==20) {
    count = 1;
    thumbnailsElement.children[18].classList.remove("selected");
  } else {
    thumbnailsElement.children[count-2].classList.remove("selected");
  }
  if(count<10) {
    URL = src + "0" + count + ".jpg";
  } else {
    URL = src + count + ".jpg";
  }
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[count-1].classList.add("selected");
}


let nowPlaying = false;
let timer;

function play() {
  if (nowPlaying==false) {
    nowPlaying = true;
    autoPlay();
  }
}

function autoPlay() {
  right();
  timer = setTimeout(function(){
    autoPlay();
  }, 1000);
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  if(count==20) {
    count = 1;
    thumbnailsElement.children[18].classList.remove("selected");
  } else {
    thumbnailsElement.children[count-1].classList.remove("selected");
  }
  let URL = src + "01" + ".jpg";
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[0].classList.add("selected");
  count = 1;
}
