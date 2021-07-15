import React from 'react'
import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'
import SquareImage from 'components/SquareImage'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import classnames from 'classnames'

const Image = ({width, className, id, media, name, stories, play}) => {
    const router = useRouter()
    let coverImages = media.filter(media => media.type === "image" && media.groupmedias.isCover)
    coverImages.sort((a, b)=>{
        return b.groupmedias.isCover - a.groupmedias.isCover
    })
    console.log("coverImages:", coverImages);

    return (
        <Link href={`/groupPage/${id}`}>
            <a className={classnames("m-auto w-full relative", className)} style={{width}}>
                <SquareImage src={coverImages[0]?.url ?? media[0].url} className={classnames(styles.Image_paddings)} gradient={true}/>
                <div className="flex justify-between py-2">
                    <div className={styles.Image_comment}>#{name}</div>
                    <div className={styles.Image_stories}>{stories.length.toLocaleString("en")} stories</div>
                </div>
            </a>
        </Link>
    )
}

export default Image