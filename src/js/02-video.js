import Player from '@vimeo/player';

const vimeoPlayer = document.getElementById('vimeo-player');

const playerV = new Player(vimeoPlayer);

playerV.on(
  'play',
  throttle(function saveTime(e) {
    e.preventDefault();
    const currentT = () => {
      localStorage.setItem(
        'currentTime',
        'playerV.getCurrentTime(data - seconds)'
      );
      const valueCT = localStorage.getItem('currentTime');
      return valueCT;
    };
    const setCurrentT = playerV.setCurrentTime(currentT);
    return setCurrentT;
  }, 200)
);
