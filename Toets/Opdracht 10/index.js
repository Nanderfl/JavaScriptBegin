console.log(document.querySelectorAll('div'));
const video = document.createElement('video');
video.src =
  'https://archive.org/download/C.E.PriceCatWalksTowardCamera/cat_walks_toward_camera_512kb.mp4';


video.controls = true;
video.muted = false;
video.height = 240;
video.width = 320;

const box = document.getElementById('box');


box.appendChild(video);