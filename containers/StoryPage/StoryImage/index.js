import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'
import classnames from 'classnames';
import _ from 'lodash'

const StoryImage = ({story}) => {
  console.log("This is story", story)
  return (
    <div className={"pb-4 pt-8 lg:w-1/3 px-8 w-full " + styles.Image}>
      <RoundImage src={_.get(story, "media[0].url")} className={styles.Image_img + " w-full"} imageClass={styles.imageClass} fullscreen={true}/>
      <div className="flex justify-between py-2">
        <div className={classnames(styles.Image_comment, "lg:font-light font-bold")}>#{story.group?.name}</div>
        <div className={classnames(styles.Image_stories, "font-light")}>{story.user?.firstName + " " + story.user?.lastName}</div>
      </div>
  </div>
  )
}

export default StoryImage