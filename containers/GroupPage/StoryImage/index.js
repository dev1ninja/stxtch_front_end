import styles from './index.module.scss'
import SquareImage from 'components/SquareImage'
import classnames from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const Image = ({width, media, title, author, className, id}) => {
  return (
    <Link href={`/storyPage/${id}`}>
      <a className={classnames("w-full relative", className)} style={{width}} >
        <SquareImage src={media[0]?.url} className={classnames(styles.Image_paddings)} gradient={true}/>
        <div className="pb-5 pr-2 lg:pb-2 xl:pb-2 absolute bottom-0">
          {title && (
          <div className={classnames(styles.Image_title, "text-3xl lg:text-2xl px-7 lg:px-2 2xl:px-7 pb-2")}>{title}</div>
          )}
          { author && (
          <div className={classnames(styles.Image_author, "text-lg lg:text-base 2xl:text-lg pb-4 lg:pb-1 2xl:pb-4  px-7 lg:px-2 2xl:px-7")}>{author}</div>
          )}
        </div>
      </a>
    </Link>
  )
}

export default Image