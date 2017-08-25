var video_play = function() {
video.play();
  overlay.style.display = 'none';
}
  var overlay= document.getElementById('overlay');
  var video= document.getElementById('v');
  
  overlay.onclick = function() { 
  video_play();
}
video.onended = function () {
  overlay.style.display = 'flex';

}
  window.onscroll = function() {
  video.play();

};