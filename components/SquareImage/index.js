import styles from './index.module.scss'
import classnames from 'classnames';
import { useState, useEffect } from 'react';
import play_icon from 'assets/images/play.svg'
import icon_fullscren from 'assets/images/fullscreen.svg'
import icon_fullscren_collapse from 'assets/images/storyPage/fullscreen_collapse.svg'
import icon_cross from 'assets/images/storyPage/cross.svg'
import icon_pause from 'assets/images/storyPage/pause.svg'
import icon_pulse from 'assets/images/storyPage/pulse.svg'
import useProgressiveImage from 'hooks/useProgressiveImage'
import { useDispatch } from 'react-redux';
import { headerActions } from '_redux/_actions';

const SquareImage = ({src, alt, className, play, fullscreen, gradient, imageClass, fullscreenOnClick}) => {
    const [isFullscreen, setFullscreen] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
      if(isFullscreen){
        dispatch(headerActions.hide_header())
        document.body.classList.add('overflow-hidden')
    } else {
        dispatch(headerActions.show_header())
        document.body.classList.remove('overflow-hidden')
      }
    }, [isFullscreen])
    return (
        <div className={classnames(styles.wrapper, className, !isFullscreen && fullscreenOnClick && "cursor-pointer")} 
            onClick={() => !isFullscreen && fullscreenOnClick && setFullscreen(true)}>
            <img src={src} alt={alt} className={classnames("object-cover rounded-xl w-full h-full top-0 left-0 absolute bg-gray-500", imageClass)} />
            { gradient && <div className={classnames("rounded-xl", styles.gradient)}/> }
            {
                play && (
                    <img src={play_icon} className={styles.play}/>
                )
            }
            {
                fullscreen && (
                    <div className="lg:hidden" onClick={() => setFullscreen(true)}>
                        <img src={icon_fullscren} className={styles.icon_fullscren}/>
                    </div>
                )
            }
            <div className={classnames("hidden", isFullscreen && styles.fullscreen)}>
                <img src={src} alt={alt} className={classnames("w-full h-full bg-gray-500")} />
                <div className={"cursor-pointer absolute right-6 top-6"} onClick={() => setFullscreen(false)}>
                    <img src={icon_cross} />
                </div>
                <div className={"cursor-pointer absolute left-6 bottom-6"}>
                    <img src={icon_pause} />
                </div>
                <div className={"cursor-pointer absolute left-14 bottom-5 text-gray-50 text-base"}>
                    1.04 / -03.56
                </div>
                <div className={"cursor-pointer absolute right-14 bottom-6"}>
                    <img src={icon_pulse} />
                </div>
                <div className={"cursor-pointer absolute right-6 bottom-6"} onClick={() => setFullscreen(false)}>
                    <img src={icon_fullscren_collapse} />
                </div>
            </div>
        </div>
    )
}

export default SquareImage