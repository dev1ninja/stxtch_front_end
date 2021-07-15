import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'
import classnames from 'classnames'
import { useRouter } from 'next/router'

const Image = ({width, media, title, group, className, id, ratio}) => {

  const router = useRouter()
  return (
    <div className={classnames(styles.Image, className, "cursor-pointer")} style={{width}} onClick={ () => { router.push("/storyPage/" + id)}} >
    <RoundImage src={media[0]?.url} ratio={ ratio } gradient={true}/>
    <div className={styles.Image_texts}>
      {title && (
      <div className={styles.Image_title}>{title}</div>
      )}
      { group?.name && (
      <div className={styles.Image_comment}>#{group?.name}</div>
      )}
    </div>
    </div>
  )
}

export default Image