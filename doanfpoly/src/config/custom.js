/**
 ** Config ALL VARIABLES IN PROJECT
 **/

import ic_disc from '../images/icon/disc.png';
import ic_eye from '../images/icon/eye.png';
import ic_unlike from '../images/icon/like.png';
import ic_like from '../images/icon/like (1).png';
import ic_pause from '../images/icon/pause-circular-button.png';
import ic_play from '../images/icon/play-circular-button.png';
import ic_next from '../images/icon/play-next-button.png';
import ic_previous from '../images/icon/previous-track.png';
import ic_playlist from '../images/icon/playlist.png';
import ic_statistics from '../images/icon/statistics.png';
import ic_vinyl from '../images/icon/vinyl.png';
import ic_youtube from '../images/icon/youtube.png';
import ic_shuffle from '../images/icon/shuffle.png';
import ic_loop from '../images/icon/exchange.png';
import ic_down_arrow from '../images/icon/down-arrow.png';
import loinho from '../images/loinho.mp3';
import bg from '../images/background.png'
export default{
/**
 ** IMAGE + ICON IN APP
**/
IC_DISC: ic_disc,
IC_EYE: ic_eye,
IC_UNLIKE: ic_unlike,
IC_LIKE: ic_like,
IC_PAUSE: ic_pause,
IC_PLAY: ic_play,
IC_NEXT: ic_next,
IC_PREVIOUS: ic_previous,
IC_PLAYLIST: ic_playlist,
IC_STATISTICS: ic_statistics,
IC_VINYL: ic_vinyl,
IC_YOUTUBE: ic_youtube,
IC_SHUFFLE: ic_shuffle,
IC_LOOP: ic_loop,
IC_DOWN_ARROW: ic_down_arrow,
LOINHO: loinho,
BG: bg,

/**
 ** API configurations
**/
API: {
    URL: "http://192.168.1.121/demophp",
    URL_GET_ITEM: "http://192.168.1.121/",
    TIMEOUT: 20000,
    HEADER: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    HEADER_2: {
        "Content-Type": "text/plain"
    }
},

/**
 ** DATA USER
**/
dataUser:'',
}