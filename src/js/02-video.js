import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'cutternt-time';

setCurrentTimeFunc()
getCurrentTime();

function getCurrentTime() {
    player.on('timeupdate',
        throttle((data) => {
            localStorage.setItem(STORAGE_KEY, data.seconds)
        }, 1000));
}

function setCurrentTimeFunc() {
    const currentTime = localStorage.getItem(STORAGE_KEY);

    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
}