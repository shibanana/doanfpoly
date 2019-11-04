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
import ic_next_arrow from '../images/icon/next-arrow.png';
import ic_notification from '../images/icon/notification.png';
import ic_logout from '../images/icon/logout.png';
import ic_block from '../images/icon/block.png';
import ic_song from '../images/icon/song.png';
import ic_back from '../images/icon/back.png';
import ic_close from '../images/icon/close-button.png';
import ic_more from '../images/icon/ellipsis.png';

import loinho from '../images/loinho.mp3';
import bg from '../images/background.png';
import user from '../images/user.png';
import playlist from '../images/playlistThumbnail.jpg';
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
IC_NEXT_ARROW: ic_next_arrow,
IC_NOTIFICATION: ic_notification,
IC_LOGOUT: ic_logout,
IC_BLOCK: ic_block,
IC_SONG: ic_song,
IC_BACK: ic_back,
IC_CLOSE: ic_close,
IC_MORE: ic_more,

LOINHO: loinho,
BG: bg,
USER: user,
PLAYLIST: playlist,

/**
 ** API configurations
**/
API: {
    URL: "http://192.168.1.7/demophp",
    URL_GET_ITEM: "http://192.168.1.7/",
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