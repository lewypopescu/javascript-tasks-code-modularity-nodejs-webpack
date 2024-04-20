import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.getElementById('vimeo-player');
const playerV = new Player(vimeoPlayer);

const playerPlay = throttle(function timeSee(data) {
  const currentTimeV = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTimeV);
}, 1000);

playerV.on('timeupdate', playerPlay);

const startTimeGet = localStorage.getItem('videoplayer-current-time');

playerV.setCurrentTime(startTimeGet);
