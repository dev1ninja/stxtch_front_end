import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import play_icon from 'assets/images/play.svg'
import classnames from 'classnames'
import ModalVideo from 'react-modal-video'
import { headerActions } from '_redux/_actions'
import { useDispatch, useSelector } from 'react-redux';

const Player = ({ width, src, title, comment, mediaType, coverVideo }) => {
  const [play, setPlay] = useState(true)
  const [isOpen, setOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpen) {
      dispatch(headerActions.hide_header())
    } else {
      dispatch(headerActions.show_header())
    }
  }, [isOpen])

  return (
    <div className={styles.Player}>
      <div className={styles.fixed}>
        {
          (mediaType=="image" && <img src={src} className={classnames(styles.coverMedia)} />) || 
          (mediaType=="video" && 
            <video autoPlay muted loop className={classnames(styles.coverMedia)}>
              <source src={src} type="video/mp4"/>
            </video>
          )
        }
        {
          play && (
            <div className={classnames(styles.description, "pl-4")}>
              { coverVideo &&  <img src={play_icon} className="pb-4 cursor-pointer" onClick={() => setOpen(true)} />}
              <div className={classnames(styles.text, "text-white")}>
                {title}
              </div>
            </div>
          )
        }
      </div>
      <ModalVideo className="modal-video-movie-wrap" channel='custom' url={coverVideo + '?autoplay=1'} autoplay isOpen={isOpen} onClose={() => setOpen(false)} />
    </div>
  )
}

export default Player