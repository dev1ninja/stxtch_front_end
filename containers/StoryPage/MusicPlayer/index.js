import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames'
import svg_play from 'assets/images/storyPage/mobile_play.svg'
import svg_prev from 'assets/images/storyPage/prev.svg'
import svg_next from 'assets/images/storyPage/next.svg'
import svg_line from 'assets/images/storyPage/line.svg'
import svg_pulse from 'assets/images/storyPage/pulse.svg'
import svg_menu from 'assets/images/storyPage/menu.svg'
import svg_pause from 'assets/images/storyPage/mobile_pause.svg'

import svg_play_1 from 'assets/images/storyPage/play_1.svg'
import svg_pause_1 from 'assets/images/storyPage/pause_1.svg'
import svg_prev_1 from 'assets/images/storyPage/prev_1.svg'
import svg_next_1 from 'assets/images/storyPage/next_1.svg'

function MusicPlayer({className, onPlay, onStop, isPlay, onNextStory, onPrevStory}) {

  return (
    <div className={className}>
      <div className={classnames(styles.MusicPlayer, "w-full flex flex-col lg:hidden")}>
        <div className="justify-center py-4 flex">
          <img src={svg_line}/>
        </div>
        <div className="flex flex-grow items-center justify-around">
          <div className="hidden">
            <img className="cursor-pointer" src={svg_menu}/>
          </div>
          <div className="cursor-pointer" onClick={onPrevStory}>
            <img src={svg_prev}/>
          </div>
          <div className="cursor-pointer" onClick={isPlay ? onStop : onPlay}>
            <img src={isPlay ? svg_play : svg_pause} style={{    transform: "translate(8px, 0px)"}}/>
          </div>
          <div className="cursor-pointer" onClick={onNextStory}>
            <img src={svg_next}/>
          </div>
          <div className="hidden">
            <img className="cursor-pointer" src={svg_pulse}/>
          </div>
        </div>
      </div>
      <div className={classnames(styles.MusicPlayer, " flex-col hidden lg:flex mx-10")}>
        <div className="flex flex-grow items-center justify-between px-6">
          <div className="flex items-center cursor-pointer" onClick={onPrevStory}>
            <img src={svg_prev_1} className="pr-4"/>
            <div>Previous Story</div>
          </div>
          <div className="cursor-pointer" onClick={isPlay ? onStop : onPlay}>
            <img src={isPlay ? svg_play_1 : svg_pause_1} style={{    transform: "translate(8px, 0px)"}}/>
          </div>
          <div className="flex items-center cursor-pointer" onClick={onNextStory}>
            <div>Next Story</div>
            <img src={svg_next_1} className="pl-4"/>
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default MusicPlayer;