import React from 'react';
import MDBBtn from 'components/MDBbtn'
import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'
import classnames from 'classnames'
import Link from 'next/link'

const data_fake = [
  {
    title: "This is Exactly My World",
    author: "Priyanka Mukherjerie",
    src: "/images/groupPage/featuredStory1.svg",
    summary: "I felt more connected with myself the moment I stopped making my life a show for others.",
  }
]

const FeaturedItem = (prop) => {
  console.log("FeaturedItem prop:", prop)
  const { media, title, summary, author, id, } = prop
  const detail_text = "<div style='font-size:57px;color:#8C98EA;font-family:Tiempos Headline;margin-bottom:-29px;'>“</div>"
  const image = "/images/groupPage/featuredStory1.svg"
  const play = false
  const showFeaturedStory = () => {
  }
  return (
    <div className="flex flex-col lg:flex-row pr-8 lg:py-10 lg:px-8">
      <div className={classnames("w-full flex flex-col justify-center", styles.titlebox)}>
        <div className="py-3 w-max" style={{ fontSize: 18, fontWeight: "bold" }}>
          FEATURED STORY
        </div>
        <div className={styles.title}>
          {title}
        </div>
        <div className={classnames("text-md lg:text-lg py-3 lg:py-4 pb-4", styles.author)}>
          <b>{author}</b>, #DearMarketing
        </div>
        <div className="lg:text-center lg:pt-4">
          <MDBBtn color="elegant" className="black btn-radius-10" onClick={() => showFeaturedStory()}>
            <Link href={`/storyPage/${id}`}>
              read my story
            </Link>
          </MDBBtn>
        </div>
      </div>
      <div className={"pt-4 flex " + styles.detail}>
        <RoundImage src={media[0].url} play={play} imageClass={styles.image} />
        <div className={classnames(styles.detail_text, "flex flex-col justify-center")}>
          <div dangerouslySetInnerHTML={{ __html: detail_text }} />
          {summary}
        </div>
      </div>

    </div>
  )
}

const FeaturedStory = (props) => {
  let data = props.data
  console.log("FeaturedStory",data)
  if (data === undefined) data = data_fake[0]
  return (
    <div className={"pt-6 pb-16 px-4 flex " + styles.FeaturedStory} style={{ overflowX: "auto" }}>

      <div className="flex w-full">
        <FeaturedItem {...data} />
        <div className={styles.splitter} />
        <div className='flex flex-col w-max'>
          <div className="flex-grow">

          </div>
          <div className={classnames("flex", styles.text_3)}>
            <div className={classnames(styles.text_2, "text-lg lg:text-xl pl-4 flex flex-col justify-end pb-16")}>
              As a kid, I was always a new girl in my school as my dad had to move a lot for work. Every time we had to move to a new city and find a new school for me.
            </div>
            <div className="pl-8 pr-10 flex">
              <div className={classnames(styles.images)}>
                <RoundImage src="/images/groupPage/featuredStory2.svg" fullscreen={true} className={classnames(styles.images_size)} />
                <RoundImage src="/images/groupPage/featuredStory3.svg" fullscreen={true} className={classnames(styles.images_size, "pt-4")} />
              </div>
              <div>
                <RoundImage src="/images/groupPage/featuredStory4.svg" fullscreen={true} className={classnames(styles.images_size)} />
                <RoundImage src="/images/groupPage/featuredStory5.svg" fullscreen={true} className={classnames(styles.images_size, "pt-4")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedStory;