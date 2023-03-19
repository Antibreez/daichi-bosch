var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

console.log(firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var player;
window.onYouTubeIframeAPIReady = function () {
  console.log("ready");
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: "4jMNTNpiLtU",
    playerVars: {
      playsinline: 1,
      rel: 0,
      modestbranding: 1,
    },
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }
  });
};
