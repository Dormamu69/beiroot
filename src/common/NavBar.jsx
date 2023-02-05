import React from 'react';
import { faMaximize,faMinimize, faVolumeXmark, faVolumeHigh, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Nav = ({home}) => {
    const [isFullScreen, setIsFullScreen] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(true);
const fullscreen = () => {
        // make window full screen
        if (!isFullScreen) {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
            }
        else {
            document.exitFullscreen();
            setIsFullScreen(false);
        }

    }
    const playAudio = () => {
        // play the audio
        const audioEl = document.getElementById("bg");
        audioEl.play()
    }
    const pauseAudio = () => {
        // pause the audio
        const audioEl = document.getElementById("bg");
        audioEl.pause()
    }

    const mute = () => {
        // mute the audio
        if (!isMuted) {
            
            setIsMuted(true);
            pauseAudio();

        }
        else {
            setIsMuted(false);
            playAudio();
        }
    }
   
    return ( 
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <audio id='bg' src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop></audio>
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="buttons">
              <a className="button is-primary" onClick={()=>{fullscreen()} }> <FontAwesomeIcon icon={isFullScreen?faMinimize: faMaximize} /> </a>
              { home && <Link className="button is-primary" to={"/"} > <FontAwesomeIcon icon={faHome} /> </Link>}
            </div>
            
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" onClick={()=>{mute()}}><FontAwesomeIcon icon={isMuted?faVolumeXmark:faVolumeHigh}/></a>
                {/* <a className="button is-primary">Full Screen Icon</a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
     );
}
 
export default Nav;